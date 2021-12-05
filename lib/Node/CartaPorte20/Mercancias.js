'use strict'

const Node = require('../Node')

class Mercancias extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte20:Mercancias'
  }


  /**
   *
   * @returns {boolean}
   */
  get multiple() {
    return true;
  }

}

module.exports = Mercancias