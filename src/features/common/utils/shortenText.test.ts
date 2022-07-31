import { shortenText } from './shortenText'

describe('shortenText', () => {
  test('Should return string of 33 chars with 3 dots at the end When given string has 100 chars', async () => {
    const testString =
      'ajksjfhdksjfhsdkhjfsdfskdjfshdfksdhfjhsjdkfhjshdjkfhsdhkjfhjsdkfhjhsjkdfhjkjhsddfhsdkhjfhjksdhjshfhskdjfjhskjhfalsjdhaskjdfsdhfj'

    const receivedString = shortenText(30)(testString)

    const expectedString = 'ajksjfhdksjfhsdkhjfsdfskdjfshd...'

    expect(receivedString).toBe(expectedString)
  })

  test('Should return string of 33 chars with 3 dots at the end When given string of 100 chars has spaces at indexes 30-34', async () => {
    const testString =
      'ajksjfhdksjfhsdkhjfsdfskdjfshd     fjhsjdkfhjshdjkfhsdhkjfhjsdkfhjhsjkdfhjkjhsddfhsdkhjfhjksdhjshfhskdjfjhskjhfalsjdhaskjdfsdhfj'

    const receivedString = shortenText(35)(testString)

    const expectedString = 'ajksjfhdksjfhsdkhjfsdfskdjfshd...'

    expect(receivedString).toBe(expectedString)
  })

  test('Should return string without dots When length of string is less than max characters parameter', async () => {
    const testString = 'fjhsj'

    const receivedString = shortenText(6)(testString)

    expect(receivedString).toBe(testString)
  })
  test('Should return empty string When given string is empty', async () => {
    const testString = ''

    const receivedString = shortenText(16)(testString)

    expect(receivedString).toBe(testString)
  })
  test('Should return string without dots When given string has a length equal to max characters parameter', async () => {
    const testString = 'asdfg'

    const receivedString = shortenText(testString.length)(testString)

    expect(receivedString).toBe(testString)
  })
})
