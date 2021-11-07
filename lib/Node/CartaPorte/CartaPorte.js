'use strict'

const Node = require('../Node')

class CartaPorte extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cartaporte:CartaPorte'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName () {
    return 'cfdi:Complemento'
  }

  
}

module.exports = CartaPorte