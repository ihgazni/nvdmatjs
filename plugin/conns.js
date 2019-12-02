const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const connd = {
    't':'',
    'v':'',
    'l':'',
    'ws':' '
}

function _dispOne(nd) {
    let arr = nd.conns.map((r)=>connd[r])
    let s = arr.join('')
    s = s + nd.tag
    return(s)
}

function disp(sdfsel) {
    sdfsel.forEach(
        r => {
            r.display ? console.log(_dispOne(r)) : false
        }
    )
}



function newRoot(idpool) {
    /*
        不显示
        永远展开
    */
    let r = ndfunc.newRoot(idpool)
    r.tag = 'root'
    r.expanded = true
    r.display = false
    r.checked = false
    r.conns = []
    return(r)
}

function newNode(tag,idpool) {
    let r = ndfunc.newLeafLonelySib(idpool)
    r.tag = tag
    r.expanded = true
    r.display = true
    r.checked = false
    r.conns = []
    return(r)
}

function initSdfsel(idpool) {
    idpool = newIdPool(sdfsel)
    let rnd = newRoot(idpool)
    let sdfsel = [rnd]
    return([sdfsel,idpool])
}


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


function calcAndSetConns(nd,sdfsel) {
    if(ndfunc.isRoot(nd)) {

    } else {
        let pnd = ndfunc.getParent(nd,sdfsel)
        let pconns = pnd.conns.slice(0,pnd.conns.length)
        let conns = pconns.map(_calcConnMapFunc)
        let cond = ndfunc.isLstch(nd)
        if(cond) {
            conns.push('l')
        } else {
            conns.push('t')
        }
        if(sdfsel[0].display === false){
            nd.conns = conns.slice(1)
        } else {
            nd.conns = conns
        }
    }
    return(nd)
}

function ndAddLsib(nd,sdfsel,tag,idpool) {
    let nnd = newNode(tag,idpool)
    sdfsel = ndfunc.addLsib(nd,sdfsel,nnd)
    calcAndSetConns(nd,sdfsel)
    return(sdfsel)
}


function ndAddRsib(nd,sdfsel,tag,idpool) {
    let nnd = newNode(tag,idpool)
    sdfsel = ndfunc.addRsib(nd,sdfsel,nnd)
    calcAndSetConns(nd,sdfsel)
    return(sdfsel)
}

function ndAddLstch(nd,sdfsel,tag,idpool) {
    let nnd = newNode(tag,idpool)
    sdfsel = ndfunc.addLstch(nd,sdfsel,nnd)
    calcAndSetConns(nd,sdfsel)
    return(sdfsel)
}

function ndUnexpandAll(nd,sdfsel) {
    /*
        收起会收起所有子孙
    */
    nd.expanded = false
    let deses = ndfunc.getAllDeses(nd,sdfsel)
    deses = deses.map(
        r=>{
            r.display = false
            return(r)
        }
    )
    return(sdfsel)
}

function ndExpand(nd,sdfsel) {
    /*
        展开只会展开children
    */
    nd.expanded = true
    let children = ndfunc.getChildren(nd,sdfsel)
    children.forEach(
        r=>{
            r.display = true
            if(r.expanded) {
                //根据expanded 决定是否显示子层,递归
                sdfsel = ndExpand(r,sdfsel)
            } else {

            }
        }
    )
    return(sdfsel)
}


//addRsibTree
//addLsibTree
//addLstchTree
//desModifyConns
//


module.exports = {
    disp,
    newRoot,
    newNode,
    initSdfsel,
    calcAndSetConns,
    ndAddLsib,
    ndAddRsib,
    ndAddLstch,
    ndUnexpandAll,
    ndExpand,
}


