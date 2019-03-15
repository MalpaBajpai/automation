import Utilities from '../Utilities';
import {
  CITY_TEXTBOX,
  DAYS_ROW,
} from '../objectRepo';

export const enterCity = async (city) => {
  await Utilities.clearField(CITY_TEXTBOX);
  await Utilities.sendKeys(CITY_TEXTBOX, city);
}

export const isHourlyDataHiddenAfterReselect = async (dayId) => {
  const daysRowElements = await Utilities.findElements(DAYS_ROW);
  const rowElement = daysRowElements[Number(dayId)-1];
  return await rowElement.getAttribute('hidden');
}