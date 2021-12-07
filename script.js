//Все сочетания элементов нескольких массивов

let arr= [
    ['1', '2', '3'],
    ['a', 's', 'd'],
    ['V', 'J', 'O']
    ]

function cartesian(...args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

function getString(arr) {
    let result = []
    let elem = ''
    arr.forEach(innerArr => {
        innerArr.forEach(val => {
            elem += val
        })
        result.push(elem)
        elem = ''
    })
    return result
}

let arrMod = cartesian(['1', '2', '3'], ['a', 's', 'd'], ['V', 'J', 'O'])
console.log(getString(arrMod))
