const allowedEndCharacters =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const shortenText = (maxCharacters: number) => (str: string) => {
  const strArray = str.slice(0, maxCharacters).split('')

  while (
    !allowedEndCharacters.includes(strArray[strArray.length - 1]) &&
    strArray.length > 0
  ) {
    strArray.pop()
  }

  return (
    strArray.join('') +
    (strArray.length > 0 && str.length > maxCharacters ? '...' : '')
  )
}
