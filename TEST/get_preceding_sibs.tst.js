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
    [],
    [],
    [],
    [sdfsel[2]],
    [],
    [sdfsel[4]],
    [sdfsel[1]],
    [],
    [sdfsel[7]],
    [sdfsel[7],sdfsel[8]]
]

assert('getPrecedingSibs',sdfsel,tfs,cmmn.equals)

cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[0],sdfsel),[])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[1],sdfsel),[])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[2],sdfsel),[])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[3],sdfsel),[sdfsel[2]])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[4],sdfsel),[])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[5],sdfsel),[sdfsel[4]])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[6],sdfsel),[sdfsel[1]])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[7],sdfsel),[])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[8],sdfsel),[sdfsel[7]])
cmmn.equals(ndfunc.getPrecedingSibs(sdfsel[9],sdfsel),[sdfsel[7],sdfsel[8]])

