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
    [sdfsel[6]],
    [sdfsel[3]],
    [],
    [sdfsel[5]],
    [],
    [],
    [sdfsel[8],sdfsel[9]],
    [sdfsel[9]],
    []
]

assert('getFollowingSibs',sdfsel,tfs,cmmn.equals)

cmmn.equals(ndfunc.getFollowingSibs(sdfsel[0],sdfsel),[])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[1],sdfsel),[sdfsel[6]])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[2],sdfsel),[sdfsel[3]])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[3],sdfsel),[])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[4],sdfsel),[sdfsel[5]])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[5],sdfsel),[])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[6],sdfsel),[])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[7],sdfsel),[sdfsel[8],sdfsel[9]])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[8],sdfsel),[sdfsel[7]])
cmmn.equals(ndfunc.getFollowingSibs(sdfsel[9],sdfsel),[])


