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
    sdfsel[6],
    sdfsel[3],
    sdfsel[6],
    sdfsel[5],
    sdfsel[6],
    null,
    sdfsel[8],
    sdfsel[9],
    null
]

assert('getRsibOfFstAncesHavingRsibIncludingSelf',sdfsel,tfs,cmmn.equals)

var tfs = [
    sdfsel[9],
    sdfsel[5],
    sdfsel[2],
    sdfsel[5],
    sdfsel[4],
    sdfsel[5],
    sdfsel[9],
    sdfsel[7],
    sdfsel[8],
    sdfsel[9]
]

assert('getRdmost',sdfsel,tfs,cmmn.equals)


var tfs = [
    sdfsel[1],
    sdfsel[2],
    sdfsel[3],
    sdfsel[4],
    sdfsel[5],
    sdfsel[6],
    sdfsel[7],
    sdfsel[8],
    sdfsel[9],
    null,
]

assert('sdfsNext',sdfsel,tfs,cmmn.equals)

var tfs = [
    null,
    sdfsel[0],
    sdfsel[1],
    sdfsel[2],
    sdfsel[3],
    sdfsel[4],
    sdfsel[5],
    sdfsel[6],
    sdfsel[7],
    sdfsel[8],
]

assert('sdfsPrev',sdfsel,tfs,cmmn.equals)

