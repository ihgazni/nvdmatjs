
function deepcopyJSON(o) {
    return(JSON.parse(JSON.stringify(o)))
}

/*
    a    attr
    i    index
    v    value
*/
function amax(a,l) {
    let arr = l.map(r=>r[a])
    return(Math.max(...arr))
}

function amin(a,l) {
    let arr = l.map(r=>r[a])
    return(Math.min(...arr))
}

function afindi(a,v,l) {
    let i = l.findIndex(ele=>(ele[a]===v))
    return(i)
}

function afindv(a,v,l) {
    let r = l.find(ele=>(ele[a]===v))
    return(r)
}


function getlsti(l) {
    return(l.length -1)
}

function getlstv(l) {
    return(l[getlsti(l)])
}

function getlsta(a,l) {
    return(getlstv(l)[a])
}

function getLstSlice(lngth,l) {
    return(l.slice(l.length-lngth))
}

function secdel(fsti,lsti,l) {
    let c = lsti - fsti + 1 
    l.splice(fsti,c)
    return(l)
}

function insert(i,v,l) {
    l.splice(i,0,v)
    return(l)
}

function insertl(i,subl,l) {
     l.splice(i,0,...subl)
     return(l)
}

function setlst(v,l) {
    l[l.length-1] = v
    return(l)
}


function norecurEq(l0,l1) {
    let rslt = true
    for(let i=0;i<l0.length;i++) {
        let cond = (l0[k] === l1[k])
        if(cond === false) {
            return(false)
        }
    }
    return(rslt)
}

function simpleCompare(a, b) {
    return a === b || a !== a && b !== b;
}

function isArray(arr) {
    return Array.isArray(arr) || arr instanceof Array;
}

function isDate(value) {
    return toString.call(value) === '[object Date]';
}

function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
}


function isWindow(obj) {
    return obj && obj.window === obj;
}
function isScope(obj) {
    return obj && obj.$evalAsync && obj.$watch;
}

function isFunction(value) {
    return typeof value === 'function';
}

function isDefined(value) {
    return typeof value !== 'undefined';
}


function createMap() {
    return Object.create(null);
}


function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true;
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 === t2 && t1 === 'object') {
        if (isArray(o1)) {
            if (!isArray(o2))
                return false;
            if ((length = o1.length) === o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        } else if (isDate(o1)) {
            if (!isDate(o2))
                return false;
            return simpleCompare(o1.getTime(), o2.getTime());
        } else if (isRegExp(o1)) {
            if (!isRegExp(o2))
                return false;
            return o1.toString() === o2.toString();
        } else {
            if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2))
                return false;
            keySet = createMap();
            for (key in o1) {
                if (key.charAt(0) === '$' || isFunction(o1[key]))
                    continue;
                if (!equals(o1[key], o2[key]))
                    return false;
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && key.charAt(0) !== '$' && isDefined(o2[key]) && !isFunction(o2[key]))
                    return false;
            }
            return true;
        }
    }
    return false;
}


module.exports = {
    deepcopyJSON,
    amax,
    amin,
    afindi,
    afindv,
    getlsti,
    getlstv,
    getlsta,
    getLstSlice,
    setlst,
    secdel,
    insert,
    insertl,
    norecurEq,
    simpleCompare,
    isArray,
    isDate,
    isRegExp,
    isWindow,
    isScope,
    isFunction,
    isDefined,
    createMap,
    equals
}


