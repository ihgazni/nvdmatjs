const cmmn = require("./cmmn-utils.js")


/*
    _fstchid                              fst-child-id
    _lsibid                               lsib-id
    _rsibid                               rsib-id
    _id                                   unique-number-id-based-on-add
    _pid                                  parent-id
    rid                                   root-id
    getLsib                               get-left-sibling
    getRsib                               get-right-sibling
    getPrecedingSibs                      get-preceding-siblings
    getFollowingSibs                      get-following-siblings
    fstsib                                fst-sibling
    midsib                                middle-sibling
    lstsib                                lst-sibling
    sib                                   sibling
    sibs                                  siblings
    getFstsib                             get-first-sibling-including-self
    getLstsib                             get-last-sibling-including-self
    getSib                                get-sibling-including-self
    getAllSibs                            get-all-siblings-including-self
    fstch                                 first-child
    lstch                                 last-child
    child                                 child
    getFstch                              get-first-child
    getLstch                              get-last-child
    getChild                              get-child
    getChildren                           get-children
    p                                     parent
    ances                                 ancestor
    ancestors                             ancestors
    getParent                             get-parent
    getAllAnces                           get-all-ancestors
    getAllAncesIncludingSelf              get-all-ancestors-including-self
    getAnces                              get-ancestor
    getAncesIncludingSelf                 get-ancestor-including-self
    getFstAncesHavingRsibIncludingSelf    get-first-ancestor-having-rsib-including-self
    getRdmost                             get-rdmost
    getAllDeses                           get-all-descendants
    getAllDesesIncludingSelf              get-all-descendants-including-self
*/

////
function isRoot(nd) {
    return(nd._pid === null)
}

function isFstch(nd) {
    return(
        nd._lsibid === null &&
        nd._pid !== null
    )
}

function isFstsib(nd) {
    return(
        nd._lsibid === null
    )
}


function isFstchButNotLstch(nd) {
    return(
        nd._rsibid !== null && 
        nd._rsibid !== undefined && 
        nd._lsibid === null &&
        nd._pid !== null
    )
}



function isFstsibButNotLstsib(nd) {
    return(
        nd._rsibid !== null &&
        nd._rsibid !== undefined &&
        nd._lsibid === null
    )
}


function isLstch(nd) {
    return(
        nd._rsibid === null &&
        nd._pid !== null 
    )
}

function isLstsib(nd) {
    return(
        nd._rsibid === null 
    )
}


function isLstchButNotFstch(nd) {
    return(
        nd._rsibid === null && 
        nd._lsibid !== null &&
        nd._lsibid !== undefined &&
        nd._pid !== null
    )
}


function isLstsibButNotFstsib(nd) {
    return(
        nd._rsibid === null &&
        nd._lsibid !== null &&
        nd._lsibid !== undefined
    )
}


function isFstchAndLstch(nd) {
    return( 
        nd._lsibid === null && 
        nd._rsibid === null &&
        nd._pid !== null
    )
}

function isFstsibAndLstsib(nd) {
    return( 
        nd._lsibid === null && 
        nd._rsibid === null
    )
}


function isMidch(nd) {
    return( 
        nd._lsibid !== null && 
        nd._lsibid !== undefined &&
        nd._rsibid !== null &&
        nd._rsibid !== undefined &&
        nd._pid !== null
    )
}


function isMidsib(nd) {
    return(
        nd._lsibid !== null &&
        nd._lsibid !== undefined &&
        nd._rsibid !== null &&
        nd._rsibid !== undefined 
    )
}


function isLeaf(nd) {
    return(nd._fstchid === null)
}

function isNonLeaf(nd) {
    return(
        nd._fstchid !== null &&
        nd._fstchid !== undefined
    )
}

function isUndefined(nd) {
    return(nd._fstchid === undefined)
}

////
function havingLsib(nd) {
    return(
        nd._lsibid !== null && 
        nd._lsibid !== undefined
    )
}

function havingRsib(nd) {
    return(
        nd._rsibid !== null && 
        nd._rsibid !== undefined
    )
}

////

function idgetnd(id,sdfsel) {
    /*
        id could be a number or null
    */
    let nd = (id === null) ? null : cmmn.afindv('_id',id,sdfsel)
    return(nd)
}

function eq(nd0,nd1) {
    let rslt = true
    for(let k in nd0) {
        let cond = (nd0[k] === nd1[k])
        if(cond === false) {
            return(false)
        }
    }
    return(rslt)
}

////new

