import { dateUtils } from "./dateUtils";
const { convertUKDateToObject, convertJSDateToDMY } = dateUtils;

// Display processing dates
export default function displayProcessingDays(year) {
  // Column A dates - capture 5th or 19th of month
  let month = 1;
  let colA = [];
  for (let i = 0; i < 24; i++) {
    if (i % 2 === 0) {
      let claimDate = `05/${month.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })}/${year}`;
      colA.push(convertUKDateToObject(claimDate));
    } else if (i % 2 === 1) {
      let claimDate = `19/${month.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })}/${year}`;
      colA.push(convertUKDateToObject(claimDate));
      month++;
    }
  }
  console.log("COL-A")
  console.log(colA);
  let colB = [];
  let colC = [];
  let colD = [];
  let colE = [];
  let colF = [];
  let colG = [];
  let colH = [];

  // // Use to compare dates with nonProcessing days and return the next (or previous) working day, depending on the direction specified. Populates a given table column with bankHols
  // function compareDates(dates1, dates2, direction, column) {
  //   let resultDates = [];
  //   let defaultDate = true;
  //   for (let i = 0; i < dates1.length; i++) {
  //     let newDate = new Date(`${dates1[i]}`);
  //     for (let j = 0; j < dates2.length; j++) {
  //       // comparing first set of dates with nonprocessing days - if they match, the default date can't apply and the date must be shifted forwards or backwards for further comparison
  //       if (newDate.getTime() === dates2[j].getTime()) {
  //         defaultDate = false;
  //         newDate.setDate(`${direction(newDate.getDate())}`);
  //         newDate.setHours(0);
  //         // 2nd comparison
  //         for (let k = 0; k < dates2.length; k++) {
  //           if (newDate.getTime() === dates2[k].getTime()) {
  //             newDate.setDate(`${direction(newDate.getDate())}`);
  //             // 3rd comparison
  //             for (let l = 0; l < dates2.length; l++) {
  //               if (newDate.getTime() === dates2[l].getTime()) {
  //                 newDate.setDate(`${direction(newDate.getDate())}`);
  //                 // 4th comparison (final)
  //                 for (let m = 0; m < dates2.length; m++) {
  //                   if (newDate.getTime() === dates2[m].getTime()) {
  //                     newDate.setDate(`${direction(newDate.getDate())}`);
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //         // Populate rows from 3rd row down, in the column given
  //         table.rows[i + 2].cells[column].innerText =
  //           convertJSDateToDMY(newDate);
  //         resultDates.push(newDate);
  //       }
  //     }
  //     // Populate with default date (will apply if there is no clash between column dates and nonprocessing days)
  //     if (defaultDate === true) {
  //       table.rows[i + 2].cells[column].innerText = convertJSDateToDMY(
  //         dates1[i]
  //       );
  //       resultDates.push(dates1[i]);
  //     }
  //     defaultDate = true;
  //   }
  //   return resultDates;
  // }

  // // Column F dates
  // let colF = claimDates;
  // compareDates(colF, nonProcessingDays, forwards, 5);
  // colF = compareDates(claimDates, nonProcessingDays, forwards, 5);

  // // Column E dates
  // let colE = shiftDates(claimDates, backwards); // Note we are shifting the original claim dates backwards, instead of passing in the modified column F dates
  // compareDates(colE, nonProcessingDays, backwards, 4);
  // colE = compareDates(colE, nonProcessingDays, backwards, 4);

  // // Column D dates
  // let colD = shiftDates(colE, backwards);
  // compareDates(colD, nonProcessingDays, backwards, 3);
  // colD = compareDates(colD, nonProcessingDays, backwards, 3);

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
  let processingDaysObj = [];
  for (let i = 0; i < 24; i++) {
    processingDaysObj.push({
        colA: colA[i],
        // colB: colB[i],
        // colC: colC[i],
        // colD: colD[i],
        // colE: colE[i],
        // colF: colF[i],
        // colG: colG[i],
        // colH: colH[i],
    });
}
  console.log("processingDaysObj:", processingDaysObj);
  return processingDaysObj;
}
