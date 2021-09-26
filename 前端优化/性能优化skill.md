#### 
    1.避免全局变量
        采用let const代替var声明变量  

    2.避免全局查找

    3.避免循环引用

    let btn = document.querySelector("#btn");
    btn.onclick = function() {
        console.log(`${this}`)
    }
    btn = null;

    4.setInterval代替setTimeout

    4.文档碎片代替append
    let frg = document.createDocumentFragment();
    for(let i = 0; i < 10; i++) {
        let p = document.createElement("p")
        p.innerHTML = i;
        frg.appendChild(p)
    }
    document.body.appendChild(frg)
    
