import { dateUtils } from "./dateUtils";
const {
  convertUKDateToObject,
  convertJSDateToDMY,
  forwards,
  backwards,
  shiftDates,
} = dateUtils;

// Display processing dates
export default function displayProcessingDays(year, nonProcessingDays) {
  let nonProcessingJS = nonProcessingDays.map((day) => day.JSDate);
  let claimDates;

  // Column A dates - capture 5th or 19th of month as claim dates
  let colA = {};
  function getColA() {
    let month = 1;
    let displayDates = [];
    for (let i = 0; i < 24; i++) {
      if (i % 2 === 0) {
        let claimDate = `05/${month.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}/${year}`;
        displayDates.push(claimDate);
      } else if (i % 2 === 1) {
        let claimDate = `19/${month.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}/${year}`;
        displayDates.push(claimDate);
        month++;
      }
    }
    claimDates = displayDates.map((date) => convertUKDateToObject(date));

    colA = {
      displayDates,
      JSDates: claimDates,
    };
  }
  getColA();

  // Use to compare dates with nonProcessing days and return the next (or previous) working day, depending on the direction specified. Populates a given table column with bankHols
  function compareDates(dates1, dates2, direction) {
    let resultDates = [];
    let defaultDate = true;
    for (let i = 0; i < dates1.length; i++) {
      let newDate = new Date(`${dates1[i]}`);
      for (let j = 0; j < dates2.length; j++) {
        // comparing first set of dates with nonprocessing days - if they match, the default date can't apply and the date must be shifted forwards or backwards for further comparison
        if (newDate.getTime() === dates2[j].getTime()) {
          defaultDate = false;
          newDate.setDate(`${direction(newDate.getDate())}`);
          newDate.setHours(0);
          // 2nd comparison
          for (let k = 0; k < dates2.length; k++) {
            if (newDate.getTime() === dates2[k].getTime()) {
              newDate.setDate(`${direction(newDate.getDate())}`);
              // 3rd comparison
              for (let l = 0; l < dates2.length; l++) {
                if (newDate.getTime() === dates2[l].getTime()) {
                  newDate.setDate(`${direction(newDate.getDate())}`);
                  // 4th comparison (final)
                  for (let m = 0; m < dates2.length; m++) {
                    if (newDate.getTime() === dates2[m].getTime()) {
                      newDate.setDate(`${direction(newDate.getDate())}`);
                    }
                  }
                }
              }
            }
          }
          resultDates.push(newDate);
        }
      }
      // Populate with default date (will apply if there is no clash between column dates and nonprocessing days)
      if (defaultDate === true) {
        resultDates.push(dates1[i]);
      }
      defaultDate = true;
    }
    console.log("COMPARING:");
    console.log(resultDates);
    return resultDates;
  }

  // Todo: populate cols B-H with actual values
  let colB = colA;
  let colC = colA;
  // let colD = colA;
  // let colE = colA;
  // let colF = colA;
  let colG = colA;
  let colH = colA;

  // // Column F dates
  let colF = {};
  function getColF() {
    colF.JSDates = compareDates(claimDates, nonProcessingJS, forwards);
    colF.displayDates = colF.JSDates.map((date) => convertJSDateToDMY(date));
  }
  getColF();

  // Column E dates
  let colE = {};
  function getColE() {
    let shiftedBack = shiftDates(claimDates, backwards); // Note we are shifting the original claim dates backwards, instead of passing in the modified column F dates
    colE.JSDates = compareDates(shiftedBack, nonProcessingJS, backwards);
    colE.displayDates = colE.JSDates.map((date) => convertJSDateToDMY(date));
  }
  getColE();

  // // Column D dates
  let colD = {};
  function getColD() {
    let shiftedBack = shiftDates(colE.JSDates, backwards);
    colD.JSDates = compareDates(shiftedBack, nonProcessingJS, backwards);
    colD.displayDates = colD.JSDates.map((date) => convertJSDateToDMY(date));
  }
  getColD();

  // // Column C dates
  // let colC = shiftDates(colD, backwards);
  // compareDates(colC, nonProcessingDays, backwards, 2);
  // colC = compareDates(colC, nonProcessingDays, backwards, 2);

  // // Column B dates (shifting back 3 days)
  // let colB = shiftDates(colC, backwards);
  // colB = compareDates(colB, nonProcessingDays, backwards, 1);
  // colB = shiftDates(colB, backwards); // Shifting back a 2nd day
  // colB = compareDates(colB, nonProcessingDays, backwards, 1);
  // colB = shiftDates(colB, backwards); // Shifting back a 3rd day
  // colB = compareDates(colB, nonProcessingDays, backwards, 1);

  // // Column G dates
  // let colG = shiftDates(colF, forwards);
  // compareDates(colG, nonProcessingDays, forwards, 6);
  // colG = compareDates(colG, nonProcessingDays, forwards, 6);

  // // Column H dates
  // let colH = shiftDates(colG, forwards);
  // compareDates(colH, nonProcessingDays, forwards, 7);
  // colH = compareDates(colH, nonProcessingDays, forwards, 7);

  // console.log("COLUMN DATA:", colA, colB, colC, colD, colE, colF, colG, colH);

  // console.log(`Claim dates: ${claimDates}`);
  // console.log(`Non processing days: ${nonProcessingDays}`);
  // console.log(`Display processing days: ${nonProcessingDays[3]}`)
  // processingDays.append(header, table);

  // Create processingDays results object to be passed into state
  let processingDays = [];
  const columns = [
    { name: "colA", displayDates: colA.displayDates, JSDates: colA.JSDates },
    { name: "colB", displayDates: colB.displayDates, JSDates: colB.JSDates },
    { name: "colC", displayDates: colC.displayDates, JSDates: colC.JSDates },
    { name: "colD", displayDates: colD.displayDates, JSDates: colD.JSDates },
    { name: "colE", displayDates: colE.displayDates, JSDates: colE.JSDates },
    { name: "colF", displayDates: colF.displayDates, JSDates: colF.JSDates },
    { name: "colG", displayDates: colG.displayDates, JSDates: colG.JSDates },
    { name: "colH", displayDates: colH.displayDates, JSDates: colH.JSDates },
  ];

  for (let i = 0; i < 24; i++) {
    let day = {};
    columns.forEach((column) => {
      day[column.name] = {
        displayDate: column.displayDates[i],
        JSDate: column.JSDates[i],
      };
    });
    processingDays.push(day);
  }

  console.log("processingDays:", processingDays);
  return processingDays;
}
