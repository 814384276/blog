#### ResizeObserver 
    
```
    //新特性兼容性不好，可以借助resize-observer-polyfill来兼容更多浏览器版本
    //可以监听到Element的内容区域或svgElement边界框的变化

    //新建以一个观察者，传入一个当尺寸发生变化时的回调处理函数
    let observer = new ResizeObserver(entries => {
      for(let entry of entries) {
        console.log(entry)
        entry.target.style.borderRadius  = entry.contentRect.width + 'px'
      }
    })


    //观察
    observer.observe(element2)

    //取消观察
    observer.unobserve(element2)

    //取消目标对象所有观察
    observer.disconnect(element2)
```