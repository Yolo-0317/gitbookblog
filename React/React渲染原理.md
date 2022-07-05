# React渲染原理

## React 避免不必要的渲染

- shouldComponentUpdate

通过shouldComponentUpdate生命周期函数来比对 state和 props，确定是否要重新渲染，
默认情况下返回true表示重新渲染，如果不希望组件重新渲染，返回 false 即可

- PureComponent
跟shouldComponentUpdate原理基本一致，通过对 props 和 state的浅比较结果来实现 shouldComponentUpdate

- React.memo

function React.memo<object>(Component: React.FunctionComponent<object>, propsAreEqual?: ((prevProps: Readonly<React.PropsWithChildren<object>>, nextProps: Readonly<React.PropsWithChildren<object>>) => boolean) | undefined)
