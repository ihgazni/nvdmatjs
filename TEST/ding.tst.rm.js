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



function indexndAddRsib(nd,sdfsel,text) {
    let rslt = [sdfsel,null,null]
    if(ndfunc.isRoot(nd)) {
        console.log("can NOT add more-than-one root!")
    } else {
        let plusnd = getPairPlusnd(nd,sdfsel)
        rslt = plusndAddRsib(plusnd,sdfsel,text)
    }
    return(rslt)
}

function indexndAddFstch(nd,sdfsel,text) {
    let plusnd = ndfunc.getFstch(nd,sdfsel)
    rslt = plusndAddRsib(plusnd,sdfsel,text)
    return(rslt)
}

function ndAddRsib(nd,sdfsel,text) {
    if(nd.type === 'plus') {
        return(plusndAddRsib(nd,sdfsel,text))
    } else {
        return(indexndAddRsib(nd,sdfsel,text))
    }
}

function ndAddFstch(nd,sdfsel,text) {
    if(nd.type === 'plus') {
        console.log("can NOT add child to plusnd!")
        return([sdfsel,null,null])
    } else {
        return(indexndAddFstch(nd,sdfsel,text))
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

function textAddRsib(txt,sdfsel,text) {
    let nd = textGetNd(txt,sdfsel)
    return(ndAddRsib(nd,sdfsel,text))
}

function textAddFstch(txt,sdfsel,text) {
    let nd = textGetNd(txt,sdfsel)
    return(ndAddFstch(nd,sdfsel,text))
}


function ndRmSelf(nd,sdfsel) {
    let pairPlusnd = getPairPlusnd(nd,sdfsel)
    let rslt = ndfunc.rmSelf(nd,sdfsel);
    sdfsel = rslt[0]
    rslt = ndfunc.rmSelf(pairPlusnd,sdfsel);
    sdfsel = rslt[0]
    return(sdfsel)
}


function txtRmself(txt,sdfsel) {
    let nd = textGetNd(txt,sdfsel)
    return(ndRmSelf(nd,sdfsel))
}








function disp(sdfsel) {
    sdfsel.forEach(
        r => {
            r.display ? console.log("    ".repeat(r._depth - 1)+r.text) : false
        }
    )
}




var efdir = require("efdir")
var sdfsel = efdir.rjson("ding.arr")
disp(sdfsel)
sdfsel =  txtRmself('db1',sdfsel)
disp(sdfsel)

function tstrm(txt) {
    var sdfsel = efdir.rjson("ding.arr")
    //disp(sdfsel)
    sdfsel =  txtRmself(txt,sdfsel)
    disp(sdfsel)
}

tstrm('db2')
tstrm('db3')
tstrm('db4')
tstrm('db5')
tstrm('db6')
tstrm('db7')
tstrm('db8')
tstrm('db9')





