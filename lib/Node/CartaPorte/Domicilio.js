'use strict'

const Node = require('../Node')

class Domicilio extends Node {
 /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte:Domicilio'
  }

}

module.exports = Domicilio