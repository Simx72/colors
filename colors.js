const Color = function () {
  this.Reset = "\x1b[0m",
    this.Bright = "\x1b[1m",
    this.Dim = "\x1b[2m",
    this.Underscore = "\x1b[4m",
    this.Blink = "\x1b[5m",
    this.Reverse = "\x1b[7m",
    this.Hidden = "\x1b[8m",

    this.fg = {
      Black: "\x1b[30m",
      Red: "\x1b[31m",
      Green: "\x1b[32m",
      Yellow: "\x1b[33m",
      Blue: "\x1b[34m",
      Magenta: "\x1b[35m",
      Cyan: "\x1b[36m",
      White: "\x1b[37m"
    },

    this.bg = {
      Black: "\x1b[40m",
      Red: "\x1b[41m",
      Green: "\x1b[42m",
      Yellow: "\x1b[43m",
      Blue: "\x1b[44m",
      Magenta: "\x1b[45m",
      Cyan: "\x1b[46m",
      White: "\x1b[47m"
    }
}

Color.prototype.log = (text, color = this.Reset) => {
  if (typeof text == 'string' && typeof color == 'string') {
    console.log(`${color}%s\x1b[0m`, text);
  } else {
    console.log(`\x1b[31m%s\x1b[0m`, `ERROR! Parameters most be strings`);
  }

}


module.exports = new Color();