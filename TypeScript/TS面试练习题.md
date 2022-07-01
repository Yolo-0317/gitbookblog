# TS 面试题

```ts
  type Test<T> = T extends number ? 1 : 2;

  1. type res = Test<1 | 'a'>;
  2. type res = Test<boolean>;
  3. type res = Test<any>;
  4. type res = Test<never>;

  问，1,2,3,4输出的结果分别是什么？
```
