const camelizeRE = /-(\w)/g

// 把烤肉串命名方式转换成驼峰命名方式
const fun1 = (str: string) : string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

const fun2 = ():void => {
  console.log('fun2')
}

export default {
  version: '1.0.0',
  fun1,
  fun2
}
