'use strict'

const Node = require('../Node')

class CantidadTransporta extends Node {
  /**
    *
    * @returns {string}
    */
  get nodeName() {
    return 'cartaporte20:CantidadTransporta'
  }

  /**
 *
 * @returns {string}
 */
  get parentNodeName() {
    return 'cartaporte20:Mercancia'
  }


  /**
  *
  * @returns {boolean}
  */
  get multiple() {
    return true;
  }

}

module.exports = CantidadTransporta