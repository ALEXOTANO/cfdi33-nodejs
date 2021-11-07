'use strict'

const Node = require('../Node')

class AutotransporteFederal extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName() {
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

module.exports = AutotransporteFederal