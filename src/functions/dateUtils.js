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
  const regex = new RegExp("([0-9]+(-[0-9]+)+)");
  if (!regex.test(date)) {
    throw Error("date to be converted must be in format YYYY-MM-DD");
  }
};

const testUKDateFormat = (date) => {
  const regex = new RegExp("([0-9]+(/[0-9]+)+)");
  if (!regex.test(date)) {
    throw Error("date to be converted must be in format DD/MM/YYYY");
  }
};

// Converts dates returned from Gov API (format YYYY-MM-DD) to UK display format (DD/MM/YYYY)
const convertGovDateToDMY = (date) => {
  // console.log(date);
  testGovDateFormat(date);
  date = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
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

export const dateUtils = {
  testGovDateFormat,
  testUKDateFormat,
  convertGovDateToDMY,
  convertGovDateToObject,
  convertUKDateToObject,
  convertJSDateToDMY,
  namedDaysOfWeek
};
