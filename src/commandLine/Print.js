import { colors } from "../contanst.js";
import PrintUtil from "./PrintUtil.js";
import Format from "./Format.js";

export default class Print {
  constructor(topics) {
    this.topics = topics;
  }

  titles() {
    Object.keys(this.topics)
      .map((it) => this.topics[it].title)
      .forEach((title, ix) => {
        const index = `${ix}`.padStart(3, " ");
        PrintUtil.format(
          `${colors.grey}${index}${colors.reset}  ${Format.grey(title)}`
        );
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
}
