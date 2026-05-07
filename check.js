const fs = require("node:fs");
const ENV_SUMMARY = process.env.GITHUB_STEP_SUMMARY;
const lines = [];

function printSummary() {
  if (ENV_SUMMARY !== null) {
    fs.writeFileSync(ENV_SUMMARY, lines.join("\n"));
  }
}

console.log("Hello from default output");
lines.push("# Hello from summary");

printSummary();
