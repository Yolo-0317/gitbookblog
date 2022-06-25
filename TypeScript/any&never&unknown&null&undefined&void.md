# any&never&unknown&null&undefined&void

## TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？

- any：动态的变量类型（失去了类型检查的作用）
- never：永不存在的值的类型。当一个函数永不返回时（或者总是抛出错误），它的返回值为 never 类型；除了 never 本身以外，其他任何类型不能赋值给 never
- unknown：任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。使用类型断言缩小unknown 范围；
- null & undefined：默认情况下 null 和 undefined 是所有类型的子类型。就是说你可以把 null 和 undefined 赋值给 number 类型的变量；当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
- void：表示没有任何类型；void 类型可以被赋值（在 strictNullChecking 为 false 时）; 例如：一个函数如果没有返回值，那么返回值可以定义为void。

## TypeScript 中 any 类型的作用是什么

为编程阶段还不清楚类型的变量指定一个类型。  
这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。  
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。

## any和unknown的区别

- 任何东西可以赋值给 any；
- 只能将 unknown 类型的变量赋值给 any 和 unknown
