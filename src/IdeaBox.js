import readline from "readline";
import topics from "./topics/topics.js";
import Print from "./commandLine/Print.js";
import PrintUtil from "./commandLine/PrintUtil.js";
import StateHandler from "./StateHandler.js";

/*
  BOLD: **make-it-bold***
  GREY: |G|make-it-grey||G||
*/

/*
Making the connections between related topics requires a bit more work than it should be.
It would be great if the structure created with spaces in the titles would mimic this.
Therefore the related key would be populated depending on the indentation level.

Connections that can not be made with indentation could still be named in the related key's list.
*/

function findTopicKey(input) {
  let i = 0;
  for (const key of Object.keys(topics)) {
    if (topics[key].title === input || `${i}` === input) {
      return key;
    }
    i++;
  }
}

class Frames {
  constructor(print, rl, topics, stateHandler) {
    this.print = print;
    this.rl = rl;
    this.stateHandler = stateHandler;

    // *'s have to be removed... any not number or a-z can be removed perhaps
    this.topicTitles = Object.keys(topics).map((it) => topics[it].title);
  }

  init() {
    PrintUtil.clear();

    const state = this.stateHandler.getState();

    if (state.input) {
      this.print.topic(state.input);
    } else {
      this.print.titles();
    }

    // handle current terminal width?
    this.input();
  }

  input() {
    rl.question(">>> ", (input) => {
      PrintUtil.clear();

      switch (input) {
        case "quit":
          this.exit();
          break;

        case "":
          this.init();
          this.stateHandler.setState({ input: null });
          break;

        default:
          // topic choosen
          if (
            this.topicTitles.includes(input) ||
            !Number.isNaN(Number(input))
          ) {
            const topicKey = findTopicKey(input);
            this.print.topic(topicKey);
            this.stateHandler.setState({ input: topicKey });
          }

          // structure level adjusting
          if (/^lvl[0-9]*/.test(input)) {
            const result = /^lvl([0-9]*)/.exec(input);
            const level = result[1];
            this.print.setLevel(level);
          }
      }

      this.input();
    });
  }

  exit() {
    process.exit();
  }
}

const rl = readline.createInterface({ input: process.stdin, output: null });

const print = new Print(topics);
const frames = new Frames(print, rl, topics, StateHandler);
frames.init();
// 1, concrete title 2, search with keyword if no exact match 'Do you mean one of these: ...'

// have a state, in a separate text file, what number was last checked. Its needed for modifying the text, and spare
//    time to get back to the previous page
