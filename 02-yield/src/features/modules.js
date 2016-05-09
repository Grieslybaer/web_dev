export function es5() {
  var module = require('../utils')
  return module.uuid()
}

import * as module from '../utils'

export function es6() {
    // doesnt work inside export:
    //import {uuid} from '../utils'
    
    return module.uuid()
}
