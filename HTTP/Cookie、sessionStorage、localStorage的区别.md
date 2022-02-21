#### Cookie、sessionStorage、localStorage 的区别

##### 相同点：
存储在客户端

##### 不同点
* cookie数据大小不能超过4k；sessionStorage和localStorage的存储比cookie大得多，可以达到5M+
* cookie设置的过期时间之前一直有效；localStorage永久存储，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage数据在当前浏览器窗口关闭后自动删除
* cookie的数据会自动的传递到服务器；sessionStorage和localStorage数据保存在本地

