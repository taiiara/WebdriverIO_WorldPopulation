const { BirthsToday, DeathsToday, GrowthToday } = require("../pages/TodayData");
const { BirthsAnual, DeathsAnual, GrowthAnual } = require("../pages/YearData");
let i = 0;

const mainCounter = ".maincounter-number";

async function OpenURL() {
  await browser.url("https://www.worldometers.info/world-population/");
  await expect(browser).toHaveUrl(
    "https://www.worldometers.info/world-population/"
  );
}

async function WorldPopulation() {
  await $(mainCounter).getText();
  return mainCounter;
}

async function WhileRepetition() {
  while (i < 20) {
    await WorldPopulation();
    await BirthsToday();
    await DeathsToday();
    await GrowthToday();
    await BirthsAnual();
    await DeathsAnual();
    await GrowthAnual();

    await browser.pause(500);

    i++;
  }
}

module.exports = {
  OpenURL,
  WhileRepetition,
};
