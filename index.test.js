const { functionA } = require('./index')

test('functionA', () => {
  expect(functionA(4)).toBe(7)
})
