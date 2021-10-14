#### 栈封装(后进先出)
```
    class Stack {
      constructor() {
		  this.items = []
	  }
      //入栈
	  push(element) {
		  this.items.push(element)
	  }
      //出栈
	  pop() {
		  return this.items.pop();
	  }
      //查看栈顶
	  peek() {
		  return this.items[this.items.length - 1]
	  }
	  isEmpty() {
		  return this.items.length === 0
	  }
	  size() {
		  return this.items.length
	  }

    }

    //利用栈封装10进制转其他进制
    function hex(num, base = 2) {
        let stack = new Stack();
        let binary = '';
        while(num > 0) {
            stack.push(num % 2);
            num = Math.floor(num / 2)
        }
        while(!stack.isEmpty()) {
            binary += stack.pop()
        }
        return binary;
    }
```