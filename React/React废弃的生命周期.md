# React废弃的生命周期

被废弃的三个函数都是在render之前执行，因为fiber的出现，可以会因为先处理高优先级的任务打断现有任务导致执行多次

## componentWillMount

使用 componentDidMount 和 constructor 来替代

## componentWillReceiveProps

接触state与props的关联

引入新的生命周期：getDerivedStateFromProps，是静态方法，不能使用this，不能写出带副作用的代码；

## componentWillUpdate

在其中做一些根据props变化触发的一些回调，都可能在一次更新中被调用多次