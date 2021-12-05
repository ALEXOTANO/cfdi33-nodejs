'use strict'

const Node = require('../Node')

class CartaPorte20 extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cartaporte20:CartaPorte'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName () {
    return 'cfdi:Complemento'
  }

  
}

module.exports = CartaPorte20