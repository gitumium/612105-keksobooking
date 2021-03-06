const packageInfo = require(`../../../package`);
require(`colors`);

const VERSION = packageInfo.version.split(`.`);

module.exports = {
  name: `version`,
  description: `напечатать версию программы`,
  execute() {
    console.log(`v${VERSION[0].red}.${VERSION[1].green}.${VERSION[2].blue}`);
    process.exit(0);
  }
};
