# a标签的LVHA

a 标签有四种状态:链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active;

- 当鼠标滑过 a 链接时，满足:link 和:hover 两种状态，要改变 a 标签的颜色，就必须将:hover 伪类在:link 伪类后面声明;

- 当鼠标点击激活 a 链接时，同时满足:link、:hover、:active 三种状态，要显示 a 标签激活时的样式(:active)，必须将:active 声明放到:link 和:hover 之后

> 当链接访问过时，情况基本同上，只不过需要将:link 换成:visited。
