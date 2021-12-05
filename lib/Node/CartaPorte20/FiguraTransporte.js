'use strict'

const Node = require('../Node')

class FiguraTransporte extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte20:TiposFigura'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'cartaporte20:FiguraTransporte'
  }

  /**
   *
   * @returns {boolean}
   */
  get multiple() {
    return true;
  }



}

module.exports = FiguraTransporte