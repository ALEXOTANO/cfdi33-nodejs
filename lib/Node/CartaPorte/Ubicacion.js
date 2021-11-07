'use strict'

const Node = require('../Node')

class Ubicacion extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:Ubicacion'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'cartaporte:Ubicaciones'
  }

  /**
 *
 * @returns {boolean}
 */
  get multiple() {
    return true;
  }


}

module.exports = Ubicacion