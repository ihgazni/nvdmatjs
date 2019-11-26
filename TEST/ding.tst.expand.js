
var efdir = require("efdir")
var sdfsel = efdir.rjson("ding.arr")
disp(sdfsel)



var sdfsel = txtUnexpandAll("db1",sdfsel)
disp(sdfsel)
var sdfsel = txtExpandAll("db1",sdfsel)
disp(sdfsel)



function tstexpand(txt) {
    var sdfsel = efdir.rjson("ding.arr")
    var sdfsel = txtUnexpandAll(txt,sdfsel)
    disp(sdfsel)
    console.log('===================')
    var sdfsel = txtExpandAll(txt,sdfsel)
    disp(sdfsel)
}

tstexpand('db1')
tstexpand('db2')
tstexpand('db3')
tstexpand('db4')
tstexpand('db5')
tstexpand('db6')
tstexpand('db7')
tstexpand('db8')
tstexpand('db9')






var sdfsel = efdir.rjson("ding.arr")
disp(sdfsel)

var sdfsel = rootUnexpandAll(sdfsel)
disp(sdfsel)

var sdfsel = rootExpandAll(sdfsel)
disp(sdfsel)

var sdfsel = rootUnexpandAll(sdfsel)
disp(sdfsel)

sdfsel = txtExpand('db6',sdfsel)
disp(sdfsel)

sdfsel = txtUnexpandAll('db6',sdfsel)
disp(sdfsel)

sdfsel = txtExpand('db1',sdfsel)
disp(sdfsel)
sdfsel = txtExpand('db6',sdfsel)
disp(sdfsel)
sdfsel = txtExpand('db3',sdfsel)
disp(sdfsel)


disableEdit(sdfsel)
disp(sdfsel)

rootUnexpandAll(sdfsel,'disp')
disp(sdfsel)

rootExpandAll(sdfsel,'disp')
disp(sdfsel)

rootUnexpandAll(sdfsel,'disp')
disp(sdfsel)

sdfsel = txtExpand('db1',sdfsel,'disp')
disp(sdfsel)
sdfsel = txtExpand('db6',sdfsel,'disp')
disp(sdfsel)
sdfsel = txtExpand('db3',sdfsel,'disp')
disp(sdfsel)


sdfsel = txtExpand('db3',sdfsel,'edit')
disp(sdfsel)
