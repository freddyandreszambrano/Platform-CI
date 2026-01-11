const { execSync } = require("child_process");
const fs = require("fs");

const version = fs.readFileSync("VERSION", "utf8").trim();

execSync(`git tag -a v${version} -m "Release v${version}"`, { stdio: "inherit" });
execSync(`git push origin v${version}`, { stdio: "inherit" });

console.log(`🏷️ Tag v${version} created`);
