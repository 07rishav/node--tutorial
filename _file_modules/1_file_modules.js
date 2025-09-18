const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./_modules/Content/first.txt", "utf-8");
const seconds = readFileSync("./_modules/Content/second.txt", "utf8");

writeFileSync(
  "./_modules/Content/result-sync.txt",
  `here is the result : ${first}, ${seconds}`,
  { flag: "a" }
);