function sdfselGetMaxId(sdfsel) {
    return(cmmn.amax('_id',sdfsel))
}


function newIdPool(sdfsel) {
    let d = {
        currid:0
    }
    if( sdfsel === undefined){

    } else {
        d.currid = sdfselGetMaxId(sdfsel) + 1
    }
    return(d)
}

function newNode(idpool) {
    /*
        var idpool = newIdPool()
        var nd = newNode(idpool)
    */
    let d = {
        "_fstchid":undefined,
        "_lsibid":undefined,
        "_rsibid":undefined,
        "_id":idpool.currid,
        "_pid":undefined,
        "_depth":0,
    }
    idpool.currid = idpool.currid + 1
    return(d)
}

function newRoot(idpool) {
    let d = newNode(idpool)
    d._lsibid = null
    d._rsibid = null
    d._pid = null
    d._depth = 0
    return(d)
}


function newFstsib(idpool) {
    let d = newNode(idpool)
    d._lsibid = null
    return(d)
}

function newMidsib(idpool) {
    let d = newNode(idpool)
    return(d)
}

function newLstsib(idpool) {
    let d = newNode(idpool)
    d._rsibid = null
    return(d)
}

function leafize(nd) {
    nd._fstchid = null
    return(nd)
}

function newLeafFstsib(idpool) {
    let d = newNode(idpool)
    d._lsibid = null
    d._fstchid = null
    return(d)
}

function newLeafMidsib(idpool) {
    let d = newNode(idpool)
    d._fstchid = null
    return(d)
}

function newLeafLstsib(idpool) {
    let d = newNode(idpool)
    d._rsibid = null
    d._fstchid = null
    return(d)
}

function newLeafLonelySib(idpool) {
    let d = newNode(idpool)
    d._lsibid = null
    d._rsibid = null
    d._fstchid = null
    return(d)
}

////function getRoot(l) {} 乱序寻找


////function sdfslize(l){} 乱序重拍

////sib

function getLsib(nd,sdfsel) {
    let lsib = idgetnd(nd._lsibid,sdfsel)
    return(lsib)
}

function getRsib(nd,sdfsel) {
    let rsib = idgetnd(nd._rsibid,sdfsel)
    return(rsib)
}

function getPrecedingSibs(nd,sdfsel) {
    let preceding = []
    while(nd !== null) {
        nd = getLsib(nd,sdfsel)
        if(nd === null) {
            break
        } else {
            preceding.push(nd)
        }
    }
    preceding.reverse()
    return(preceding)
}

function getFollowingSibs(nd,sdfsel) {
    let following = []
    while(nd !== null) {
        nd = getRsib(nd,sdfsel)
        if(nd === null) {
            break
        } else {
            following.push(nd)
        }
    }
    return(following)
}

function getFstsib(nd,sdfsel) {
    /*
        including-self
    */
    let preceding = getPrecedingSibs(nd,sdfsel)
    let fstsib = (preceding.length === 0) ? nd : preceding[0]
    return(fstsib)
}

function getLstsib(nd,sdfsel) {
    let following = getFollowingSibs(nd,sdfsel)
    let lstsib = (following.length === 0) ? nd : cmmn.getlstv(following)
    lstsib = (lstsib === undefined)? null:lstsib
    return(lstsib)
}

function getAllSibs(nd,sdfsel) {
    /*
        including-self
    */
    let preceding = getPrecedingSibs(nd,sdfsel)
    let following = getFollowingSibs(nd,sdfsel)
    let sibs = Array.prototype.concat(preceding,[nd],following)
    return(sibs)
}

function getSib(which,nd,sdfsel) {
    /*
        including-self
    */
    let sibs = getAllSibs(nd,sdfsel)
    return(sibs[which])
}


////child,children

function getFstch(nd,sdfsel) {
    /*
        get-first-child
    */
    let fstch = idgetnd(nd._fstchid,sdfsel)
    return(fstch)
}

function getChild(which,nd,sdfsel) {
    /*
        get-child-by-index
    */
    if(isLeaf(nd)){
        return(null)
    } else {
        let c = 0
        let child = getFstch(nd,sdfsel)
        let rsib = getRsib(child,sdfsel)
        while(c<which) {
            if(rsib !== null) {
                child = rsib
                rsib = getRsib(child,sdfsel)
            } else {
                break
            }
            c = c + 1
        }
        child = (c < which) ? null : child
        return(child)
    }
}

