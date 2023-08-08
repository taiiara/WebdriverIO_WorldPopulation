const anualBirths =
  '.sec-box .sec-counter .rts-counter[rel="births_this_year"]';
const anualDeaths = '.sec-box .sec-counter .rts-counter[rel="dth1s_this_year"]';
const anualGrowth =
  '.sec-box-last .sec-counter .rts-counter[rel="absolute_growth_year"]';

async function BirthsAnual() {
  await $(anualBirths).getText();
  return anualBirths;
}

async function DeathsAnual() {
  await $(anualDeaths).getText();
  return anualDeaths;
}

async function GrowthAnual() {
  await $(anualGrowth).getText();
  return anualGrowth;
}

module.exports = {
  BirthsAnual,
  DeathsAnual,
  GrowthAnual,
};
