'use strict'

const Node = require('./Node/Node')
const FileSystem = require('./Utils/FileSystem')
const xsltproc = require('xsltproc')
const JXON = require('jxon')
const fs = require('fs')
const crypto = require('crypto')

class CFDIPago extends Node {
	/**
	 *
	 * @returns {*}
	 */
	getXml() {
		return this._makeXml()
	}

	/**
	 *
	 * @returns {*}
	 * @private
	 */
	_makeXml(internal = false) {
		if (internal) {
			this.nodes = [];
		}

		console.log('creando XML: ');
		this.makeAllNodes()
		this.nodes.forEach(node => node.makeAllNodes());

		const Cfdi = JXON.unbuild(this.getAttributes(), null, this.nodeName);
		let xmlString = JXON.xmlToString(Cfdi);
		xmlString = xmlString.replace(' xmlns:cfdi=""', '');
		let xmlObject = JXON.stringToXml(xmlString);
		let jsObject = JXON.xmlToJs(xmlObject);

		if (!this.withOutCerts && !internal) {
			xmlObject = JXON.jsToXml(jsObject)
			xmlString = JXON.xmlToString(xmlObject);

			return this.getCadenaOriginal()
				.then(cadenaOriginal => this.getSello(cadenaOriginal))
				.then(sello => {
					jsObject['cfdi:Comprobante']['$Sello'] = sello;
					xmlObject = JXON.jsToXml(jsObject);
					xmlString = JXON.xmlToString(xmlObject);
					xmlString = `<?xml version="1.0" encoding="UTF-8"?>${xmlString}`;

					return Promise.resolve(xmlString)
				})
		} else {
			xmlString = `<?xml version="1.0" encoding="UTF-8"?>${xmlString}`;

			return Promise.resolve(xmlString)
		}
	}

	/**
	 *
	 * @returns {{xmlns:cfdi: string}}
	 */
	getDefaultAttributes() {
		let attr = {
			'$xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
			'$xmlns:pago10': 'http://www.sat.gob.mx/Pagos',
			'$xmlns:cfdi': 'http://www.sat.gob.mx/cfd/3',
			'$xsi:schemaLocation': `http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd http://www.sat.gob.mx/Pagos http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos10.xsd`,
			'$Version': CFDIPago.version
		}

		if (!this.withOutCerts) {
			attr['$Certificado'] = this.getCertificado()
		}
		

		return attr
	}

	/**
	 *
	 * @returns {Promise}
	 */
	getCadenaOriginal() {
		return new Promise((resolve, reject) => {
			FileSystem.manageDirectoryTemp('create')
			const fullPath = `./tmp/${FileSystem.generateNameTemp()}.xml`
			this._makeXml(true)
				.then(xml => {
					fs.writeFile(fullPath, xml, 'utf8', (err) => {

						if (err) {
							return reject(err)
						}
						const rutaCadenaOriginal = __dirname + '/../resources/cadenaoriginal_3_3.xslt';

						try {
							if (!fs.existsSync( rutaCadenaOriginal )){
								console.log('No se puede encontrar el archivo para la cadena original!....');
								reject('No se puede encontrar el archivo para la cadena original!.');
								return;
							}
						} catch (e) {
							console.log('No se puede encontrar el archivo para la cadena original!....');
							reject('No se puede encontrar el archivo para la cadena original!.');
							return;
						}

						const xslt = xsltproc.transform( rutaCadenaOriginal, fullPath );

						xslt.stdout.on('data', (data) => {
							try {
								FileSystem.manageDirectoryTemp('delete');
							} catch (e) {
								console.log('Error en: FileSystem.manageDirectoryTemp', e);
							}
							resolve(data);
							return;
						})

						xslt.stderr.on('data', (data, err) => {
							console.log('error... ', err)
							FileSystem.manageDirectoryTemp('delete')
							reject(data)
						})

						xslt.on('exit', (code) => {
							reject(code)
						})

					})
				})
		})
	}

	/**
	 *
	 * @param cadenaOriginal
	 * @returns {Promise<any>}
	 */
	getSello(cadenaOriginal) {
		return new Promise((resolve, reject) => {
			try {
				const pem = fs.readFileSync(this.key)
				const key = pem.toString('ascii')
				const sign = crypto.createSign('RSA-SHA256')
				sign.update(cadenaOriginal.toString('utf8'))

				return resolve(sign.sign(key, 'base64'))
			} catch (err) {
				return reject(err)
			}
		});
	}

	/**
	 *
	 * @returns {*}
	 */
	getCertificado() {
		let cer = FileSystem.readFileSync(this.cer)
		cer = cer.replace(/(-+[^-]+-+)/g, '');
		cer = cer.replace(/\s+/g, '');

		return cer;
	}

	/**
	 *
	 * @returns {string}
	 */
	static get version() {
		return '3.3'
	}

	/**
	 *
	 * @returns {string}
	 */
	get nodeName() {
		return 'cfdi:Comprobante'
	}

	/**
	 *
	 * @param value
	 */
	set withOutCerts(value) {
		this._withOutCerts = value
	}

	/**
	 *
	 * @param value
	 */
	set cer(value) {
		this._cer = value
	}

	/**
	 *
	 * @param value
	 */
	set key(value) {
		this._key = value
	}

	/**
	 *
	 * @returns {*}
	 */
	get cer() {
		return this._cer
	}

	/**
	 *
	 * @returns {*}
	 */
	get key() {
		return this._key
	}

	/**
	 *
	 * @returns {*}
	 */
	get withOutCerts() {
		return this._withOutCerts || false
	}
}

module.exports = CFDIPago