function getChildren(nd,sdfsel) {
    /*
        get-children
    */
    let children = []
    if(isLeaf(nd)){
        
    } else {
        let fstch = getFstch(nd,sdfsel)
        children.push(fstch)
        children = children.concat(getFollowingSibs(fstch,sdfsel))
    }
    return(children)
}

function getLstch(nd,sdfsel) {
    /*
        get-last-child
    */
    let children = getChildren(nd,sdfsel)
    let lstch = cmmn.getlstv(children)
    lstch = (lstch === undefined)? null:lstch
    return(lstch)
}

////parent,ances,ances-including-self

function getParent(nd,sdfsel) {
    let fstsib = getFstsib(nd,sdfsel)
    let p = idgetnd(fstsib._pid,sdfsel)
    return(p)
}

function getAllAnces(nd,sdfsel) {
    let ances = []
    let p = getParent(nd,sdfsel)
    while(p !== null){
        ances.push(p)
        p = getParent(p,sdfsel)
    }
    return(ances)
}


function getAllAncesIncludingSelf(nd,sdfsel) {
    let ances = getAllAnces(nd,sdfsel)
    return(Array.prototype.concat([nd],ances))
}

function getAnces(which,nd,sdfsel){
    let p = getParent(nd,sdfsel)
    let c = 0
    while(p !== null){
        if(c<which) {
            p = getParent(p,sdfsel)
            c = c + 1
        } else {
            break
        }
    }
    return(p)
}

function getAncesIncludingSelf(which,nd,sdfsel){
    if(which === 0) {
        return(nd)
    } else {
        return(getAnces(which-1,nd,sdfsel))
    }
}

function getFstAncesHavingRsibIncludingSelf(nd,sdfsel) {
    let cond = havingRsib(nd)
    while(!cond) {
        nd = getParent(nd,sdfsel)
        if(nd === null) {
            break
        } else {
            cond = havingRsib(nd)
        }
    }
    return(nd)
}


////

function calcDepth(nd,sdfsel) {
    let depth = 0
    let p = getParent(nd,sdfsel)
    while(p !== null){
        p = getParent(p,sdfsel)
        depth = depth + 1
    }
    return(depth)
}

function getDepth(nd,sdfsel) {
    let depth = (nd._depth === undefined) ? calcDepth(nd,sdfsel) : nd._depth
    return(depth)
}

function getSibseq(nd,sdfsel) {
    let preceding = getPrecedingSibs(nd,sdfsel)
    return(preceding.length)
}

function getBreadth(nd,sdfsel) {
    let p = getParent(nd,sdfsel)
    let ppreceding = getPrecedingSibs(p,sdfsel)
    let childrens = ppreceding.map((nd)=>(getChildren(nd,sdfsel)))
    let nds = Array.prototype.concat(...childrens)
    let preceding = getPrecedingSibs(nd,sdfsel)
    return(nds.length+preceding.length)
}


////

function getRsibOfFstAncesHavingRsibIncludingSelf(nd,sdfsel) {
    let ances = getFstAncesHavingRsibIncludingSelf(nd,sdfsel)
    if(ances === null) {
        return(null)
    } else {
        let rsib = getRsib(ances,sdfsel)
        return(rsib)
    }
}


function getRdmost(nd,sdfsel) {
    let prev = nd
    let rdmost = getLstch(prev,sdfsel)
    while(rdmost !== null) {
        prev = rdmost
        rdmost = getLstch(prev,sdfsel)
    }
    return(prev)
}

function sdfsNext(nd,sdfsel) {
    let next;
    let fstch = getFstch(nd,sdfsel)
    if(fstch === null) {
        next = getRsibOfFstAncesHavingRsibIncludingSelf(nd,sdfsel)
    } else {
        next = fstch
    }
    return(next)
}

function sdfsPrev(nd,sdfsel) {
    let prev;
    let lsib = getLsib(nd,sdfsel)
    if(lsib === null) {
        prev = getParent(nd,sdfsel)
    } else {
        prev = getRdmost(lsib,sdfsel)
    }
    return(prev)
}

////
function isAncesOf(nd0,nd1,sdfsel) {
    let ances = getAllAnces(nd1,sdfsel)
    let index = cmmn.afindi('_id',nd0._id,ances)
    return(index>=0)
}

function isDesOf(nd0,nd1,sdfsel) {
    return(isAncesOf(nd1,nd0,sdfsel))
}

function isAncesOfIncludingSelf(nd0,nd1,sdfsel) {
    let ances = getAllAncesIncludingSelf(nd1,sdfsel)
    let index = cmmn.afindi('_id',nd0._id,ances)
    return(index>=0)
}

