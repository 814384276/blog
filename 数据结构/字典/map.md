## 字典

### 字典特点

- 字典存储的是**键值对**，主要特点是**一一对应**。
- 比如保存一个人的信息
  - 数组形式：`[19，"Tom", 1.65]`，可通过下标值取出信息。
  - 字典形式：`{"age": 19, "name": "Tom", "height": 165}`，可以通过 `key` 取出 `value`。
- 此外，在字典中 key 是不能重复且无序的，而 Value 可以重复。

### 字典和映射的关系

- 有些编程语言中称这种映射关系为**字典**，如 Swift 中的 `Dictonary`，Python 中的 `dict`。
- 有些编程语言中称这种映射关系为 **Map**，比如 Java 中的 `HashMap` 和 `TreeMap` 等。

### 字典常见的操作

- `set(key, value)`: 向字典中添加新元素。
- `remove(key)`:  通过使用键值来从字典中移除键值对应的数据值。
- `has(key)`:  如果某个键值存在于这个字典中，则返回 `true`，反之则返回 `false`。
- `get(key)`: 通过键值查找特定的数值并返回。
- `clear()`: 将字典所有元素删除。
- `size()`: 返回字典元素个数。
- `keys()`: 将字典所包含的所有键名以数组形式返回。
- `values()`: 将字典所包含的所有数值以数组形式返回。

### 代码实现



```javascript
class Map{
    constructor() {
        this.items = {}
    }

    set(key, value) {
        if(this.has(key)) return false

        this.items[key] = value;

        return true
    }

    remove(key) {
        if(!this.has(key)) return false

        delete this.items[key]

        return true
    }

    get(key) {
        return this.items[key]
    }

    clear() {
        this.items = {}
    }

    size() {
        return this.keys().length
    }

    keys() {
        return this.items.keys()
    }

    values() {
        return this.items.values()
    }

    has(key) {
        return this.items.hasOwnProperty(key)
    }

}
```

