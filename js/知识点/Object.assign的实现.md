#### Object.assign 的实现
```
    //浅拷贝
    //实现：
    function merge (target) {
        if(target === null) throw new TypeError('Cannot convert undefined or null to object')

        for(let i = 1; i < arguments.length; i++) {
            let source = arguments[i] || {};
            for(let key in source) {
                //保证是源对象的属性
                if(source.hasOwnProperty(key)) {
                    if(source[key] !== undefined) {
                        //同个属性则覆盖值
                        target[key] = source[key]
                    }
                }
            }
        }

        return target;
    }

    //使用
    merge({name: 'xiaohong'}, {name: 'xiaoming', age: 18}, {adress: 'gz'})
```