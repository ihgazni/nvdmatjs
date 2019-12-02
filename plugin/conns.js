const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const connd = {
    't':'├── ',
    'v':'│   ',
    'l':'└── ',
    'ws':'    '
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
    r._conns = []
    r.conns = []
    return(r)
}

function newNode(tag,idpool) {
    let r = ndfunc.newLeafLonelySib(idpool)
    r.tag = tag
    r.expanded = true
    r.display = true
    r.checked = false
    r._conns = []
    r.conns = []
    return(r)
}

function initSdfsel(idpool) {
    idpool = (idpool === undefined) ? ndfunc.newIdPool():idpool
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


function calcAndSetConnsWhenAddFstch(nd,sdfsel) {
    //nd is fstch
    let _conns;
    let cond;
    if(ndfunc.isRoot(nd)) {
        _conns = []
    } else {
        let pnd = ndfunc.getParent(nd,sdfsel)
        let _pconns = pnd._conns.slice(0,pnd._conns.length)
        _conns = _pconns.map(_calcConnMapFunc)
        cond = ndfunc.isLstch(nd)
        if(cond) {
            _conns.push('l')
        } else {
            _conns.push('t')
        }
    }
    ////
    nd._conns = _conns
    if(sdfsel[0].display === false){
        nd.conns = _conns.slice(1)
    } else {
        nd.conns = _conns
    }
    return(nd)
}


function calcAndSetConnsWhenAddLstch(nd,sdfsel) {
    //nd is lstch
    let lsib = ndfunc.getLsib(nd,sdfsel)
    lsib._conns = cmmn.setlst('t',lsib._conns)
    lsib.conns = lsib._conns.slice(1)
    nd = calcAndSetConnsWhenAddFstch(nd,sdfsel)
    return(nd)
}

function calcAndSetConnsWhenAddLsib(nd,sdfsel) {
    //nd is lsib
    nd = calcAndSetConnsWhenAddFstch(nd,sdfsel)
    return(nd)
}

function calcAndSetConnsWhenAddRsib(nd,sdfsel) {
    //nd is rsib
    if(ndfunc.isFstsib(nd)){
        nd = calcAndSetConnsWhenAddFstch(nd,sdfsel)
    } else {
        nd = calcAndSetConnsWhenAddLstch(nd,sdfsel)
    }
    return(nd)
}




function ndAndTagAddLsib(nd,sdfsel,tag,idpool) {
    let nnd = newNode(tag,idpool)
    sdfsel = ndfunc.addLsib(nd,sdfsel,nnd)
    calcAndSetConnsWhenAddLsib(nnd,sdfsel)
    return(sdfsel)
}


function ndAndTagAddRsib(nd,sdfsel,tag,idpool) {
    let nnd = newNode(tag,idpool)
    sdfsel = ndfunc.addRsib(nd,sdfsel,nnd)
    calcAndSetConnsWhenAddRsib(nnd,sdfsel)
    return(sdfsel)
}

function ndAndTagAddLstch(nd,sdfsel,tag,idpool) {
    let nnd = newNode(tag,idpool)
    if(ndfunc.isLeaf(nd)|| ndfunc.isRoot(nd)) {
        sdfsel = ndfunc.addFstch(nd,sdfsel,nnd)
        calcAndSetConnsWhenAddFstch(nnd,sdfsel)
    } else {
        sdfsel = ndfunc.addLstch(nd,sdfsel,nnd)
        calcAndSetConnsWhenAddLstch(nnd,sdfsel)
    }
    return(sdfsel)
}

function calcAndSetConnsWhenAddRmSelf(nd,sdfsel) {
    //nd 
    if(ndfunc.isLstsibButNotFstsib(nd)){
        let lsib = ndfunc.getLsib(nd,sdfsel)
        lsib._conns = cmmn.setlst('l',lsib._conns)
        lsib.conns = lsib._conns.slice(1)
    } else {
        
    }
    //if nd is tree using update
    return(nd)
}


function ndRmSelf(nd,sdfsel) {
    calcAndSetConnsWhenAddRmSelf(nd,sdfsel)
    let tmp = ndfunc.rmSelf(nd,sdfsel)
    return(tmp[0])
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
//

function _updateConnsAfterAdd(sdfsel) {
    let _gpconns = sdfsel[0]._conns.slice(0,sdfsel[0]._conns.length-1)
    let tail = sdfsel.slice(1).map(
        (r,i,arr)=> {
            r._conns = _gpconns.concat(r._conns)
            if(arr[0].display === false){
                r.conns = r._conns.slice(1)
            } else {
                r.conns = r._conns
            }
            return(r)
        }
    )
    sdfsel = tail.unshift(sdfsel[0])
    return(sdfsel)
}


function _updateConnsAfterRmSelf(depth,sdfsel) {
    sdfsel = sdfsel.map(
        (r,i,arr)=> {
            r._conns = cmmn.getLstSlice(depth,r._conns)
            if(arr[0].display === false){
                r.conns = r._conns.slice(1)
            } else {
                r.conns = r._conns
            }
            return(r)
        }
    )
    return(sdfsel)
}




module.exports = {
    disp,
    newRoot,
    initSdfsel,
    ndAndTagAddLsib,
    ndAndTagAddRsib,
    ndAndTagAddLstch,
    ndRmSelf,
    ndUnexpandAll,
    ndExpand,
    newIdPool:ndfunc.newIdPool,
    sdfselGetMaxId:ndfunc.sdfselGetMaxId,
}


