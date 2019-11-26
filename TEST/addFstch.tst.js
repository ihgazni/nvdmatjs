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
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[0],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[1],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[2],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[3],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[4],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[5],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[6],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[7],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[8],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)

var sdfsel = efdir.rjson("sdfsel.arr")
var subsdfsel = efdir.rjson("subsdfsel.arr")
ndfunc.addFstch(sdfsel[9],sdfsel,subsdfsel)
disp(sdfsel)
disp(subsdfsel)


