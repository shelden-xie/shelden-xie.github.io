# js基础测试

``` JS
    alert(a)
    a();
    var a = 3;

    function a() {
      alert(10)
    };
    alert(a);
    a = 6;
    a();

    // 本题首先会变量提升，函数也会提升并且优先级要高于变量，最终会解析如下：
    function a() {
      console.log(10)
    }
    var a;
    console.log(a) //变量函数提升后，如果出现变量和函数同名并且变量未赋值，的优先输出函数体。所以此处打印  a函数体
    a(); //同上 a现在是函数体调用执行此处打印 10
    a = 3; //赋值
    console.log(a); //a变成一个变量值，打印 3
    a = 6; //赋值
    a(); //此时的a是一个变量，并不是函数体，无法函数调用，就会报错 ’a is not a function‘;

    var x = 1,
  y = 0,
  z = 0;
function add(x) {
  return (x = x + 1);
}
y = add(x);
console.log(y);
function add(x) {
  return (x = x + 3);
}
z = add(x);
console.log(z);

function add(x) {
  return (x = x + 1);
}
function add(x) {
  return (x = x + 3);
}
var x, y, z;
x = 1;
y = 0;
z = 0;
y = add(x);
console.log(y); //4,首先进行变量提升，两个函数名称一样，后者会覆盖前者(看书写的先后顺序)，
z = add(x);
console.log(z); //4，首先进行变量提升，两个函数名称一样，后者会覆盖前者(看书写的先后顺序)


this.a = 20;//this指向window
function go() {
    console.log(this.a);
    this.a = 30;
}
go.prototype.a = 40;
var test = {
  a: 50,
  init: function (fn) {
    fn();
    console.log(this.a);
    return fn;
  },
};
console.log(new go().a); //40 30；执行new go(),会执行go函数体，此时的this指向的是go的原型，原型上面有个a值40 ，继续向下执行，构造函数本身挂载了a的值30，因此打印30
// 此时this指向调用者，test
test.init(go);//把go函数传进去内部执行go函数，但是此时go函数没有执行的宿主环境，this.a就指向window全局 20，此时this.a=30修改了全局变量window.a = 30;向下执行的this指向test的a的值50；
var p = test.init(go);//同上一样,只是此时的全局window变成了30
p();//go函数调用（找不到谁调用就指向全局）this.a =30


// 严格模式下this不允许指向全局对象在函数内部；严格模式调用是要指定调用者。
var num = 1;
function test() {
  "use strict";
  console.log(this.num++);
}
function test2() {
  console.log(++this.num);
}
(function () {
  "use strict";
  //函数自调用形成私有作用域，此时的this指向window，
  test2();//执行函数体this.num = 1  ++this.num 先加一在输出  2
})();

test();//严格模式不允许指向全局所以会报错


// 如果一个函数原型上和构造函数本身的变量重名时，优先输出构造函数的变量
function C1(name) {
  if (name) this.name = name;
}
function C2(name) {
  this.name = name;
}
function C3(name) {
  this.name = name || "fe";
}
C1.prototype.name = "xie";
C2.prototype.name = "ya";
C3.prototype.name = "dong";
// new C1().name 没有执行所以以原型链上的变量输出
console.log(new C1().name + new C2().name + new C3().name); //xie undefined fe



//考查的是闭包的原理
//闭包可已访问外部的变量，同事可以保护内部的变量不受外部污染，保存作用域
var list_li = document.getElementsByTagName("li");
for (var i = 0; i < list_li.length; i++) {
  list_li[i].onclick = function () {
    console.log(i);//打印出都是6
  };
}

// let let关键字
var list_li = document.getElementsByTagName("li");
for (let i = 0; i < list_li.length; i++) {
  list_li[i].onclick = function () {
    console.log(i);//打印0，1，2，3，4，5  let关键字块级作用域，保护内部变量不受外部污染，因此for循环的时候每一次循环都是一个块级作用域，保护了传进来的字段
  };
}

// 内部添加闭包 保护i变量
var list_li = document.getElementsByTagName("li");
for (let i = 0; i < list_li.length; i++) {
    (function(){
        list_li[i].onclick = function () {
          console.log(i);//打印0，1，2，3，4，5  let关键字块级作用域，保护内部变量不受外部污染，因此for循环的时候每一次循环都是一个块级作用域，保护了传进来的字段
        };
    })(i)
}



// 考查的是按值传递和按址传递；
function test(m) {
  m.v = 40;//如果加上这一局就不一样了，此时修改的同一地址的对象，所以下面打印的时候可以打印出m.v=40
  m = { v: 5 };
}
var m = { k: 30 };

test(m); //实际就是此时的函数的参数的m就是一个外部定义的m的赋值，只复制了指向同一地址（对象）的指针，但是函数体内部，重新对新的指针进行了新对象的赋值，导致新的指针指向了另外一个地址。因此外部m的没有变化；因为这两个m在堆内存中指向的就是两个地址。
console.log(m.v, m.k);

// 考察版本的执行情况不一样
function test() {
  console.log(1);
}
(function () {
  if (false) {
    function test() {
      console.log(2);
    }
  }
  test();//括号内执行了就输出2 不执行就报错
})();



// 利用es6、es7,来优化异步多层嵌套；（promise，或者 async await）
function asyncTest() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve();
    } else {
      reject("error");
    }
  });
}
// 异步多步嵌套，这样可以解决回调地狱的问题。
asyncTest().then(res=>{
    return res
}).then(res=>{
    console.log(res)
}).catch(error=>{
    console.log(error)
})


// 写出ES6de继承

class parent {
    constructor(props){
        this.color = props.color;
        this.price = props.price;
    }
    sale(){
        console.log(this.color,this.price)
    }
}

class child extends parent{
    constructor(props,age){
        super(props)
        this.age = age
    }
    childsale(){
        console.log(this)
    }
}

let p = new child({color:'red',price:14000},20)
console.log(p);
p.sale();
p.childsale()



// 在设置了g修饰符之后，每次执行都会设置lastIndex，从而影响下一次匹配的结果;想要解决的话只需要把g修饰符去掉即可。
var regex = /yadong/g;
console.log(regex.test('yadong'));
console.log(regex.test('yadong'));
console.log(regex.test('yadong'));
console.log(regex.test('yadong'));

// 这一题没有整明白，具名函数被赋值同名变量之后是不能被修改的
var test;
test = function test() {
  test = 1;//这一步并没有实际的作用
  console.log(typeof test);
};
test();

//很有意思的议题，作用域的问题和变量提升的问题；
var a = 1;
function b() {
  a = 10;
  return; //return 之后虽然不执行，但是会发生变量提升；
  function a() {
    console.log(a);
  }
}
b();
console.log(a);

// 被解析成如此：
var a;
function b() {
  function a() {
    console.log(a);
  }
  a = 10;//在这个函数作用域内有一个和a同名的函数，因此赋值的时候根据函数作用域，开始查找最近的a找到了函数体，就直接赋给了函数，并没有影响外部全局的a的值，所以下面最后打印1
console.log(a)// a重新赋值打印10
  return;
}
a = 1;
b();
console.log(a);//1

// this指向问题
var length = 10;
function fn() {
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function (fn) {
    fn();//把fn函数传进去内部执行go函数，但是此时fn函数没有执行的宿主环境，this.length就指向window全局 10
    console.log(arguments)
    arguments[0]();//arguments是指传入参数的类数组对象，arguments[0]就是传入的第一个实参函数fn，执行之后arguments本身具有length属性，传入实参的个数，所以为2
  },
};
yideng.method(fn, 1);

/**
 *
 * 操作题
 */

// 1.手写一个new操作符
let _new = function(){
    let obj = {}
    // 获取类数组第一个参数，也就是构造函数 [].slice.call(arguments):把类数组对象转换成数组对象
    let func = [].shift.call(arguments);
    obj.__proto__ = func.prototype;//新的对象要继承构造函数的原型。确保new出来的a2是构造函数的实例。
    let res = func.apply(obj,arguments); //这句是改变func的this指向到obj并且执行func这个函数，用来判断构造函数是否本身具有返回值。
    return res instanceof Object ? res : obj
};
function A(name){
    console.log(name)
}
console.log(_new(A,'A'));

function A(name){
    this.name = name
    this.speak = function(){
        console.log(this.name)
    }
}
var p =_new(A,'我是好人'); //此处传入的A函数不能是一个箭头函数，因为箭头函数不能作为构造函数,箭头函数没有自己的this，new的内部需要绑定this到新的对象上，来获取传入的参数；
console.log(p)
p.speak();

// 2.手写一个JSON.stringify和JSON.parse

// 3.手写一个call或 apply
// 三者均可改变this的指向问题，call apply 在修改this指向之后，直接执行函数并返回结果，bind绑定提升之后并不执行函数，而是返回函数体，
/**
 * call() //this谁调用就指向谁
 * params: 绑定函数 
 * params:其他参数，arg1,arg2....
 */
Function.prototype.myCall = function (context) {
  if (!context) return window;
  let arg = [...arguments].slice(1); //从类数组里面获取除了传入函数之外的参数。
  context.fn = this; //用来获取调用call的这个函数的this；此时指向这个函数本身；赋值给传入对象的fn上（自定义）
  let result = context.fn(...arg); //此时调用者就变成了context this就指向context这个对象；
  delete context.fn;
  return result;
};
/**
 * apply() //this谁调用就指向谁
 * params: 绑定函数
 * params:其他参数，[arg1,arg2,.....]
 */
Function.prototype.myApply = function (context) {
  if (!context) return window;
  let arg = [...arguments].slice(1); //从类数组里面获取除了传入函数之外的参数。
  context.fn = this; //用来获取调用apply的这个函数的this；此时指向这个函数本身；赋值给传入对象的fn上（自定义）
  let result = arg ? context.fn(...arg) : context.fn(); //此时调用者就变成了context this就指向context这个对象；
  delete context.fn;
  return result;
};

// 4.手写一个Function.bind
/**
 * bind() //this谁调用就指向谁
 * params: 绑定函数
 * params:其他参数，arg1,arg2,.....
 * 可以用来改变this的指向问题；另外也可以作为构造函数使用，但是此时就不能用来改变this的指向了。
 */

Function.prototype.bind = function myBind(context){
    let that = this
    const args = Array.prototype.slice.call(arguments,1);
    const fn = function(){};
    const result = function(){
        return that.apply(this instanceof fn ? this:context,args.concat(Array.prototype.slice.call(arguments)))
    }
    fn.prototype = that.prototype;
    result.prototype = new fn()
    return result;
}
function test(name,age){
    console.log(this,name,age)
}
let obj = {
    name:'test',
}

let ptest = test.bind(obj,'haoren')
ptest(18);//obj haoren 18
new ptest(27);//result  haoren 27

// 5.手写防抖(Debouncing)和节流(Throttling)
// 一段时间内执行一次，若在时间内再次出发则重新计算时间。
const Debouncing = function (fn, ms) {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    // 获取this和argument
    var _this = this;
    var _arguments = arguments;
    timeout = setTimeout(function () {
      fn.apply(_this, _arguments);
    }, ms);
  };
};
// 一段时间内执行一次，多次触发也只执行一次。
const Throttling = function (fn, ms) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            fn.apply(context, args);
            previous = now;
        }
    }
};
// 6.手写一个JS深拷⻉(由浅入深多种解法)

// 7.手写一个instanceOf原理

// 8.手写一个map和reduce

// // 9.手写实现拖拽
let lis = document.getElementById("test");
// x为鼠标点击落下时的坐标x、y为鼠标点击落下时的坐标y、offx当前元素相对于定位父元素左侧的距离、offy当前元素相对于定位父元素顶部的距离
let x, y, offx, offy, flag;
lis.addEventListener(
  "mousedown",
  (e) => {
    x = e.clientX || e.pageX;
    y = e.clientY || e.pageY;
    offx = lis.offsetLeft;
    offy = lis.offsetTop;
    flag = true;
  },
  false
);

document.addEventListener("mousemove", (e) => {
  if (!flag) return;
  lis.style.left = (e.clientX || e.pageX) - x + offx + "px";
  lis.style.top = (e.clientY || e.pageY) - y + offy + "px";
});
lis.addEventListener(
  "mouseup",
  () => {
    flag = false;
  },
  false
);

// 10.使用setTimeout模拟setInterval
let timer= null;
function setTImeout(fn,ms){
    timer = setTimeout(()=>{
        fn()
        clearTimeout(timer);
        setTImeout(fn,ms)
    },ms)
}
setTImeout(()=>{
    console.log(1111)
},1000)

// 11.手写实现Object.create的基本原理（浅拷贝）

if(!Object.create){
    Object.create = function(obj){
        let F = function(){}
        F.prototype = obj;
        return new F()
    }
}
```
