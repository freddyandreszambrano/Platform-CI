const fs = require("fs");

const VERSION_FILE = "VERSION";

function readVersion() {
    if (!fs.existsSync(VERSION_FILE)) return "1.0.0";
    return fs.readFileSync(VERSION_FILE, "utf8").trim();
}

function writeVersion(v) {
    fs.writeFileSync(VERSION_FILE, v + "\n");
}

function bump(type) {
    let [major, minor, patch] = readVersion().split(".").map(Number);

    if (type === "patch") patch++;
    if (type === "minor") {
        minor++;
        patch = 0;
    }
    if (type === "major") {
        major++;
        minor = 0;
        patch = 0;
    }

    const next = `${major}.${minor}.${patch}`;
    writeVersion(next);
    console.log("🔖 Version ->", next);
}

const action = process.argv[2];

if (action === "show") console.log("📦 Current version:", readVersion());
if (action === "init") writeVersion("1.0.0");
if (["patch", "minor", "major"].includes(action)) bump(action);
