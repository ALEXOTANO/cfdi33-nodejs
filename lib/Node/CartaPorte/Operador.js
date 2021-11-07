'use strict'

const Node = require('../Node')

class Operador extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:Domicilio'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'cartaporte:Operador'
  }

  /**
  *
  * @returns {string}
  */
  get wrapperNodeName() {
    return 'cartaporte:Operadores'
  }
}

module.exports = Operador