function isDesOfIncludingSelf(nd0,nd1,sdfsel) {
    return(isAncesOfIncludingSelf(nd1,nd0,sdfsel))
}

////descendants

function getAllDesesIncludingSelf(nd,sdfsel) {
    let deses = []
    let root = nd
    while(nd!==null && isAncesOfIncludingSelf(root,nd,sdfsel)) {
        deses.push(nd)
        nd  = sdfsNext(nd,sdfsel)
    }
    return(deses)
}

function getAllDeses(nd,sdfsel) {
    let deses = getAllDesesIncludingSelf(nd,sdfsel)
    deses.shift()
    return(deses)
}


function getFlatWidth(nd,sdfsel) {
    let deses=getAllDesesIncludingSelf(nd,sdfsel)
    return(deses.filter(isLeaf).length)
}

function getFlatOffset(nd,sdfsel) {
    let index = sdfsel.findIndex(r=>(r._id === nd._id))
    let pre = sdfsel.slice(0,index)
    pre = pre.filter(isLeaf)
    return(pre.length)
}


/*
 *
 */


function _updateDepth(ndepth,sdfsel) {
    let incr = ndepth - sdfsel[0]._depth
    sdfsel = sdfsel.map(r=>{
        r._depth = r._depth + incr
        return(r)
    })
    return(sdfsel)
}


function _nonfstsibize(nd) {
    nd._pid = undefined
    return(nd)
}

function _fstsibize(nd) {
    nd._lsibid = null
    return(nd)
}

function _lstsibize(nd) {
    nd._pid = undefined
    nd._rsibid = null
    return(nd)
}

function _arg2SubAndNrnd(arg) {
    let subsdfsel;
    let nrnd;
    if(cmmn.isArray(arg)) {
        subsdfsel = arg
        nrnd = subsdfsel[0]
    } else {
        subsdfsel = [arg]
        nrnd = arg
    }
    return([subsdfsel,nrnd])
}

function _insertLsib(nd,sdfsel,arg) {
    let [subsdfsel,nrnd] = _arg2SubAndNrnd(arg);
    let ndepth = nd._depth
    subsdfsel = _updateDepth(ndepth,subsdfsel)
    let lsib = getLsib(nd,sdfsel)
    lsib._rsibid = nrnd._id
    nrnd._lsibid = lsib._id
    nd._lsibid = nrnd._id
    nrnd._rsibid = nd._id
    nrnd = _nonfstsibize(nrnd)
    let index = cmmn.afindi('_id',nd._id,sdfsel)
    sdfsel = cmmn.insertl(index,subsdfsel,sdfsel)
    return(sdfsel)
}

function _fstsibPrependLsib(nd,sdfsel,arg) {
    let [subsdfsel,nrnd] = _arg2SubAndNrnd(arg)
    let ndepth = nd._depth
    subsdfsel = _updateDepth(ndepth,subsdfsel)
    let p = getParent(nd,sdfsel)
    p._fstchid = nrnd._id
    nrnd._pid = p._id
    nd._pid = undefined
    nrnd._lsibid = null
    nrnd._rsibid = nd._id
    nd._lsibid = nrnd._id
    let index = cmmn.afindi('_id',nd._id,sdfsel)
    sdfsel = cmmn.insertl(index,subsdfsel,sdfsel)
    return(sdfsel)
}


function addLsib(nd,sdfsel,arg) {
    /*
        rnd  can NOT addLsib
        fstch 
        nonfstch
        return([nd,nnd])
    */
    if(isRoot(nd)) {
        console.log("rnd  can NOT addLsib")
    } else {
        if(isFstsib(nd))  {
            sdfsel = _fstsibPrependLsib(nd,sdfsel,arg)
        } else {
            sdfsel = _insertLsib(nd,sdfsel,arg)
        }
    }
    return(sdfsel)
}

function _lstsibAppendRsib(nd,sdfsel,arg) {
    let [subsdfsel,nrnd] = _arg2SubAndNrnd(arg)
    let ndepth = nd._depth
    subsdfsel = _updateDepth(ndepth,subsdfsel)
    nrnd._lsibid = nd._id
    nd._rsibid = nrnd._id
    nrnd = _nonfstsibize(nrnd)
    let rdmost = getRdmost(nd,sdfsel)
    let index = cmmn.afindi('_id',rdmost._id,sdfsel)
    sdfsel = cmmn.insertl(index+1,subsdfsel,sdfsel)
    return(sdfsel)
}

