const {execSync} = require("child_process");

const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
if (branch !== "main") {
    console.error("❌ Releases only allowed from main");
    process.exit(1);
}

execSync("npm run version:patch", {stdio: "inherit"});
execSync("git add VERSION", {stdio: "inherit"});
execSync(`git commit -m "chore(release): bump version"`, {stdio: "inherit"});
execSync("npm run tag", {stdio: "inherit"});

console.log("🚀 Release completed");
