import { colors, terminalWidth } from "../contanst.js";

export default class Format {
  static bold(text) {
    return text
      .replace(/[*]{3}/g, colors.reset)
      .replace(/[*]{2}/g, colors.bold);
  }

  static dot(text) {
    return text.replace(/[<][>]/g, '\x1b[2m●\x1b[0m');
  }

  static grey(text) {
    return text
      .replace(/[|]{2}G[|]{2}/g, colors.reset)
      .replace(/[|]G[|]/g, colors.grey);
  }

  static yellow(text) {
    return text
      .replace(/[|]{2}Y[|]{2}/g, colors.reset)
      .replace(/[|]Y[|]/g, colors.yellow);
  }

  static code(text) {
    let pad = false;
    const paddedText = text.split("\n").map((line) => {
      if (/[']{3,4}/.test(line)) pad = !pad;
      return pad ? line.padEnd(terminalWidth) : line;
    });

    const codeText = paddedText
      .join("\n")
      .replace(/[']{4}/g, colors.reset)
      .replace(/[']{3}[ ]*\n/g, `${colors.code}`);

    return codeText;
  }
}
