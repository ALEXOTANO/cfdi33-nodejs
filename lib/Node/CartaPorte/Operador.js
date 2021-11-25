'use strict'

const Node = require('../Node')

class Operador extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:Operador'
  }

  /**
  *
  * @returns {string}
  */
  get parentNodeName() {
    return 'cartaporte:Operadores'
  }
}

module.exports = Operador