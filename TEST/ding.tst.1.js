const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const IDPOOL = ndfunc.newIdPool()


const TYPES = [
    'root',
    'index',
    'plus',
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

function getPairIndexNd(plusnd,sdfsel) {
    return(ndfunc.getLsib(plusnd,sdfsel))
}


function plusndAddRsib(plusnd,sdfsel,text) {
    let cond = ndfunc.isFstch(plusnd)
    let nd = newNode(text)
    sdfsel = ndfunc.addRsib(plusnd,sdfsel,nd)
    pairPlusnd = newPlusNode()
    sdfsel = ndfunc.addRsib(nd,sdfsel,pairPlusnd)
    childPlusnd = newPlusNode()
    sdfsel = ndfunc.addFstch(nd,sdfsel,childPlusnd)
    return([sdfsel,pairPlusnd,childPlusnd])
}



function ndAddRsib(nd,sdfsel,text) {
    let rslt = [sdfsel,null,null]
    if(ndfunc.isRoot(nd)) {
        console.log("can NOT add more-than-one root!")
    } else {
        let plusnd = getPairPlusnd(nd,sdfsel)
        rslt = plusndAddRsib(plusnd,sdfsel,text)
    }
    return(rslt)
}

function ndAddFstch(nd,sdfsel,text) {
    let plusnd = ndfunc.getFstch(nd,sdfsel)
    rslt = plusndAddRsib(plusnd,sdfsel,text)
    return(rslt)
}

function addRsib(nd,sdfsel,text) {
    if(nd.type === 'plus') {
        return(plusndAddRsib(nd,sdfsel,text))
    } else {
        return(ndAddRsib(nd,sdfsel,text))
    }
}

function addFstch(nd,sdfsel,text) {
    if(nd.type === 'plus') {
        console.log("can NOT add child to plusnd!")
        return([sdfsel,null,null])
    } else {
        return(ndAddFstch(nd,sdfsel,text))
    }
}


function getAllPlusnd(sdfsel) {
    return(sdfsel.filter(r=>(r.type==="plus")))
}

function getAllIndexNd(sdfsel) {
    return(sdfsel.filter(r=>(r.type==="index")))
}

function textGetNd(text,sdfsel) {
    return(cmmn.afindv('text',text,sdfsel))
}

function textGetSdfsi(text,sdfsel) {
    return(cmmn.afindi('text',text,sdfsel))
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
disp(sdfsel)

[sdfsel,pairPlusnd,childPlusnd] = addFstch(sdfsel[0],sdfsel,'db1')
textGetSdfsi('db1',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addFstch(sdfsel[2],sdfsel,'db2')
textGetSdfsi('db2',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addRsib(sdfsel[4],sdfsel,'db3')
textGetSdfsi('db3',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addFstch(sdfsel[7],sdfsel,'db4')
textGetSdfsi('db4',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addRsib(sdfsel[9],sdfsel,'db5')
textGetSdfsi('db1',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addRsib(sdfsel[2],sdfsel,'db6')
textGetSdfsi('db6',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addFstch(sdfsel[17],sdfsel,'db7')
textGetSdfsi('db7',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addRsib(sdfsel[19],sdfsel,'db8')
textGetSdfsi('db8',sdfsel)
[sdfsel,pairPlusnd,childPlusnd] = addRsib(sdfsel[22],sdfsel,'db9')
textGetSdfsi('db9',sdfsel)
disp(sdfsel)


