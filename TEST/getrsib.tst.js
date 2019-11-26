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


ndfunc.getRsib(sdfsel[0],sdfsel) === null
ndfunc.eq(ndfunc.getRsib(sdfsel[1],sdfsel),sdfsel[6])
ndfunc.eq(ndfunc.getRsib(sdfsel[2],sdfsel),sdfsel[3])
ndfunc.getRsib(sdfsel[3],sdfsel) === null
ndfunc.eq(ndfunc.getRsib(sdfsel[4],sdfsel),sdfsel[5])
ndfunc.getRsib(sdfsel[5],sdfsel) === null
ndfunc.getRsib(sdfsel[6],sdfsel) === null
ndfunc.eq(ndfunc.getRsib(sdfsel[7],sdfsel),sdfsel[8])
ndfunc.eq(ndfunc.getRsib(sdfsel[8],sdfsel),sdfsel[9])
ndfunc.getRsib(sdfsel[9],sdfsel) === null


//assert('getRsib',sdfsel,tfs)
