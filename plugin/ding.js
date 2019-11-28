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
    ////
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


function enableEdit(sdfsel) {
    sdfsel.forEach(
        r=>{
            if(r.type==='plus') {
                r.display = true 
            }
        }
    )
    return(sdfsel)
}

function disableEdit(sdfsel) {
    sdfsel.forEach(
        r=>{
            if(r.type==='plus') {
                r.display = false 
            }
        }
    )
    return(sdfsel)
}


function ndUnexpandAll(nd,sdfsel,mode) {
    /*
        收起会收起所有子孙
    */
    nd.expanded = false
    nd.display = true
    let deses = ndfunc.getAllDeses(nd,sdfsel)
    deses = deses.map(
        r=>{
            r.expanded = false
            r.display = false
            return(r)
        }
    )
    return(sdfsel)
}

function txtUnexpandAll(txt,sdfsel,mode) {
    let nd = textGetNd(txt,sdfsel)
    return(ndUnexpandAll(nd,sdfsel,mode))
}

function ndExpandAll(nd,sdfsel,mode) {
    /*
        
    */
    nd.expanded = true
    nd.display = true
    let deses = ndfunc.getAllDeses(nd,sdfsel)
    deses = deses.map(
        r=>{
            if(mode === "edit" && r.type === 'index') {
                r.expanded = true
                r.display = true 
            } else if(mode === "edit" && r.type === 'plus') {
                r.display = true
            } else if(mode === "disp" && r.type === 'index') {
                r.expanded = true
                r.display = true
            } else {
                r.display = false
            }
            return(r)
        }
    )
    return(sdfsel)
}

function txtExpandAll(txt,sdfsel,mode) {
    let nd = textGetNd(txt,sdfsel)
    return(ndExpandAll(nd,sdfsel,mode))
}

function ndExpand(nd,sdfsel,mode) {
    /*
        展开只会展开children
    */
    nd.expanded = true
    nd.display = true
    let children = ndfunc.getChildren(nd,sdfsel)
    children.forEach(
        r=>{
            if(mode === "edit" && r.type === 'index') {
                r.expanded = true
                r.display = true 
            } else if(mode === "edit" && r.type === 'plus') {
                r.display = true
            } else if(mode === "disp" && r.type === 'index') {
                r.expanded = true
                r.display = true
            } else {
                r.display = false
            }
        }
    )
    return(sdfsel)
}

function txtExpand(txt,sdfsel,mode) {
    let nd = textGetNd(txt,sdfsel)
    return(ndExpand(nd,sdfsel,mode))
}

function rootUnexpandAll(sdfsel,mode) {
    let children = ndfunc.getChildren(sdfsel[0],sdfsel)
    children.forEach(
        r=> {
            ndUnexpandAll(r,sdfsel,mode)
        }
    )
    if(mode === "disp"){
        disableEdit(children)
    } else {
        enableEdit(children)
    }
    return(sdfsel)
}

function rootExpandAll(sdfsel,mode) {
    let children = ndfunc.getChildren(sdfsel[0],sdfsel)
    children.forEach(
        r=> {
            ndExpandAll(r,sdfsel,mode)
        }
    )
    if(mode === "disp"){
        disableEdit(children)
    } else {
        enableEdit(children)
    }
    return(sdfsel)
}


function disp(sdfsel) {
    sdfsel.forEach(
        r => {
            r.display ? console.log("    ".repeat(r._depth - 1)+r.text) : false
        }
    )
}



module.exports = {
    IDPOOL,
    newRoot,
    newNode,
    newPlusNode,
    initSdfsel,
    getPairPlusnd,
    getPairIndexNd,
    plusndAddRsib,
    indexndAddRsib,
    indexndAddFstch,
    ndAddRsib,
    ndAddFstch,
    getAllPlusnd,
    getAllIndexNd,
    textGetNd,
    textGetSdfsi,
    textAddRsib,
    textAddFstch,
    ndRmSelf,
    txtRmself,
    enableEdit,
    disableEdit,
    ndUnexpandAll,
    txtUnexpandAll,
    ndExpandAll,
    txtExpandAll,
    ndExpand,
    txtExpand,
    rootUnexpandAll,
    rootExpandAll,
    disp,
}

