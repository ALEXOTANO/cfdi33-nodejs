'use strict'

const Node = require('../Node')

class IdentificacionVehicular extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:IdentificacionVehicular'
  }
  /**
    *
    * @returns {string}
    */
    get parentNodeName() {
      return 'cartaporte:AutotransporteFederal'
    }

  /**
  *
  * @returns {boolean}
  */
  get multiple() {
    return true;
  }

}

module.exports = IdentificacionVehicular