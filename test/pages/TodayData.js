const todayBirths = '.sec-box .sec-counter .rts-counter[rel="births_today"]';
const todayDeaths = '.sec-box .sec-counter .rts-counter[rel="dth1s_today"]';
const todayGrowth =
  '.sec-box-last .sec-counter .rts-counter[rel="absolute_growth"]';

async function BirthsToday() {
  await $(todayBirths).getText();
  return todayBirths;
}

async function DeathsToday() {
  await $(todayDeaths).getText();
  return todayDeaths;
}

async function GrowthToday() {
  await $(todayGrowth).getText();
  return todayGrowth;
}

module.exports = {
  BirthsToday,
  DeathsToday,
  GrowthToday,
};
