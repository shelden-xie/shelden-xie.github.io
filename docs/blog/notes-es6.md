# ES6 总结  

## 一、ECMAScript 6 简介  

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。  

本文只是大概总结ES6的一些常用的新特性以及简单的用法。  

## 二、新特性  

### 1、let 和 const

ES6新增的变量声明的命令，用法和var类似；  

**共同点：（统一let举例）**  
1、不存在变量提升。var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

2、暂时性死区。只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。  

```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

3、不允许重复声明同一个变量。  

```js
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

function func(arg) {
  let arg;
}
func() // 报错

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错
```

**不同点：**  
const声明一个只读的常量。一旦声明，常量的值就不能改变。如果声明一个复合类型的数据，可以添加修改这个变量，如果赋值一个新的变量就会报错了。let可以。const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

### 2、变量的解构赋值  

```js
//数组的解构，并且可以赋予出事的默认值 a=0 意思就是当解构不出来这个值的时候，就选用默认值
let [a = 0, b, c] = [1, 2, 3];
// 对象的解构
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
```

### 3、字符串的扩展方法  

1、增加了 **for···of**方法对字符串进行遍历；  

2、传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

**includes()**：返回布尔值，表示是否找到了参数字符串。  
**startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。  
**endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。  
这三种方法都支持第二个参数，表示开始搜索的位置。  

3、**repeat()**:方法返回一个新字符串，表示将原字符串重复n次。  

4、**trimStart()，trimEnd()** ，分别表示消除字符串头尾的空格

### 4、正则的扩展（RegExp构造函数支持使用第二个参数添加修饰符）  

### 5、数值的扩展

1、ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。  

**Number.isFinite()** 用来检查一个数值是否为有限的（finite）  

**Number.isNaN()** 用来检查一个值是否为NaN。  

2、ES6 将全局方法 **parseInt()** 和 **parseFloat()** ，移植到Number对象上面，行为完全保持不变。  

3、**Number.isInteger()** 用来判断一个数值是否为整数。

4、Math方法的新增  

**Math.trunc**方法用于去除一个数的小数部分，返回整数部分；  

**Math.sign**方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。  

它会返回五种值。
参数为正数，返回+1；
参数为负数，返回-1；
参数为 0，返回0；
参数为-0，返回-0;
其他值，返回NaN。  

### 6、函数的扩展  

1、函数参数的默认值  
2、rest 参数  
3、严格模式  
4、name 属性  
5、箭头函数  
6、尾调用优化  
7、函数参数的尾逗号  
8、Function.prototype.toString()  
9、catch 命令的参数省略  

### 7、数组的扩展  

1、扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。  

```js
console.log(...[1, 2, 3])
// 1 2 3

function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
```

2、数组的合并

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

### 8、对象的扩展

1、属性的简洁表示法  
2、属性名表达式  
3、方法的 name 属性  
4、属性的可枚举性和遍历  
5、super 关键字  
6、对象的扩展运算符  
7、链判断运算符  
8、Null 判断运算符  

### 9、对象的新增方法

1、Object.is()  
2、Object.assign()  
3、Object.getOwnPropertyDescriptors()  
4、__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()  
5、Object.keys()，Object.values()，Object.entries()  
6、Object.fromEntries()  

### 10、Symbol

### 11、Set 和 Map 数据结构

### 12、Proxy

### 13、Reflect

### 14、Promise 对象

### 15、Iterator 和 for...of 循环

### 16、Generator 函数的语法

### 17、Generator 函数的异步应用

### 18、async 函数

### 19、Class 的基本语法

### 20、Class 的继承

### 21、Module 的语法

### 22、Module 的加载实现

### 23、编程风格

### 24、读懂规格

### 25、异步遍历器

### 26、ArrayBuffer  

本文只是大概讲了一下ES6新特性。具体详细用法可以参考文章连接：[阮一峰 ECMAScript 6](https://es6.ruanyifeng.com/#docs/intro)
