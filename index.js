'use strict'

const CFDI = require('./lib/CFDI');
const CFDIPago = require('./lib/CFDI-pago');
const CFDICartaPorte = require('./lib/CFDI-carta-porte');
const CartaPorteNodes = require('./lib/Node/CartaPorte');
const Emisor = require('./lib/Node/Emisor');
const Receptor = require('./lib/Node/Receptor');
const Concepto = require('./lib/Node/Concepto');
const CfdiRelacionado = require('./lib/Node/CfdiRelacionado');
const Traslado = require('./lib/Node/Impuesto/Traslado');
const Retencion = require('./lib/Node/Impuesto/Retencion');
const CuentaPredial = require('./lib/Node/CuentaPredial');
const InformacionAduanera = require('./lib/Node/InformacionAduanera');
const Parte = require('./lib/Node/Parte');
const Pago = require('./lib/Node/Pago');
const Complemento = require('./lib/Node/Complemento');

module.exports = {
  CFDI,
  CFDIPago,
  CFDICartaPorte,
  CartaPorteNodes,
  Emisor,
  Receptor,
  Concepto,
  CfdiRelacionado,
  Traslado,
  Retencion,
  CuentaPredial,
  InformacionAduanera,
  Parte,
  Pago,
  Complemento
};
