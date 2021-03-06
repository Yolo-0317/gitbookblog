# HTTP2.0

http 和 https 的区别，相比于 http,https 是基于 ssl 加密的 http 协议

## HTTP1.1问题

1. 线头阻塞：TCP链接上只能发送一个请求，前面的请求未完成之前，后续的请求都在等待
2. 头部冗余，采用的是文本格式
3. 只能客户端主动请求

## HTTP2.0特点

1. 允许多路复用
HTTP2建立一个TCP连接，一个连接上面可以有任意多个流（stream），消息分割成一个或多个帧在流里面传输。帧传输过去以后，再进行重组，形成一个完整的请求或响应
2. 二进制分帧:
HTTP2性能提升的核心就在于二进制分帧层；HTTP2是二进制协议，他采用二进制格式传输数据而不是HTTP1的文本格式。
3. HTTP头部压缩
在HTTP1中，每个请求带的一些头信息字段都是相同的，例如cookies、user-agent，HTTP采用HPACK压缩头部信息，在浏览器和服务器端之间

       - 维护一份相同的静态字典，包含常见的头部名称，以及常见的头部名称和值的组合
       - 维护一份相同的动态字典，可以动态的添加内容
       - 通过静态编码对传输的首部字段进行编码
4. 服务器端推送
服务器端推送使得服务器可以预测客户端需要的资源，主动推送到客户端。
