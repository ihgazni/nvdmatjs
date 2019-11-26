
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

function disp(sdfsel) {
    sdfsel.forEach(
        r => {
            console.log("    ".repeat(r._depth)+"nd-"+r._id.toString())
        }
    )
}


var sdfsel = efdir.rjson("sdfsel.arr")

tfs = [
    [0,9],
    [1,5],
    [2,2],
    [3,5],
    [4,4],
    [5,5],
    [6,9],
    [7,7],
    [8,8],
    [9,9]
]


assert('getDesFstiAndLsti',sdfsel,tfs,cmmn.equals)


////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[2],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[4],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[5],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[7],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[8],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstch(sdfsel[9],sdfsel)
disp(sdfsel)
disp(subsdfsel)


////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[2],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[4],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[5],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[7],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[8],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmFstsib(sdfsel[9],sdfsel)
disp(sdfsel)
disp(subsdfsel)


////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[2],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[4],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[5],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[7],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[8],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmRsib(sdfsel[9],sdfsel)
disp(sdfsel)
disp(subsdfsel)

////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[2],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[4],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[5],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[7],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[8],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLstsib(sdfsel[9],sdfsel)
disp(sdfsel)
disp(subsdfsel)


////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[2],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[4],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[5],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[7],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[8],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmLsib(sdfsel[9],sdfsel)
disp(sdfsel)
disp(subsdfsel)

////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[2],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[4],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[5],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[7],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[8],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmSelf(sdfsel[9],sdfsel)
disp(sdfsel)
disp(subsdfsel)

////

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(0,sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(1,sdfsel[0],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(0,sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(1,sdfsel[1],sdfsel)
disp(sdfsel)
disp(subsdfsel)


var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(0,sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(1,sdfsel[3],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(0,sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(1,sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)


var sdfsel = efdir.rjson("sdfsel.arr")
[sdfsel,subsdfsel] = ndfunc.rmChild(2,sdfsel[6],sdfsel)
disp(sdfsel)
disp(subsdfsel)


