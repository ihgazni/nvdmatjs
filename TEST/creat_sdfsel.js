const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const efdir = require("efdir")

var idpool = ndfunc.newIdPool()
var nd0 = ndfunc.newRoot(idpool)
var nd1 = ndfunc.newFstsib(idpool)
var nd2 = ndfunc.newLeafFstsib(idpool)
var nd3 = ndfunc.newLstsib(idpool)
var nd4 = ndfunc.newLeafFstsib(idpool)
var nd5 = ndfunc.newLeafLstsib(idpool)
var nd6 = ndfunc.newLstsib(idpool)
var nd7 = ndfunc.newLeafFstsib(idpool)
var nd8 = ndfunc.newLeafMidsib(idpool)
var nd9 = ndfunc.newLeafLstsib(idpool)

//fstch,parent  添加nd1
nd0._fstchid = nd1._id
nd1._pid = nd0._id

//rsib    添加nd6
nd1._rsibid = nd6._id
nd6._lsibid = nd1._id

//添加nd2
nd1._fstchid = nd2._id
nd2._pid = nd1._id

//rsib    添加nd3
nd2._rsibid = nd3._id
nd3._lsibid = nd2._id


//fstch 添加nd4
nd3._fstchid = nd4._id
nd4._pid = nd3._id


//rsib    添加nd5
nd4._rsibid = nd5._id
nd5._lsibid = nd4._id

//fstch 添加nd7
nd6._fstchid = nd7._id
nd7._pid = nd6._id

//rsib    添加nd8
nd7._rsibid = nd8._id
nd8._lsibid = nd7._id

//rsib    添加nd9
nd8._rsibid = nd9._id
nd9._lsibid = nd8._id

var sdfsel = [nd0,nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9]
efdir.wjson("sdfsel.arr",sdfsel)

