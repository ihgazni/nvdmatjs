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
    ├── link
    └── link
└── body
    ├── a
    ├── div
    │   └── ul
    │       └── li
    ├── div
    └── div
undefined
>


