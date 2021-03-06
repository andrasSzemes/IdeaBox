import { colors, terminalWidth } from "../contanst.js";
import Format from "./Format.js";

export default class PrintUtil {
  static header(text) {
    console.log("-".repeat(terminalWidth));
    this.bold(text.replace("\n", "").replace(/[*]/g, ""));
    console.log("-".repeat(terminalWidth));
  }

  static format(text, padding = 0) {
    const boldedText = Format.bold(text);
    const codeText = Format.code(boldedText);
    const dotText = Format.dot(codeText);
    const yellowText = Format.yellow(dotText)

    const lines = yellowText.split("\n");
    for (const line of lines) {
      console.log(" ".repeat(padding) + line);
    }
  }

  static bold(text) {
    console.log(`${colors.bold}${text}${colors.reset}`);
  }

  static error(text) {
    console.log(`${colors.red}${text}${colors.reset}`);
  }

  static clear() {
    console.log(colors.reset, '\u001b[3J\u001b[1J');
    console.clear();
  }
}
