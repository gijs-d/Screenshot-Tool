const readline = require('readline');
const Bowser = require('./lib/bowser');
const bowser = new Bowser();
const { url, outputPath, viewport } = require('./config');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
    await bowser.load(false);
    const page = await bowser.openPage(url);
    await page.setViewport(viewport);
    let oldName;
    let i = 0;
    while (true) {
        let name =
            (await prompt(`Enter filename or leave empty to reuse the last one (${oldName}): `)) ||
            oldName;
        oldName = name;
        await page.screenshot({ path: `${outputPath}/${name}${i++}.png` });
    }
})();

function prompt(query) {
    return new Promise(resolve => {
        rl.question(query, answer => {
            resolve(answer);
        });
    });
}
