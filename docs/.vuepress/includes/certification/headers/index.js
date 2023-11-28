const accessories = require('./accessories')
const wisblock = require('./wisblock')
const wisduo = require('./wisduo')
const wisgate = require('./wisgate')
const wislink = require('./wislink')
const wisnode = require('./wisnode')
const wistrio = require('./wistrio')
const fiveg = require('./5g')

export const headers = {
  '5g': fiveg.FIVEG_HEADER,
  wisgate: wisgate.WISGATE_HEADER,
  wisblock: wisblock.WISBLOCK_HEADER,
  wisduo: wisduo.WISDUO_HEADER,
  wistrio: wistrio.WISTRIO_HEADER,
  wisnode: wisnode.WISNODE_HEADER,
  wislink: wislink.WISLINK_HEADER,
  accessories : accessories.ACCESSORIES_HEADER,
}

