const convert = require('./convert')

test('convert cotação 5 e quantidade 20000', () => {
    expect(convert.convert(5,2000)).toBe(10000)
})
test('convert cotação 0 e quantidade 20000', () => {
    expect(convert.convert(0,2000)).toBe(0)
})
test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})