function _insertRsib(nd,sdfsel,arg) {
    let [subsdfsel,nrnd] = _arg2SubAndNrnd(arg)
    let ndepth = nd._depth
    subsdfsel = _updateDepth(ndepth,subsdfsel)
    let rsib = getRsib(nd,sdfsel)
    rsib._lsibid = nrnd._id
    nrnd._rsibid = rsib._id
    nd._rsibid = nrnd._id
    nrnd._lsibid = nd._id
    nrnd = _nonfstsibize(nrnd)
    let rdmost = getRdmost(nd,sdfsel)
    let index = cmmn.afindi('_id',rdmost._id,sdfsel)
    sdfsel = cmmn.insertl(index+1,subsdfsel,sdfsel)
    return(sdfsel)
}


function addRsib(nd,sdfsel,arg) {
    if(isRoot(nd)) {
        console.log("rnd  can NOT addRsib")
        return(sdfsel)
    } else {
        if(isLstsib(nd))  {
            sdfsel = _lstsibAppendRsib(nd,sdfsel,arg)
        } else {
            sdfsel = _insertRsib(nd,sdfsel,arg)
        }
    }
    return(sdfsel)
}



////

function addFstch(nd,sdfsel,arg) {
    let [subsdfsel,nrnd] = _arg2SubAndNrnd(arg)
    let ndepth = nd._depth + 1
    subsdfsel = _updateDepth(ndepth,subsdfsel)
    if(isNonLeaf(nd)) {
        console.log("nonleaf  can NOT addFstch")
        return(sdfsel)
    } else {
        nd._fstchid = nrnd._id
        nrnd._pid = nd._id
        nrnd = _fstsibize(nrnd)
    }
    let index = cmmn.afindi('_id',nd._id,sdfsel)
    sdfsel = cmmn.insertl(index+1,subsdfsel,sdfsel)
    return(sdfsel)
}


function addLstch(nd,sdfsel,arg) {
    let oldLstch = getLstch(nd,sdfsel)
    return(addRsib(oldLstch,sdfsel,arg))
}



function _rootize(nd) {
    nd._lsibid = null
    nd._rsibid = null
    nd._pid = null
    return(nd)
}

function _deUpdateDepth(sdfsel) {
    let decr = sdfsel[0]._depth
    sdfsel = sdfsel.map(r=>{
        r._depth = r._depth - decr
        return(r)
    })
    return(sdfsel)
}

function getDesFstiAndLsti(nd,sdfsel) {
    let subsdfsel = getAllDesesIncludingSelf(nd,sdfsel)
    let fsti = cmmn.afindi('_id',subsdfsel[0]._id,sdfsel)
    let lsti = fsti + subsdfsel.length - 1
    return([fsti,lsti])
}

function rmFstch(nd,sdfsel) {
    let subsdfsel;
    let fstch = getFstch(nd,sdfsel)
    if(fstch !== null) {
        let [fsti,lsti] = getDesFstiAndLsti(fstch,sdfsel)
        subsdfsel = sdfsel.slice(fsti,lsti+1)
        let sndch = getRsib(fstch,sdfsel)
        if(sndch === null) {
            //only-one-child
            nd = leafize(nd)
        } else {
            nd._fstchid = sndch._id
            sndch._pid = nd._id
            sndch = _fstsibize(sndch)
        }
        subsdfsel = _deUpdateDepth(subsdfsel)
        fstch = _rootize(fstch)
        sdfsel = cmmn.secdel(fsti,lsti,sdfsel)
    } else {
        subsdfsel = []
    }
    return([sdfsel,subsdfsel])
}


function rmFstsib(nd,sdfsel) {
    let fstsib = getFstsib(nd,sdfsel)
    let p = getParent(fstsib,sdfsel)
    if(p === null) {
        return([[],sdfsel])
    } else {
        return(rmFstch(p,sdfsel))
    }
}

function rmRsib(nd,sdfsel) {
    let subsdfsel;
    let rsib = getRsib(nd,sdfsel)
    if(rsib === null){
        subsdfsel = []
    } else {
        let [fsti,lsti] = getDesFstiAndLsti(rsib,sdfsel)
        subsdfsel = sdfsel.slice(fsti,lsti+1)
        let rrsib = getRsib(rsib,sdfsel)
        if(rrsib === null) {
            nd._rsibid = null 
        } else {
            nd._rsibid = rrsib._id
            rrsib._lsibid = nd._id
        }
        subsdfsel = _deUpdateDepth(subsdfsel)
        rsib = _rootize(rsib)
        sdfsel = cmmn.secdel(fsti,lsti,sdfsel)
    }
    return([sdfsel,subsdfsel])
}


