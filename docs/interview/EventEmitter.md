# 手动实现一个EventEmitter类

> 本文主要是参照vue的相关api的方法来实现$on、$off、$emit、$once这几个方法。  
> 这几个api的实现原理其实就是基于发布订阅这模式。通过把事件存储起来，通过这几个方法来实现事件的存储、发布、监听、删除。

``` JS
// 创建一个EventEmiter类，内部维护一个events的对象用来存储传入的事件
class EventEmiter {
  constructor() {
    this.events = {}
  }
  //on
  on() {
    // js
  }
  // emit
  emit() {
    // js
  }
  // once
  once() {
    // js
  }
  // off
  off() {
    // js
  }
}
```

## $on

## $emit

## $once

## $off
