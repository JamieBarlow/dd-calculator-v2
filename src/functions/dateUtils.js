const namedDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Tests date is in YYYY-MM-DD format
const testGovDateFormat = (date) => {
  const regex = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  if (!regex.test(date)) {
    throw Error("date to be converted must be in format YYYY-MM-DD");
  }
};

// Tests date is in DD/MM/YYYY format
const testUKDateFormat = (date) => {
  const regex = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/);
  if (!regex.test(date)) {
    throw Error("date to be converted must be in format DD/MM/YYYY");
  }
};

// Converts dates returned from Gov API (format YYYY-MM-DD) to UK display format (DD/MM/YYYY)
const convertGovDateToDMY = (date) => {
  testGovDateFormat(date);
  date = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
  // console.log(date);
  return date;
};

// Converts dates from Gov API (format YYYY-MM-DD) to a JavaScript Date Object
const convertGovDateToObject = (date) => {
  testGovDateFormat(date);
  let dateObject = new Date(date);
  dateObject.setHours(0);
  // console.log(`date object: ${dateObject}`)
  return dateObject;
};

// Converts UK format dates (format DD/MM/YYY) to a JavaScript Date Object
const convertUKDateToObject = (date) => {
  testUKDateFormat(date);
  let dateObject = new Date(
    `${date.slice(3, 5)}/${date.slice(0, 2)}/${date.slice(6, 10)}`
  );
  dateObject.setHours(0);
  return dateObject;
};

// Converts JavaScript Date Object to UK display format (DD/MM/YYYY)
const convertJSDateToDMY = (date) => {
  let day = date.getDate().toLocaleString("en-US", { minimumIntegerDigits: 2 });
  let month = (date.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  let year = date.getFullYear();
  let ukDate = `${day}/${month}/${year}`;
  return ukDate;
};

// Pass the below functions as the 'direction' argument to other functions in order to push days either forwards or backwards;
function forwards(date) {
  date.setDate(date.getDate() + 1);
  return date;
}
function backwards(date) {
  date.setDate(date.getDate() - 1);
  return date;
}

// Shift dates back or forward by 1 day, using 'forwards' or 'backwards' utility functions as the direction argument (use this before comparing with non-processing days)
function shiftDates(dates, direction) {
  let newDates = [];
  // Shift dates back or forward by 1
  for (let i = 0; i < dates.length; i++) {
    let newDate = new Date(dates[i]);
    newDate = direction(newDate);
    newDate.setHours(0);
    newDates.push(newDate);
  }
  return newDates;
}

export const dateUtils = {
  testGovDateFormat,
  testUKDateFormat,
  convertGovDateToDMY,
  convertGovDateToObject,
  convertUKDateToObject,
  convertJSDateToDMY,
  namedDaysOfWeek,
  forwards,
  backwards,
  shiftDates,
};
