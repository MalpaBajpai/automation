import Utilities from '../Utilities';
import {
  CITY_TEXTBOX,
  DAYS_ROW,
  ROW_COUNT,
  maxTemp,
  minTemp,
  windSpeed,
  windDirection,
  rainFall,

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

export const maxTempCheck = async (dayId) => {
  const actualCount = await Utilities.findElements(ROW_COUNT);
  var result = 0;

  for (let value=1 ; value < actualCount.length; value++){
    
    let temp = await Utilities.getText(maxTemp(dayId,value))
    if (parseInt(temp, 10) > result){
      result = temp;
    }
  }
  console.log("Max Temp is " + result)
  
}

export const minTempcheck = async (dayId) => {
  const actualCount = await Utilities.findElements(ROW_COUNT);
  var result;

  for (let value=1 ; value < actualCount.length; value++){
     
    let temp = await Utilities.getText(minTemp(dayId,value))
    if (value === 1) {
      result = parseInt(temp, 10);
    }
    if (parseInt(temp, 10) <= parseInt(result, 10)){
      result = temp;
    }
  }
  console.log("Min Temp is " + result) 
}


export const windSpd = async (windId) => {
  let temp = await Utilities.getText(windSpeed(windId))
  console.log("wind speed ", temp)
}

export const windDir = async (windId) => {
  let winDir = await Utilities.getText(windSpeed(windId));
  console.log("wind direction " ,winDir)
}

export const aggRainFall = async (rainId) => {
  const actualCount = await Utilities.findElements(ROW_COUNT);
  var result = 0;

  for (let value=1 ; value < actualCount.length; value++){ 
    let rainfall = await Utilities.getText(rainFall(rainId));
    result = result + parseInt(rainfall, 10)
    
  }
  console.log("Average rainfall is " + result) 
}


