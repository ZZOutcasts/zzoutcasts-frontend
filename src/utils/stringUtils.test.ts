import { shortenText } from './stringUtils'

describe('shortenText', () => {
  test('Should return string of 33 chars with 3 dots at the end When given string has more than 30 chars', async () => {
    const testString =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'

    const receivedString = shortenText(30, testString)

    const expectedString = 'Lorem ipsum dolor sit amet, co...'

    expect(receivedString).toBe(expectedString)
  })

  test('Should remove only unwanted chars that at the end of sliced string When given string of 100 chars has unwanted chars on the final 4 indexes after slicing', async () => {
    const testString =
      'Lorem ipsum dolor sit amet ess     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr'

    const receivedString = shortenText(35, testString)

    const expectedString = 'Lorem ipsum dolor sit amet ess...'

    expect(receivedString).toBe(expectedString)
  })

  test('Should return string without dots When length of string is less than max characters parameter', async () => {
    const testString = 'Lorem'

    const receivedString = shortenText(6, testString)

    expect(receivedString).toBe(testString)
  })
  test('Should return empty string When given string is empty', async () => {
    const testString = ''

    const receivedString = shortenText(16, testString)

    expect(receivedString).toBe(testString)
  })
  test('Should return string without dots When given string has a length equal to max characters parameter', async () => {
    const testString = 'Lorem'

    const receivedString = shortenText(testString.length, testString)

    expect(receivedString).toBe(testString)
  })
})
