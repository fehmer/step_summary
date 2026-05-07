import * as fs from "node:fs";
import * as ghCore from "@actions/core";

const ENV_SUMMARY = process.env.GITHUB_STEP_SUMMARY;
const lines = [];

function printSummary() {
  if (ENV_SUMMARY !== null) {
    ghCore.summary
      .addHeading("Test Results")
      .addTable([
        [
          { data: "", header: true },
          { data: "File", header: true },
          { data: "Result", header: true },
        ],
        ["Pass ✅", "", ""],
        ["Fail ❌", "click15/1.wav", "additional file"],
        ["Fail ❌", "click15/2.wav", "missing file"],
      ])
      .write();
  }
}

console.log("Hello from default output");
lines.push("# Hello from summary");

printSummary();
