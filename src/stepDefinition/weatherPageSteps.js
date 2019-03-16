import { Given, Then, When } from 'cucumber';
import assert from 'assert';
import Utilities from '../Utilities';
import {
  DAYS_ROW,
  day,
  
} from '../objectRepo';
import * as weatherPage from '../page/weatherPage';
import { exists } from 'fs';

Given('I enter city name {string}', async (city) => {
  await weatherPage.enterCity(city);
});

Then('I validate that five weather forcast is populated', async() => {
  const actualCount = (await Utilities.findElements(DAYS_ROW)).length;
  assert.equal(actualCount, 5, 'PASS');
});

When('I select {string} day', async (dayId) => {
  await Utilities.click(day(dayId));
});

Then('I validate that three hours data is available', async() => {
  const actualCount = (await Utilities.findElements(ROW_COUNT)).length;
  assert.equal(actualCount >= 3, true, "PASS");
});

When('I select an already selected day {string}', async (dayId) => {
  await Utilities.click(day(dayId));
});

Then ('I validate that three hours data is hidden from user for day {string}', async (dayId) => {
  const isHidden = await weatherPage.isHourlyDataHiddenAfterReselect(dayId);
  assert.equal(isHidden === null, true, "PASS");
});

Then ('I Validate Max tempature {string}', async (tempId) => {
  const maxAndMintemp = await weatherPage.maxTempCheck(tempId);
});

Then ('I Validate Min tempature {string}', async (tempId) => {
  const minTemp = await weatherPage.minTempcheck(tempId);
});

Then ('I validate current windspeed {string}', async (windId) => {
  const windSpeed = await weatherPage.windSpd(windId);
});

Then ('I validate current winddirection {string}', async (windDir) => {
  const windDirection= await weatherPage.windDir(windDir);
});

Then ('I validate aggegrate rain fall {string}', async (rainId) => {
  const rainFall= await weatherPage.aggRainFall(rainId);
});