function rmLstsib(nd,sdfsel) {
    let lstsib = getLstsib(nd,sdfsel)
    let sndlstsib = getLsib(lstsib,sdfsel)
    if(sndlstsib === null) {
        return(rmFstsib(nd,sdfsel))
    } else { 
        return(rmRsib(sndlstsib,sdfsel))
    }
}

function rmLsib(nd,sdfsel) {
    let subsdfsel;
    let lsib = getLsib(nd,sdfsel)
    if(lsib === null){
        subsdfsel = []
    } else {
        let [fsti,lsti] = getDesFstiAndLsti(lsib,sdfsel)
        subsdfsel = sdfsel.slice(fsti,lsti+1)
        let llsib = getLsib(lsib,sdfsel)
        if(llsib === null) {
            nd._lsibid = null
            nd._pid = lsib._pid
            let p = getParent(nd,sdfsel)
            p._fstchid = lsib._id
        } else {
            nd._lsibid = llsib._id
            llsib._rsibid = nd._id
        }
        subsdfsel = _deUpdateDepth(subsdfsel)
        lsib = _rootize(lsib)
        sdfsel = cmmn.secdel(fsti,lsti,sdfsel)
    }
    return([sdfsel,subsdfsel])
}


////
////
////

function rmSelf(nd,sdfsel) {
    let rslt;
    if(isRoot(nd)) {
        rslt = [[],sdfsel]
    } else if(isFstsib(nd)) {
        let p = getParent(nd,sdfsel)
        rslt = rmFstch(p,sdfsel)
    } else {
        let lsib = getLsib(nd,sdfsel)
        rslt =  rmRsib(lsib,sdfsel)
    }
    return(rslt)
}

function rmChild(which,nd,sdfsel)  {
    let child = getChild(which,nd,sdfsel)
    if(child === null) {
        return([sdfsel,[]])
    } else {
        return(rmSelf(child,sdfsel))
    }
}

////
//
function subsdfselResetId(subsdfsel,sdfsel,idpool) {
    let maxId = sdfselGetMaxId(sdfsel)
    let id = maxId+1
    for(let i=0;i<subsdfsel.length;i++) {
        subsdfsel[i]._id = id
        id = id+1
    }
    idpool.currid = id
    return([subsdfsel,sdfsel,idpool])
}


//
////


module.exports = {
    isRoot,
    isFstch,
    isFstsib,
    isFstchButNotLstch,
    isFstsibButNotLstsib,
    isLstch,
    isLstsib,
    isLstchButNotFstch,
    isLstsibButNotFstsib,
    isFstchAndLstch,
    isFstsibAndLstsib,
    isMidch,
    isMidsib,
    isLeaf,
    isNonLeaf,
    isUndefined,
    havingLsib,
    havingRsib,
    idgetnd,
    eq,
    sdfselGetMaxId,
    subsdfselResetId,
    newIdPool,
    newNode,
    newRoot,
    newFstsib,
    newMidsib,
    newLstsib,
    leafize,
    newLeafFstsib,
    newLeafMidsib,
    newLeafLstsib,
    newLeafLonelySib,
    getLsib,
    getRsib,
    getPrecedingSibs,
    getFollowingSibs,
    getFstsib,
    getLstsib,
    getAllSibs,
    getSib,
    getFstch,
    getChild,
    getChildren,
    getLstch,
    getParent,
    getAllAnces,
    getAllAncesIncludingSelf,
    getAnces,
    getAncesIncludingSelf,
    getFstAncesHavingRsibIncludingSelf,
    calcDepth,
    getDepth,
    getSibseq,
    getBreadth,
    getRsibOfFstAncesHavingRsibIncludingSelf,
    getRdmost,
    sdfsNext,
    sdfsPrev,
    isAncesOf,
    isDesOf,
    isAncesOfIncludingSelf,
    isDesOfIncludingSelf,
    getAllDesesIncludingSelf,
    getAllDeses,
    getFlatWidth,
    getFlatOffset,
    addLsib,
    addRsib,
    addFstch,
    addLstch,
    getDesFstiAndLsti,
    rmFstch,
    rmFstsib,
    rmRsib,
    rmLstsib,
    rmLsib,
    rmSelf,
    rmChild
}

