'use strict'

const Node = require('../Node')

class Mercancia extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:Mercancia'
  }

    /**
 *
 * @returns {boolean}
 */
     get multiple() {
      return true;
    }

}

module.exports = Mercancia