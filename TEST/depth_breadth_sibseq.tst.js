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
    0,
    1,
    2,
    2,
    3,
    3,
    1,
    2,
    2,
    2
]

assert('getDepth',sdfsel,tfs,cmmn.equals)

var tfs = [
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    2,
    3,
    4
]

assert('getBreadth',sdfsel,tfs,cmmn.equals)


