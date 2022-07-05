# ReactJSX转为DOM过程

- 将JSX代码通过babel转换成React.createElement函数处理
- createElement函数对key和ref等特殊props进行处理，对传入的子节点进行处理，得到一个虚拟DOM
- ReactDom.render将得到的虚拟DOM渲染到指定容器，最终转换为真实DOM