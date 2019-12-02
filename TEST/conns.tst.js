const conns = require("../nvdmatjs").conns
const ndfunc = require("../ndfunc")
//load sdfsel from cache
//idpool = newIdPool(sdfsel)
//

var [sdfsel,idpool] = conns.initSdfsel()
var rnd = sdfsel[0]
sdfsel = conns.ndAndTagAddLstch(rnd,sdfsel,'html',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[1],sdfsel,'head',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[2],sdfsel,'link',idpool)

sdfsel = conns.ndAndTagAddLstch(sdfsel[2],sdfsel,'link',idpool)
sdfsel = conns.ndAndTagAddRsib(sdfsel[2],sdfsel,'body',idpool)

sdfsel = conns.ndAndTagAddRsib(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndRmSelf(sdfsel[6],sdfsel)

sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[5],sdfsel,'div',idpool)

sdfsel = conns.ndAndTagAddLsib(sdfsel[6],sdfsel,'a',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[7],sdfsel,'ul',idpool)
sdfsel = conns.ndAndTagAddLstch(sdfsel[8],sdfsel,'li',idpool)


sdfsel = conns.ndUnexpandAll(sdfsel[1],sdfsel)
conns.disp(sdfsel)
sdfsel = conns.ndUnexpandAll(sdfsel[0],sdfsel)
conns.disp(sdfsel)
sdfsel = conns.ndExpand(sdfsel[0],sdfsel)
conns.disp(sdfsel)
sdfsel = conns.ndExpand(sdfsel[1],sdfsel)
conns.disp(sdfsel)

sdfsel = conns.ndUnexpandAll(sdfsel[2],sdfsel)
conns.disp(sdfsel)

sdfsel = conns.ndUnexpandAll(sdfsel[5],sdfsel)
conns.disp(sdfsel)


sdfsel = conns.ndExpand(sdfsel[5],sdfsel)
conns.disp(sdfsel)


`
root 
    html
        head
            link
            link
        body
            a
            div
                ul 
                    li
            div
            div
`


root
└── html

root 
└── html
    └── head
        ├── link
        └── link
`

> conns.disp(sdfsel)
html
├── head
│   ├── link
│   └── link
└── body
    ├── a
    ├── div
    │   └── ul
    │       └── li
    ├── div
    └── div

undefined
>
> sdfsel[0].leaf
false
> sdfsel[1].leaf
false
> sdfsel[2].leaf
false
> sdfsel[3].leaf
true
> sdfsel[4].leaf
true
> sdfsel[5].leaf
false
> sdfsel[6].leaf
true
> sdfsel[7].leaf
false
> sdfsel[8].leaf
false
> sdfsel[9].leaf
true
> sdfsel[10].leaf
true
> sdfsel[11].leaf
true
>
> conns.disp(sdfsel)
html
├── head
│   ├── link
│   └── link
└── body
    ├── a
    ├── div
    │   └── ul
    │       └── li
    ├── div
    └── div
undefined
>
> sdfsel[0].leaf
false
> sdfsel[1].leaf
false
> sdfsel[2].leaf
false
> sdfsel[3].leaf
true
> sdfsel[4].leaf
true
> sdfsel[5].leaf
false
> sdfsel[6].leaf
true
> sdfsel[7].leaf
false
> sdfsel[8].leaf
false
> sdfsel[9].leaf
true
> sdfsel[10].leaf
true
> sdfsel[11].leaf
true
>

