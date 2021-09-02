

function deepClone(source) {

    const targetObj = source.constructor === 'Array' ? [] : {};

    for(let key in source) {
        if(source[key] && typeof source[key] === 'object') {

            // targetObj[key] = source[key].constructor === 'Array' ? [] : {};

            targetObj[key] = deepClone(source[key])

        }else {
            targetObj[key] = source[key];
        }
    }

    return targetObj;

}

const obj = [
    {name: 1},
    {name: 'ming'}
]

const newObj = deepClone(obj)

console.log(newObj)

newObj[0].name = 'xiao';


console.log(newObj, obj)