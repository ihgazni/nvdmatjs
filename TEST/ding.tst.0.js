const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const IDPOOL = ndfunc.newIdPool()


const TYPES = [
    'root',
    'index',
    'plus'
]


function newRoot() {
    /*
        不显示
        永远展开
    */
    let r = ndfunc.newRoot(IDPOOL)
    r.text = 'root'
    r.expanded = true
    r.display = false
    r.addsublyr = true
    r.type = 'root'
    return(r)
}

function newNode(text) {
    let r = ndfunc.newLeafLonelySib(IDPOOL)
    r.text = text
    r.expanded = true
    r.display = true
    r.type = 'index'
    return(r)
}


function newPlusNode() {
    let r = ndfunc.newLeafLstsib(IDPOOL)
    r.text = '+'
    r.display = true
    r.addsublyr = true
    r.type = 'plus'
    return(r)
}

function initSdfsel() {
    let rnd = newRoot()
    let plusnd = newPlusNode()
    let sdfsel = [rnd]
    sdfsel = ndfunc.addFstch(rnd,sdfsel,plusnd)
    return([sdfsel,plusnd])
}



function getPairPlusnd(nd,sdfsel) {
    return(ndfunc.getRsib(nd,sdfsel))
}

function getPaircontentNd(plusnd,sdfsel) {
    return(ndfunc.getLsib(plusnd,sdfsel))
}



function _parentRsibAddsublyr2false(plusnd,sdfsel) {
    let p = ndfunc.getParent(plusnd,sdfsel)
    if(ndfunc.isRoot(p)) {
        p.addsublyr = false
        return(p)
    } else {
        let pplusnd = getPairPlusnd(p,sdfsel)
        pplusnd.addsublyr = false
        return(pplusnd)
    }
}


function _addRsib(plusnd,sdfsel,text) {
    let cond = ndfunc.isFstch(plusnd)
    let nd = newNode(text)
    sdfsel = ndfunc.addRsib(plusnd,sdfsel,nd)
    pairPlusnd = newPlusNode()
    sdfsel = ndfunc.addRsib(nd,sdfsel,pairPlusnd)
    if(cond) {
        _parentRsibAddsublyr2false(pairPlusnd,sdfsel)
    } else {
        
    }
    childPlusnd = newPlusNode()
    sdfsel = ndfunc.addFstch(nd,sdfsel,childPlusnd)
    return([sdfsel,pairPlusnd,childPlusnd])
}



function dispAll(sdfsel) {
    sdfsel.forEach(
        r => {
            console.log("    ".repeat(r._depth - 1)+r.text) 
        }
    )
}


function disp(sdfsel) {
    sdfsel.forEach(
        r => {
            r.display ? console.log("    ".repeat(r._depth - 1)+r.text) : false
        }
    )
}


var [sdfsel,rootPlusnd] = initSdfsel()
[sdfsel,pairPlusnd1,childPlusnd1]= _addRsib(rootPlusnd,sdfsel,'db1')
[sdfsel,pairPlusnd2,childPlusnd2]= _addRsib(childPlusnd1,sdfsel,'db2')
[sdfsel,pairPlusnd3,childPlusnd3]= _addRsib(pairPlusnd2,sdfsel,'db3')
[sdfsel,pairPlusnd4,childPlusnd4]= _addRsib(childPlusnd3,sdfsel,'db4')
[sdfsel,pairPlusnd5,childPlusnd5]= _addRsib(pairPlusnd4,sdfsel,'db5')
[sdfsel,pairPlusnd6,childPlusnd6]= _addRsib(pairPlusnd1,sdfsel,'db6')
[sdfsel,pairPlusnd7,childPlusnd7]= _addRsib(childPlusnd6,sdfsel,'db7')
[sdfsel,pairPlusnd8,childPlusnd8]= _addRsib(pairPlusnd7,sdfsel,'db8')
[sdfsel,pairPlusnd8,childPlusnd8]= _addRsib(pairPlusnd8,sdfsel,'db9')

disp(sdfsel)


