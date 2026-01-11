const {execSync} = require("child_process");
const fs = require("fs");

const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
if (branch !== "develop") {
    console.error("❌ Dev releases only allowed from develop");
    process.exit(1);
}

let [major, minor, patch] = fs.readFileSync("VERSION", "utf8").trim().split(".");
patch = Number(patch) + 1;

const devVersion = `${major}.${minor}.${patch}-dev.1`;
fs.writeFileSync("VERSION", devVersion);

execSync("git add VERSION", {stdio: "inherit"});
execSync(`git commit -m "chore(release): ${devVersion}"`, {stdio: "inherit"});
execSync(`git tag -a v${devVersion} -m "Staging release v${devVersion}"`, {stdio: "inherit"});
execSync("git push origin develop --tags", {stdio: "inherit"});

console.log("🚧 Dev release completed:", devVersion);
