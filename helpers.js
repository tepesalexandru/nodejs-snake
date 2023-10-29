const { CTRL_C } = require("./constants");

var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding("utf8");

// on any data into stdin
module.exports = {
  onKeyPress: function (callback) {
    stdin.on("data", function (key) {
      // check if CTLR_C was pressed
      if (key === CTRL_C) {
        process.exit();
      }

      callback(key);
    });
  },
};
