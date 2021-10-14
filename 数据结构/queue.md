#### 队列封装(先进先出)

```
    class Queue() {
            constructor() {
			    this.items = [];
            }
            //入列
            enqueue(element) {
                this.items.push(element)
            }
            //出列
            dequeue() {
                return this.items.shift()
            }
            front() {
                if(this.isEmpty()) return null
                return this.items[0]
            }
            isEmpty() {
                return this.items.length === 0
            }
            size() {
                return this.items.length
            }
    }
 ```

    //击鼓传花(队列应用)
    function passGame(nameList, num) {
		let queue = new Queue();

		for(let i = 0; i < nameList.length; i++) {
			queue.enqueue(nameList[i])
		}

		while(queue.size() > 1) {
			for(let i = 0; i < num - 1; i++) {
				queue.enqueue(queue.dequeue())
			}
			queue.dequeue()
		}

		return queue.front()
	}

```
    //优先级队列
    class QueueElement {
		constructor(element, priority) {
			this.element = element;
			this.priority = priority;
		}
	}

	class PriorityQueue extends Queue{
		enqueue(element, priority) {
			const queueElement = new QueueElement(element, priority);
			if(this.isEmpty()) {
				this.items.push(queueElement)
			}else {
				let isAdd = false;
				for(let i = 0; i < this.items.length; i++) {
					if(this.items[i].priority > priority) {
						this.items.splice(i, 0, queueElement)
						isAdd = true
						break; //必须跳转循环 ，不然会造成死循环
					}
				}
				//未找到时插入
				if(!isAdd) {
					this.items.push(queueElement)
				}
			}
		}
	}
```