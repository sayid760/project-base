import { camelize } from '..'

describe('test dessert feature', () => {
  test('测试camelize函数', () => {
    expect(camelize('sdsa-wew')).toBe('sdsaWew')
  })
})
