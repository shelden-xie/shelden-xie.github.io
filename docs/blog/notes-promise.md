# promise的基本使用理解

## 一、为什么使用Promise

身为一个前端可能处理异步请求的时候会很苦恼，在第一个成功回调函数里面去写下一个回调函数，然后你就发现你就这样越写越长、越走越远，最后就会形成回调地狱。如果需要回调的函数少的话，还行。但是多的时候那是真的很恶心。下面的例子你想象一下很多的时候会写成什么样？（我去太可怕不能想）。  
```javascript
(function Ajax() {
    $.ajax({
        url: 'XXX',
        method: 'get'
        success: function(res) {
            first(res, function(res) {
                second(res, function(res) {
                    // 一直走下去
                });
            });
        }
    }
})()
```
这个时候呢!，我们的主角就该登场了（撒花），**Promise**的出现很好地解决了这一问题。(ES6里面发布的promise，后面ES7出现 **async/await** 书写更加简便 )，本文就来简单介绍Promise

## 二、Promise的基本介绍  

#### 创建Promise  
Promise 是一个代理对象，它可以对你的异步操作进行一些处理，达到同步的返回，但是它的结果并不是一个值，而是一种代表结果的新的promise对象。
```javascript
const FirstP = new Promise((resolve, reject) => {
  // ?做一些异步操作，最终会调用下面两者之一:
  //   resolve(success); // fulfilled 
  // ?或
  //   reject(failure); // rejected
}).then(res=>{
// 成功回调 获取resolve的输出值
},err=>{
//错误回调 获取reject抛出的异常值
}).catch(err=>{
//错误回调
});
```
从上面可以看出Promise接受带有 resolve 和 reject 两个参数的函数 ，Promise一旦执行就会调用这个函数。  

一个 Promise有以下几种状态:  
* pending: 初始状态，既不是成功，也不是失败状态。
* fulfilled: 意味着操作成功完成。
* rejected: 意味着操作失败。  

pending 状态的 Promise 对象可能会变为fulfilled 状态并传递一个值给相应的状态处理方法，也可能变为失败状态（rejected）并传递失败信息。当其中任一种情况出现时，Promise 对象的 then 方法包含两个回调函数（handlers）: 
* onfulfilled，当promise状态为fulfilled时，调用这个函数；
* onrejected，当promise状态为rejected时，调用这个函数；  

