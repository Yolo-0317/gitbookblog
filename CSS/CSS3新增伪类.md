# CSS3新增伪类

- elem:nth-child(n): 选中父元素下的第 n 个子元素，并且这个子元素的标签名为 elem，n 可以接受具体的数值，也可以接受函数。
- elem:nth-last-child(n)：作用同上，不过是从后开始查找
- elem:last-child：选中最后一个子元素
- elem:only-child 如果 elem 是父元素下唯一的子元素，则选中

- elem:nth-of-type(n)：选中父元素下第 n 个 elem 类型元素，n 可以接受具体的数值，也可以接受函数
- elem:first-of-type：选中父元素下第一个 elem 类型元素
- elem:last-of-type：选中父元素下最后一个 elem 类型元素
- elem:only-of-type： 如果父元素下的子元素只有一个 elem 类型元素，则选中该元素

- elem:empty：选中不包含子元素和内容的 elem 类型元素
- elem:target：选择当前活动的 elem 元素
- :not(elem)：选择非 elem 元素的每个元素

- :enabled：控制表单控件的启用状态
- :disabled：控制表单控件的禁用状态
- :checked：单选框或复选框被选中
