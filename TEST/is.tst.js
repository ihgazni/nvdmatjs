const ndfunc = require("../ndfunc")
const cmmn = require("../cmmn-utils")
const efdir = require("efdir")

function assert(func,sdfsel,tfs) {
    let rslt = sdfsel.map(
        (r,i) => {
            let cond = ndfunc[func](sdfsel[i]) === tfs[i]
            console.assert(cond,"isRoot("+i+") failed")
            return([i,cond])
        }
    )
    rslt = rslt.filter((r)=>(r[1]===false))
    rslt = rslt.map((r)=>r[0])
    return(rslt)
}

var sdfsel = efdir.rjson("sdfsel.arr")

var tfs = [true,false,false,false,false,false,false,false,false,false]
assert('isRoot',sdfsel,tfs)

var tfs = [true,true,true,false,true,false,false,true,false,false]
assert('isFstch',sdfsel,tfs)

var tfs = [true,false,false,true,false,true,true,false,false,true]
assert('isLstch',sdfsel,tfs)

var tfs = [true,false,false,false,false,false,false,false,false,false]
assert('isSinglech',sdfsel,tfs)

var tfs = [false,false,false,false,false,false,false,false,true,false]
assert('isMidch',sdfsel,tfs)

var tfs = [false,false,true,false,true,true,false,true,true,true]
assert('isLeaf',sdfsel,tfs)

var tfs = [true,true,false,true,false,false,true,false,false,false]
assert('isNonLeaf',sdfsel,tfs)

var tfs = [false,false,false,false,false,false,false,false,false,false]
assert('isUndefined',sdfsel,tfs)


