#!/usr/bin/env node

module.exports = {
  printChar (printStr, col, char) {
    char = char ? char : '*';
    for (var i=0; i<col; i++) {
      printStr += char;
    }
    return printStr;
  },
  n (printStr) {
    printStr += '\n';
    return printStr;
  },
  getLogo() {
    let printStr = '';
    printStr = this.printChar(printStr, 86, null);
    printStr = this.n(printStr);
    printStr = this.n(printStr);
    printStr += `
      .------.------.------.------.------.------.------.------.------.------.
      |C.--. |E.--. |V.--. |U.--. |E.--. |L.--. |-.--. |C.--. |L.--. |I.--. |
      | :/\: | (\/) | :(): | (\/) | (\/) | :/\: | (\/) | :/\: | :/\: | (\/) |
      | :\/: | :\/: | ()() | :\/: | :\/: | (__) | :\/: | :\/: | (__) | :\/: |
      | '--'C| '--'E| '--'V| '--'U| '--'E| '--'L| '--'-| '--'C| '--'L| '--'I|
      \`------\`------\`------\`------\`------\`------\`------\`------\`------\`------\'
    `
    printStr = this.n(printStr);
    printStr = this.n(printStr);
    printStr = this.printChar(printStr, 86, null);

    return printStr;
  }
};