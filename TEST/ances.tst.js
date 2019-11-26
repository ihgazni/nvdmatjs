const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const efdir = require("efdir")

function assert(func,sdfsel,tfs,eq) {
    eq = (eq === undefined) ? dflteq : eq
    let rslt = sdfsel.map(
        (r,i) => {
            let cond = eq(ndfunc[func](sdfsel[i],sdfsel),tfs[i])
            console.assert(cond,"isRoot("+i+") failed")
            return([i,cond])
        }
    )
    rslt = rslt.filter((r)=>(r[1]===false))
    rslt = rslt.map((r)=>r[0])
    return(rslt)
}

function dflteq (a,b) {
    return(a===b)
}

var sdfsel = efdir.rjson("sdfsel.arr")

var tfs = [
    null,
    sdfsel[0],
    sdfsel[1],
    sdfsel[1],
    sdfsel[3],
    sdfsel[3],
    sdfsel[0],
    sdfsel[6],
    sdfsel[6],
    sdfsel[6]
]

assert('getParent',sdfsel,tfs,cmmn.equals)



var tfs = [
    sdfsel[6],
    sdfsel[3],
    null,
    sdfsel[5],
    null,
    null,
    sdfsel[9],
    null,
    null,
    null
]

assert('getLstch',sdfsel,tfs,cmmn.equals)


var tfs = [
    [],
    [sdfsel[0]],
    [sdfsel[1],sdfsel[0]],
    [sdfsel[1],sdfsel[0]],
    [sdfsel[3],sdfsel[1],sdfsel[0]],
    [sdfsel[3],sdfsel[1],sdfsel[0]],
    [sdfsel[0]],
    [sdfsel[6],sdfsel[0]],
    [sdfsel[6],sdfsel[0]],
    [sdfsel[6],sdfsel[0]]
]

assert('getAllAnces',sdfsel,tfs,cmmn.equals)


var tfs = [
    [sdfsel[0]],
    [sdfsel[1],sdfsel[0]],
    [sdfsel[2],sdfsel[1],sdfsel[0]],
    [sdfsel[3],sdfsel[1],sdfsel[0]],
    [sdfsel[4],sdfsel[3],sdfsel[1],sdfsel[0]],
    [sdfsel[5],sdfsel[3],sdfsel[1],sdfsel[0]],
    [sdfsel[6],sdfsel[0]],
    [sdfsel[7],sdfsel[6],sdfsel[0]],
    [sdfsel[8],sdfsel[6],sdfsel[0]],
    [sdfsel[9],sdfsel[6],sdfsel[0]]
]

assert('getAllAncesIncludingSelf',sdfsel,tfs,cmmn.equals)



cmmn.equals(ndfunc.getAnces(0,sdfsel[0],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[1],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(1,sdfsel[1],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[2],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAnces(1,sdfsel[2],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(2,sdfsel[2],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[3],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAnces(1,sdfsel[3],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(2,sdfsel[3],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[4],sdfsel),sdfsel[3])
cmmn.equals(ndfunc.getAnces(1,sdfsel[4],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAnces(2,sdfsel[4],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(3,sdfsel[4],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[5],sdfsel),sdfsel[3])
cmmn.equals(ndfunc.getAnces(1,sdfsel[5],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAnces(2,sdfsel[5],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(3,sdfsel[5],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[6],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(1,sdfsel[6],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[7],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAnces(1,sdfsel[7],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(2,sdfsel[7],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[8],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAnces(1,sdfsel[8],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(2,sdfsel[8],sdfsel),null)

cmmn.equals(ndfunc.getAnces(0,sdfsel[9],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAnces(1,sdfsel[9],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAnces(2,sdfsel[9],sdfsel),null)



cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[0],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[0],sdfsel),null)

cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[1],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[1],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[1],sdfsel),null)


cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[2],sdfsel),sdfsel[2])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[2],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[2],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[2],sdfsel),null)


cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[3],sdfsel),sdfsel[3])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[3],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[3],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[3],sdfsel),null)


cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[4],sdfsel),sdfsel[4])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[4],sdfsel),sdfsel[3])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[4],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[4],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(4,sdfsel[4],sdfsel),null)

cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[5],sdfsel),sdfsel[5])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[5],sdfsel),sdfsel[3])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[5],sdfsel),sdfsel[1])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[5],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(4,sdfsel[5],sdfsel),null)



cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[6],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[6],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[6],sdfsel),null)


cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[7],sdfsel),sdfsel[7])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[7],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[7],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[7],sdfsel),null)

cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[8],sdfsel),sdfsel[8])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[8],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[8],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[8],sdfsel),null)

cmmn.equals(ndfunc.getAncesIncludingSelf(0,sdfsel[9],sdfsel),sdfsel[9])
cmmn.equals(ndfunc.getAncesIncludingSelf(1,sdfsel[9],sdfsel),sdfsel[6])
cmmn.equals(ndfunc.getAncesIncludingSelf(2,sdfsel[9],sdfsel),sdfsel[0])
cmmn.equals(ndfunc.getAncesIncludingSelf(3,sdfsel[9],sdfsel),null)







var tfs = [
    null,
    sdfsel[1],
    sdfsel[2],
    sdfsel[1],
    sdfsel[4],
    sdfsel[1],
    null,
    sdfsel[7],
    sdfsel[8],
    null
]

assert('getFstAncesHavingRsibIncludingSelf',sdfsel,tfs,cmmn.equals)


