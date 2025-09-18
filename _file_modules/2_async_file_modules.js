const { readFile, writeFile } = require("fs");

readFile("./_modules/Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./_modules/Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const second = result;
      writeFile(
        "./_modules/Content/result-async.txt",
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(result);
        }
      );
    }
  });
});
