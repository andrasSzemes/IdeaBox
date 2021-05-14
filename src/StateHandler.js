import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import PrintUtil from "./commandLine/PrintUtil.js";

export default class StateHandler {
  static state = null;
  static __dirname = dirname(fileURLToPath(import.meta.url));
  static filePath = join(StateHandler.__dirname, "./topics/state.txt");

  static getState() {
    if (StateHandler.state === null) {
      const res = StateHandler.read();
      StateHandler.state = res;
      return res;
    }

    return StateHandler.state;
  }

  static setState(newState) {
    const mergedState = { ...this.state, ...newState };

    fs.writeFileSync(StateHandler.filePath, JSON.stringify(mergedState));
    this.state = mergedState;
  }

  static read() {
    try {
      const state = fs.readFileSync(StateHandler.filePath, "utf-8");
      const parsedState = JSON.parse(state);
      return parsedState ? parsedState : {};
    } catch (err) {
      PrintUtil.error("Could not read previous state!\n");
      return {};
    }
  }
}
