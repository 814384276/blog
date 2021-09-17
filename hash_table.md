#### 哈希表
```
    class HashTable {
		constructor() {
			this.count = 0;
			this.stroage = [];
			this.limit = 8;
		}
		hashFunc(str, max) {
			let hashCode = 0;
			//霍顿算法
			for(let i = 0; i < str.length; i++) {
				hashCode = 31 * hashCode + str.charCodeAt(i)
			}
			hashCode = hashCode % max;
			return hashCode;
		}
		put(key, value) {
			let hashCode = this.hashFunc(key, this.limit);
			let isAdd = true;

			let lucket = this.stroage[hashCode];

			if(lucket === undefined) {
				lucket = [];
				this.stroage[hashCode] = lucket;
			}

			for(let i = 0; i < lucket.length; i++) {
				if(lucket[i][0] === key) {
					lucket[i][1] = value;
					isAdd = false;
					break;
				}
			}
			if(isAdd) {
				lucket.push([key, value])
				this.count++
			}
		}
		get(key) {
			let hashCode = this.hashFunc(key, this.limit);
			let lucket = this.stroage[hashCode];

			if(lucket === undefined) {
				return null;
			}else {
				for(let i = 0; i < lucket.length; i++) {
					if(lucket[i][0] === key) {
						return lucket[i][1];
					}
				}
				return null;
			}
		}
		remove(key) {
			let hashCode = this.hashFunc(key, this.limit);
			let lucket = this.stroage[hashCode];

			if(lucket === undefined) {
				return null;
			}else {
				for(let i = 0; i < lucket.length; i++) {
					if(lucket[i][0] === key) {
						let value = lucket[i][1]
						lucket.splice(i, 1);
						this.count--;
						return value
					}
				}
				return null;
			}
		}
		isEmpty() {
			return this.count === 0
		}
		size() {
			return this.count
		}
	}
```