export const removeUnwantedEndCharacters = (str: string) => {
  const allowedEndCharacters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const strArray = str.split('')

  while (
    !allowedEndCharacters.includes(strArray[strArray.length - 1]) &&
    strArray.length > 0
  ) {
    strArray.pop()
  }

  return strArray.join('')
}

export const shortenText = (maxCharacters: number, str: string) => {
  const newStr = removeUnwantedEndCharacters(str.slice(0, maxCharacters))

  if (newStr.length > 0 && str.length > maxCharacters) {
    return `${newStr}...`
  }
  return newStr
}