![引用自MDN](https://user-gold-cdn.xitu.io/2020/4/30/171cbbc1f2a3a8e1?w=801&h=297&f=png&s=21307)  
（当然，then里的参数是可选的，比如上面代码中catch(failureCallback) 是 then(null, failureCallback) 的缩略形式。）。注意几点：  
1. reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch（但是then的第一个函数出错了，后面的catch可以捕获，写到then的第二个函数则捕获不到，并且catch可以捕获网络异常的错误，then的第二个回调处理不了），所以一般写的时候都选择链式调用catch方法来处理异常；
2. resolve的东西，一定会进入then的第一个回调，肯定不会进入catch；
3. throw new Error('错误') 和 rejected 两者一样，只会触发一个。;
4. promise内部状态一旦发生改变，内部就会保护这个状态，不会改变。无论你在后面再添加多少会回调函数得到的都是这个状态的结果。  
5. 如果在执行过程中并没有进行做一些reject错误处理的时候。全局就会触发"unhandledrejection"事件。我们可以利用此时间做一个兜底的错误处理。
 ```javascript
    window.addEventListener("unhandledrejection", event => {
      /* 你可以在这里添加一些代码，以便检查
         event.promise 中的 promise 和
         event.reason 中的 rejection 原因 */
    }, false);
```
6. 在进行promise.then链式调用时：   
第一、避免不必要的then的嵌套；  
第二、一定要接收到前一步返回的promise才可以继续进行链式调用，否则的话就会打破链条，或者更确切地说，我们有两个独立的链条竞争（同时在执行两个异步而非一个一个的执行），这意味着 doFourthThing() 不会等待 doSomethingElse() 或 doThirdThing() 完成，并且将与它们并行运行  。

    *错误*：
    ```javascript
        doSomething().then(function(result) {
          doSomethingElse(result) // 没有返回 Promise 以及没有必要的嵌套 Promise
          .then(newResult => doThirdThing(newResult));
        }).then(() => doFourthThing())
        .catch(error => console.log(error));;
    ```  
    *正确*：
    ```javascript
        doSomething()
        .then(function(result) {
          return doSomethingElse(result);
        })
        .then(newResult => doThirdThing(newResult))
        .then(() => doFourthThing());
        .catch(error => console.log(error));
    ```
相信你在了解到这的时候，应该就能明白promise在处理回调地狱的时候的过人之处了吧。

## 三、Promise的常用方法 

**1.Promise.all(iterable)**  

方法返回一个 Promise 实例，iterable一般为一个数组对象，数组内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 promise 的结果。(大家好才是真的好，一个不好都不好)

```javascript
    // 如果传入进去的有一个不含有promise的值，这些值将被忽略，但仍然会被放在返回数组中。
    var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
    
    // 如果传入进去的有一个reject抛出的异常处理，这个Promise实例就会失败，并且返回出现错误的第一个错误信息
    var p3 = Promise.all([1,2,3, Promise.reject(555)]);
    
    //加一个setTimeout保证主执行栈为空时再执行这段代码，否则的话输出的就是promise的pending的状态值。
    setTimeout(function(){
        console.log(p2);
        console.log(p3);
    });
    
    // Promise { <state>: "fulfilled", <value>: [1,2,3,4] }
    // Promise { <state>: "rejected", <reason>: 555 }
```  
  
**2.Promise.race(iterable)**  

方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

```javascript
    var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, "one"); 
    });
    var p2 = new Promise(function(resolve, reject) { 
        setTimeout(resolve, 100, "two"); 
    });
    
    Promise.race([p1, p2]).then(function(value) {
      console.log(value); // "two"
      // 两个都完成，但 p2 更快
    });
```
以上这种情况基本用法，不管传进去的是resolve,还是reject。谁先执行谁就先被返回。如果是resolve就直接被then捕获输出，如果是reject，则会被catch捕获。或者then的第二个onrejected()回调捕获。

**3.Promise.any** 

接收一个Promise可迭代对象，只要其中的一个 promise 完成，就返回那个已经有完成值的 promise 。如果可迭代对象中没有一个 promise 完成（即所有的 promises 都失败/拒绝），就返回一个拒绝的 promise，返回值还有待商榷：无非是拒绝原因数组或AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。（处于试验（兼容）阶段，不推荐使用）。

**4.Promise.allSettled**


用法跟Promise.all一样，也是传入一个promise数组，但是 .then的回调函数的 参数不一样 promise.all返回的是一个数组，里面每个项都是按照你传入的promise的先后顺序执行的结果，Promise.allSettled返回的则是一个对象数组
这个对象数组每一个item，都有两个属性，一个status 值为 "fulfilled" 或者 "rejected" ,另一个value才是你要的执行结果，所以这里我们还得判断一下这个status是否为fulfilled,再去改成我们想要的数据结构。

```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];
    
    Promise.allSettled(promises).
      then(results => results.forEach(result => console.log(result)));
    
    // expected output:
    // {status: "fulfilled", value: 3}
    //{status: "rejected", reason: "foo"}
```
这个方法相比promise.all()的好处就是:不管数组里面每一个promise或者非promise 已经完成，无论是成功的达成或通过被拒绝，它的状态都会被统一输入进一个对象数组里面。

**适用场景：** 比如在并发的处理多个请求时，不想因为某一个请求出现错误而导致其他请求无法返回时，从而导致其他请求全部挂掉。


**4.Promise.prototype.finally()**

此方法是原型链上定义的方法（当然还有then、catch这两种方法，就不做介绍了），次方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。这避免了同样的语句需要在then()和catch()中各写一次的情况。

```javascript
let dialog= false
const FirstP = new Promise((resolve, reject) => {
    dialog = true
}).then(res=>{
    //dialog = false
// 成功回调 获取resolve的输出值
}).catch(err=>{
    //dialog = false
//错误回调
}).finally(()=>{
    //此处无论promise成功失败都会执行，所以就不用在多个地方去设置dialog，只需在此处设置即可
    dialog = false
});
```

## 四、Promise的缺点
1、promise一旦执行无法取消。  
2、如果不设置回调函数（catch或者then里面的onRejected函数）promise内部抛出的错误，不会反映到外部（粗心大意没写，但是可以通过hack处理）。  
3、当处于pending（进行中）的状态时，无法得知进行到那一阶段（刚开始或者即将完成）。比如你在请求某个接口超时时，你可能不知道接口是不是请求已经超时。  
4、then方法每一次调用的时候都会产生一个新的promise对象，容易造成内存浪费（不过一般相对来说不会考虑这一点）。

## 五、个人总结

本文promise的总结，都是平常的开发使用promise过程参考的一些资料，今天闲下来的时候，加上自己的理解给简单总结一下。其实promise还有很多的的东西。以后再学习的过程中，还会继续总结出来，后面我会把我上面的方法api都自己简单实现以下总结出来。有什么不好的地方希望老铁给指出来。谢谢！