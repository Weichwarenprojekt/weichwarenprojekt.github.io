/**
 * Deploy to Github Pages like a pro with Github Actions
 * https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg
 */
const execa = require("execa");
const fs = require("fs");

(async () => {
    try {
        await execa("git", ["checkout", "--orphan", "gh-pages"]);
        console.log("Building...");
        await execa("npm", ["run", "build"]);
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa("echo", ["weichwarenprojekt.de", ">", `${folderName}/CNAME`]);
        await execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        await execa("rm", ["-r", folderName]);
        await execa("git", ["checkout", "-f", "main"]);
        await execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed");
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();
