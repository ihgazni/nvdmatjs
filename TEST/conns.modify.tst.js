
const conns = require("../nvdmatjs").conns
const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
//load sdfsel from cache
//idpool = newIdPool(sdfsel)

function _calcConnMapFunc(r) {
    let rslt;
    if(r==='t') {
        rslt = 'v'
    } else if(r === 'v') {
        rslt = 'v'
    } else {
        rslt = 'ws'
    }
    return(rslt)
}

function calcAndSetConnsWhenRmSelf(nd,sdfsel) {
    //nd
    if(ndfunc.isLstsibButNotFstsib(nd)){
        let lsib = ndfunc.getLsib(nd,sdfsel)
        lsib._conns = cmmn.setlst('l',lsib._conns)
        lsib.conns = lsib._conns.slice(1)
        _updateAllDesAfterModify(lsib,sdfsel)
    } else {

    }
    //if nd is tree using update
    return(nd)
}

function _updateAllDesAfterModify(nd,sdfsel) {
    let deses = ndfunc.getAllDeses(nd,sdfsel)
    if(deses.length === 0 || nd._conns.length === 0) {

    } else {
        let pLstConn = cmmn.getlstv(nd._conns)
        let sndlstConn = _calcConnMapFunc(pLstConn)
        for(let i=0;i<deses.length;i++){
            let lngth = deses[i]._conns.length
            if(lngth >=2) {
                deses[i]._conns[lngth-1-nd.depth] = sndlstConn
            }
            if(sdfsel[0].display === false){
                deses[i].conns = deses[i]._conns.slice(1)
            } else {
                deses[i].conns = deses[i]._conns
            }
        }
    }
}


//









var [sdfsel,idpool] = conns.initSdfsel()
var rnd = sdfsel[0]
sdfsel = conns.ndAndTagAddLstch(rnd,sdfsel,'html',idpool)
conns.disp(sdfsel)
sdfsel = conns.ndAndTagAddLstch(sdfsel[1],sdfsel,'head',idpool)
conns.disp(sdfsel)


sdfsel = conns.ndAndTagAddLstch(sdfsel[2],sdfsel,'link',idpool)
conns.disp(sdfsel)

sdfsel = conns.ndAndTagAddLstch(sdfsel[2],sdfsel,'link',idpool)
conns.disp(sdfsel)


sdfsel = conns.ndAndTagAddRsib(sdfsel[2],sdfsel,'body',idpool)
conns.disp(sdfsel)


sdfsel = conns.ndAndTagAddRsib(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndRmSelf(sdfsel[6],sdfsel)

sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)

sdfsel = conns.ndAndTagAddLsib(sdfsel[6],sdfsel,'a',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[7],sdfsel,'ul',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[8],sdfsel,'li',idpool)

conns.ndRmSelf(sdfsel[11],sdfsel)
conns.disp(sdfsel)

conns.ndRmSelf(sdfsel[10],sdfsel)
conns.disp(sdfsel)

const conns = require("../nvdmatjs").conns
const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
//load sdfsel from cache
//idpool = newIdPool(sdfsel)

function _calcConnMapFunc(r) {
    let rslt;
    if(r==='t') {
        rslt = 'v'
    } else if(r === 'v') {
        rslt = 'v'
    } else {
        rslt = 'ws'
    }
    return(rslt)
}

function calcAndSetConnsWhenRmSelf(nd,sdfsel) {
    //nd
    if(ndfunc.isLstsibButNotFstsib(nd)){
        let lsib = ndfunc.getLsib(nd,sdfsel)
        lsib._conns = cmmn.setlst('l',lsib._conns)
        lsib.conns = lsib._conns.slice(1)
        _updateAllDesAfterModify(lsib,sdfsel)
    } else {

    }
    //if nd is tree using update
    return(nd)
}

function _updateAllDesAfterModify(nd,sdfsel) {
    let deses = ndfunc.getAllDeses(nd,sdfsel)
    if(deses.length === 0 || nd._conns.length === 0) {

    } else {
        let pLstConn = cmmn.getlstv(nd._conns)
        let sndlstConn = _calcConnMapFunc(pLstConn)
        for(let i=0;i<deses.length;i++){
            let lngth = deses[i]._conns.length
            if(lngth >=2) {
                deses[i]._conns[lngth-1-nd.depth] = sndlstConn
            }
            if(sdfsel[0].display === false){
                deses[i].conns = deses[i]._conns.slice(1)
            } else {
                deses[i].conns = deses[i]._conns
            }
        }
    }
}


//









var [sdfsel,idpool] = conns.initSdfsel()
var rnd = sdfsel[0]
sdfsel = conns.ndAndTagAddLstch(rnd,sdfsel,'html',idpool)
conns.disp(sdfsel)
sdfsel = conns.ndAndTagAddLstch(sdfsel[1],sdfsel,'head',idpool)
conns.disp(sdfsel)


sdfsel = conns.ndAndTagAddLstch(sdfsel[2],sdfsel,'link',idpool)
conns.disp(sdfsel)

sdfsel = conns.ndAndTagAddLstch(sdfsel[2],sdfsel,'link',idpool)
conns.disp(sdfsel)


sdfsel = conns.ndAndTagAddRsib(sdfsel[2],sdfsel,'body',idpool)
conns.disp(sdfsel)


sdfsel = conns.ndAndTagAddRsib(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndRmSelf(sdfsel[6],sdfsel)

sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)

sdfsel = conns.ndAndTagAddLsib(sdfsel[6],sdfsel,'a',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[7],sdfsel,'ul',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[8],sdfsel,'li',idpool)

conns.ndRmSelf(sdfsel[11],sdfsel)
conns.disp(sdfsel)

conns.ndRmSelf(sdfsel[10],sdfsel)
conns.disp(sdfsel)

