import { colors } from "../contanst.js";
import PrintUtil from "./PrintUtil.js";
import Format from "./Format.js";

export default class Print {
  constructor(topics) {
    this.topics = topics;
    this.level = null;
    this.indentation = 2;
  }

  titles() {
    Object.keys(this.topics).forEach((topicKey, ix) => {
      const title = this.topics[topicKey].title;
      const index = colors.grey + `${ix}`.padStart(3, " ") + colors.reset;

      // filter based on indentation level
      const paddingLeft = /^([ ]*)/.exec(title)[0];
      const indentationLevel = paddingLeft.length / this.indentation;
      if (indentationLevel <= this.level || this.level === null)
        PrintUtil.format(`${index}  ${Format.grey(title)}`);
    });
  }

  topic(topicKey) {
    const topic = this.topics[topicKey];

    PrintUtil.header(topic.title);
    PrintUtil.format(topic.text);

    for (const relatedKey of topic.related) {
      PrintUtil.bold("\n" + this.topics[relatedKey].title);
      PrintUtil.format(this.topics[relatedKey].text, 3);
    }
  }

  setLevel(level) {
    this.level = level === "" ? null : level;

    const levelMessage = `Structure level has been set to ${level}.`;
    const resetMessage = "Structure level filter is removed!";
    console.log(level === "" ? resetMessage : levelMessage);
  }
}
