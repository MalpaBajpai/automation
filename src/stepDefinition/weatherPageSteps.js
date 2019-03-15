import { Given, Then, When } from 'cucumber';
import assert from 'assert';
import Utilities from '../Utilities';
import {
  DAYS_ROW,
  day,
  HOURS_ROW,
} from '../objectRepo';
import * as weatherPage from '../page/weatherPage';

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
  const actualCount = (await Utilities.findElements(HOURS_ROW)).length;
  assert.equal(actualCount >= 3, true, "PASS");
});

When('I select an already selected day {string}', async (dayId) => {
  await Utilities.click(day(dayId));
});

Then ('I validate that three hours data is hidden from user for day {string}', async (dayId) => {
  const isHidden = await weatherPage.isHourlyDataHiddenAfterReselect(dayId);
  assert.equal(isHidden === null, true, "PASS");
});
