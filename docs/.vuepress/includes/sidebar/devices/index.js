var wisduino = require('./wisduino')
var wisduo = require('./wisduo')
var wisgate = require('./wisgate')
var wishat = require('./wishat')
var wislink = require('./wislink')
var wisnode = require('./wisnode')
var wisduino = require('./wisduino')
var wistrio = require('./wistrio')
var wisblock = require('./wisblock')
var accessories = require('./accessories')
var softwareapislibraries = require('./software-apis-libraries')
var softwaretools = require('./software-tools')

module.exports = {
  ...wisduino,
  ...wisduo, 
  ...wisgate,
  ...wishat,
  ...wislink,
  ...wisnode,
  ...wisduino,
  ...wistrio,
  ...wisblock,
  ...accessories,
  ...softwareapislibraries,
  ...softwaretools
}