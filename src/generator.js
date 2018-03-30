
const generate = (colors) => {
  const data = {
    BackgroundColour: colors.gray1,
    ForegroundColour: colors.gray5,
    CursorColour: colors.cyan,
    Black: colors.black,
    BoldBlack: colors.black,
    Red: colors.red,
    BoldRed: colors.red,
    Green: colors.green,
    BoldGreen: colors.green,
    Yellow: colors.yellow,
    BoldYellow: colors.yellow,
    Blue: colors.blue,
    BoldBlue: colors.blue,
    Magenta: colors.magenta,
    BoldMagenta: colors.magenta,
    Cyan: colors.cyan,
    BoldCyan: colors.cyan,
    White: colors.white,
    BoldWhite: colors.white,
  }

  const max = Object.keys(data).map(_ => _.length).reduce((max, l) =>
    max > l ? max : l
  , 0)
  const spaces = Array(max).fill(' ').join('')
      
  return Object.keys(data).reduce((result, key) => {
    const color = data[key]
    return result + 
      (key + spaces.substr(0, max - key.length) + " = " + color + '\n')
  }, "")
}

module.exports = generate
// export default generate

