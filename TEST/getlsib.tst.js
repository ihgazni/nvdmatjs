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
    { _fstchid: 1, _lsibid: null, _rsibid: null, _id: 0, _pid: null },
    { _fstchid: 2, _lsibid: null, _rsibid: 6, _id: 1, _pid: 0 },
    { _fstchid: null, _lsibid: null, _rsibid: 3, _id: 2, _pid: 1 },
    { _fstchid: 4, _lsibid: 2, _rsibid: null, _id: 3 },
    { _fstchid: null, _lsibid: null, _rsibid: 5, _id: 4, _pid: 3 },
    { _fstchid: null, _lsibid: 4, _rsibid: null, _id: 5 },
    { _fstchid: 7, _lsibid: 1, _rsibid: null, _id: 6 },
    { _fstchid: null, _lsibid: null, _rsibid: 8, _id: 7, _pid: 6 },
    { _fstchid: null, _lsibid: 7, _rsibid: 9, _id: 8 },
    { _fstchid: null, _lsibid: 8, _rsibid: null, _id: 9 }
]

assert('idgetnd',sdfsel,tfs,ndfunc.eq)



ndfunc.getLsib(sdfsel[0],sdfsel) === null
ndfunc.getLsib(sdfsel[1],sdfsel) === null
ndfunc.getLsib(sdfsel[2],sdfsel) === null
ndfunc.eq(ndfunc.getLsib(sdfsel[3],sdfsel),sdfsel[2])
ndfunc.getLsib(sdfsel[4],sdfsel)
ndfunc.eq(ndfunc.getLsib(sdfsel[5],sdfsel),sdfsel[4])
ndfunc.eq(ndfunc.getLsib(sdfsel[6],sdfsel),sdfsel[1])
ndfunc.getLsib(sdfsel[7],sdfsel) === null
ndfunc.eq(ndfunc.getLsib(sdfsel[8],sdfsel),sdfsel[7])
ndfunc.eq(ndfunc.getLsib(sdfsel[9],sdfsel),sdfsel[8])
