// var quickStartGuide = require('./sidebar/quickstart-guide')
var faqs = require('./sidebar/faqs')
// var rui = require('./sidebar/rui')
//var usermanual = require('./sidebar/user-manual')
//var deploymentGuide = require('./sidebar/deployment-guide')
var rui = require('./sidebar/rui')
var rui3 = require('./sidebar/rui3')
var devices = require('./sidebar/devices')
var root = require('./sidebar/root')
var releasenotes = require ('./sidebar/release-notes')
var certification = require ('./sidebar/certification')

module.exports = {
  // ...quickStartGuide,
  ...faqs,
  //...usermanual,
  //...deploymentGuide,
  ...rui,
  ...rui3,
  ...devices,
  ...releasenotes,
  ...certification,
  ...root,
}