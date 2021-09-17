#### 单向链表
```
    class Element {
		constructor(element) {
			this.element = element;
			this.next = null

		}
	}

	class Link {
		constructor() {
			this.head = null;
			this.length = 0
		}
		append(element) {
			if (element === undefined) return;
			let newNode = new Element(element);
			if(!this.head) {
				this.head = newNode;
			}else {
				let current = this.head;
				while(current.next) {
					current = current.next;
				}
				current.next = newNode
			}
			this.length++;
		}
		//指定位置插入
		insert(element, position){
			//越界判断
			if(position < 0 || this.length < position) return false
			let current = this.head;
			let newNode = new Element(element)
			if(position === 0) {
				this.head = newNode;
				newNode.next = current
			}else {
				let index = 0;
				let prev = null;
				while(index++ < position) {
					prev = current;
					current = current.next;
				
				}
				prev.next = newNode;
				newNode.next = current;
			}
			this.length++
			return true
		}
		get(position) {
			if(position < 0 || position > this.length - 1) return -1;
			let index = 0;
			let current = this.head;
			while(index++ < position) {
				current = current.next;
			}
			return current.element;
		}
		indexOf(element) {
			let index = 0;
			let current = this.head;
			while(current) {
				if(current.element === element) {
					return index;
				}
				current = current.next;
				index++
			}
			return -1
		}
		removeAt(position) {
			if(position < 0 || position > this.length - 1) return null;
			let index = 0;
			let current = this.head;
			let prev = null;
			while(index++ < position) {
				prev = current;
				current = current.next
			}
			prev.next = current.next;
			this.length--;
			return current.element;
		}
		update(position, element) {
			if(position < 0 || position > this.length - 1) return null;
			let removeElement = this.removeAt(position);
			this.insert(element, position)
			return removeElement;
		}
		remove(element) {
			let index = this.indexOf(element)
			if(index === -1) return 
			this.removeAt(index)
		}
		isEmpty() {
			return this.length === 0
		}
		size() {
			return this.length
		}
	}
```

#### 双向链表
```
	//双向链表
	class DoubleElement extends Element{
		constructor(element) {
			super(element)
			this.prev = null;
		}
	}

	class DoubleLink extends Link {
		constructor() {
			super()
			this.tail = null;
		}
		append(element) {
			if (element === undefined) return;
			const doubleElement = new DoubleElement(element)
			//原来没有数据
			if(this.head === null) {
				this.tail = doubleElement;
				this.head = doubleElement;
			}else {
				this.tail.next = doubleElement;
				doubleElement.prev = this.tail;
				this.tail = doubleElement;
			}
			this.length++;
		}
		insert(element, position) {
			if(position < 0 || position > this.length) return
			const doubleElement = new DoubleElement(element);
			//头部插入
			if(position === 0) {
				doubleElement.next = this.head;
				this.head.prev = doubleElement;
				this.head = doubleElement;
			//尾部插入
			}else if(position === this.length) {
				this.tail.next = doubleElement
				doubleElement.prev = this.tail
				this.tail = doubleElement
			}else {
				let index = 0;
				let current = this.head;
				let prev = null;
				while(index++ < position) {
					prev = current;
					current = current.next
				} 
				prev.next = doubleElement
				doubleElement.prev = prev;
				doubleElement.next = current
				current.prev = doubleElement;
			}
			this.length++
		}
		removeAt(position) {
			if(position < 0 || position > this.length - 1) return null
			let current = this.head;
			if(position === 0) {
				if(this.length === 1) {
					this.head = null
					this.tail = null
				}else {
					this.head = this.head.next;
					this.head.prev = null;
				}
				
			}else if(position === this.length - 1) {
				current = this.tail
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			}else {
				let index = 0;
				let prev = null;
				
				while(index ++ < position) {
					prev = current;
					current = current.next;
				}
				prev.next = current.next;
				current.next.prev = prev;

			}
			this.length--
			return current.element
		}
	}
```