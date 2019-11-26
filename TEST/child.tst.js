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
    sdfsel[1],
    sdfsel[2],
    null,
    sdfsel[4],
    null,
    null,
    sdfsel[7],
    null,
    null,
    null
]

assert('getFstch',sdfsel,tfs,cmmn.equals)



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
    [sdfsel[1],sdfsel[6]],
    [sdfsel[2],sdfsel[3]],
    [],
    [sdfsel[4],sdfsel[5]],
    [],
    [],
    [sdfsel[7],sdfsel[8],sdfsel[9]],
    [],
    [],
    []
]

assert('getChildren',sdfsel,tfs,cmmn.equals)


ndfunc.getChild(0,sdfsel[0],sdfsel) === sdfsel[1]
ndfunc.getChild(1,sdfsel[0],sdfsel) === sdfsel[6]

ndfunc.getChild(0,sdfsel[1],sdfsel) === sdfsel[2]
ndfunc.getChild(1,sdfsel[1],sdfsel) === sdfsel[3]

ndfunc.getChild(0,sdfsel[2],sdfsel) === null

ndfunc.getChild(0,sdfsel[3],sdfsel) === sdfsel[4]
ndfunc.getChild(1,sdfsel[3],sdfsel) === sdfsel[5]

ndfunc.getChild(0,sdfsel[4],sdfsel) === null

ndfunc.getChild(0,sdfsel[5],sdfsel) === null

ndfunc.getChild(0,sdfsel[6],sdfsel) === sdfsel[7]
ndfunc.getChild(1,sdfsel[6],sdfsel) === sdfsel[8]
ndfunc.getChild(2,sdfsel[6],sdfsel) === sdfsel[9]


