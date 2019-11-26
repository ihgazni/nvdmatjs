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
    sdfsel,
    sdfsel.slice(1,6),
    [sdfsel[2]],
    sdfsel.slice(3,6),
    [sdfsel[4]],
    [sdfsel[5]],
    sdfsel.slice(6),
    [sdfsel[7]],
    [sdfsel[8]],
    [sdfsel[9]],
]

assert('getAllDesesIncludingSelf',sdfsel,tfs,cmmn.equals)

var tfs = [
    sdfsel.slice(1),
    sdfsel.slice(2,6),
    [],
    sdfsel.slice(4,6),
    [],
    [],
    sdfsel.slice(7),
    [],
    [],
    [],
]

assert('getAllDeses',sdfsel,tfs,cmmn.equals)

////

var tfs = [
    6,
    3,
    1,
    2,
    1,
    1,
    3,
    1,
    1,
    1,
]

assert('getFlatWidth',sdfsel,tfs,cmmn.equals)

var tfs = [
    0,
    0,
    0,
    1,
    1,
    2,
    3,
    3,
    4,
    5,
]

assert('getFlatOffset',sdfsel,tfs,cmmn.equals)
