'use strict'

const Node = require('../Node')

class Destino extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:Destino'
  }
}

module.exports = Destino