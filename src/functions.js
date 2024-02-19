const extraDatesForm = document.querySelector("#extra-dates__form");
const extraDates = document.querySelector("#company-dates");
const chooseYear = document.querySelector("#chooseYear");
let yearSelected = document.querySelector("#year-select");
let namedDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const addCompanyDatesBtn = document.querySelector("#addCompanyDatesBtn");
const calculateDatesBtn = document.querySelector("#calculateDates");

// Todo: remake with react-bootstrap
const bankHolsTab = document.querySelector("#bankHols-tab");
const weekendsTab = document.querySelector("#weekends-tab");
const processingTab = document.querySelector("#processing-tab");
const companyDatesDisplay = document.querySelector("#company-dates-display");
const bankHols = document.querySelector("#bankHols-display");
const weekends = document.querySelector("#weekends-display");
const processingDays = document.querySelector("#processingDays");
const copyButton = document.querySelector("#copyButton");
const results = document.querySelector("#results");

// Not used
const bankHolsTable = document.querySelector("#bankHolsTable");
const weekendsTable = document.querySelector("#weekendsTable");

let resultsTable;
let processingDaysObj = {};
let nonProcessingDays = [];

// Enable tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function getBankHols(year) {
  return fetch(`https://www.gov.uk/bank-holidays.json`)
    .then(
      (res) => {
        if (res.ok) {
          console.log("RESOLVED!", res);
          return res.json();
        }
        throw new Error("request failed!");
      },
      (networkError) => console.log(networkError.message)
    )
    .then((data) => {
      let apiResults = data["england-and-wales"].events;
      // console.log(results);
      let nonProcessing = [];
      let thisYearResults = apiResults.filter(
        (result) => result.date.slice(0, 4) === year
      );
      let endOfLastYearResults = apiResults.filter((result) => {
        const resultYear = parseInt(result.date.slice(0, 4));
        const resultMonth = parseInt(result.date.slice(5, 7));
        return resultYear === year - 1 && resultMonth === 12;
      });

      // let lastYearResults = apiResults.filter(
      //   (result) => result.date.slice(0, 4) === (year - 1).toString()
      // );
      // let endOflastYearResults = lastYearResults.filter(
      //   (item) => item.date.slice(5, 7) === "12"
      // );
      nonProcessing.push(...thisYearResults, ...endOfLastYearResults);

      // Extract dates from nonProcessing results
      let dates = nonProcessing.map((result) => result.date);

      // Extract day of week from results
      const daysOfWeek = dates.map((result) => {
        let date = new Date(result);
        let day = date.getDay();
        day = namedDaysOfWeek[day];
        return day;
      });
      // Extract Bank Holiday name from results
      const bankHolNames = nonProcessing.map((result) => result.title);

      return Promise.all([
        // displayBankHols(dates, daysOfWeek, bankHolNames),
        // getWeekends(year),
      ]).then(() => {
        let resultsObj = {
          apiResults,
          dates,
          daysOfWeek,
          bankHolNames,
        };
        console.log("All data from API call:", apiResults);
        console.log("Bank hol dates:", dates);
        console.log("Bank hol days of week:", daysOfWeek);
        console.log("Bank hol names:", bankHolNames);
        // nonProcessingDays.forEach((date) => {
        //   const newDate = convertJSDateToDMY(date);
        //   console.log(newDate);
        // });
        // console.log("NONPROCESSINGDAYS:", nonProcessingDays);
        // removeDeleteBtns();
        return resultsObj;
        // return processingDaysObj;
      });
    });
}

const displayBankHols = (dates, daysOfWeek, bankHolNames) => {
  const header = document.createElement("h2");
  header.innerText = `Bank holiday dates for ${yearSelected} (and late ${
    yearSelected - 1
  })`;
  bankHols.prepend(header);
  const tableBody = document.querySelector("#bankHolTable__body");
  let rowIndex = 1;
  for (let i = 0; i < dates.length; i++) {
    const row = document.createElement("tr");
    tableBody.append(row);
    // Generate column 1 cells (dates)
    const dateCell = document.createElement("th");
    let ukDate = convertGovDateToDMY(dates[i]);
    dateCell.scope = "row";
    dateCell.innerText = ukDate;
    tableBody.childNodes[rowIndex].append(dateCell);
    // Generate column 2 cells (day of week)
    const dayCell = document.createElement("td");
    dayCell.innerText = daysOfWeek[i];
    tableBody.childNodes[rowIndex].append(dayCell);
    // Generate column 3 cells (bank holiday title)
    const title = document.createElement("td");
    title.innerText = bankHolNames[i];
    tableBody.childNodes[rowIndex].append(title);
    // Add date to global array for calculations
    nonProcessingDays.push(convertGovDateToObject(dates[i]));
    rowIndex++;
  }
};

const getWeekends = (year) => {
  let daysOfYear = [];
  // get all days of year, with extra 15 days from previous and subsequent years to account for crossover
  for (let i = 0; i < 395; i++) {
    let date = new Date(`January 1, ${year}`);
    date.setDate(date.getDate() - 15);
    date.setDate(date.getDate() + i);
    date.setHours(0);
    daysOfYear.push(date);
  }
  // get weekends only by removing week days
  let weekends = [];
  let weekendDays = [];
  for (let day of daysOfYear) {
    if (day.getDay() === 6 || day.getDay() === 0) {
      nonProcessingDays.push(day);
      weekends.push(day.toLocaleDateString("en-GB"));
      weekendDays.push(namedDaysOfWeek[day.getDay()]);
    }
  }

  console.log(`Getweekends: ${nonProcessingDays[2]}`);
  // console.log(nonProcessingDays);
  displayWeekends(weekends, weekendDays);
  return {
    weekends,
    weekendDays,
  };
};

const displayWeekends = (dates, weekendDays) => {
  // console.log(weekends);
  const header = document.createElement("h2");
  header.innerText = `Weekend dates for ${yearSelected} (including late ${
    yearSelected - 1
  } and early ${Number(yearSelected) + 1})`;
  weekends.prepend(header);
  const tableBody = document.querySelector("#weekendsTable__body");
  let rowIndex = 1;
  for (let i = 0; i < dates.length; i++) {
    const row = document.createElement("tr");
    tableBody.append(row);
    // Generate column 1 cells (dates)
    const dateCell = document.createElement("th");
    dateCell.scope = "row";
    dateCell.innerText = dates[i];
    tableBody.childNodes[rowIndex].append(dateCell);
    // Generate column 2 cells (day of week)
    const dayCell = document.createElement("td");
    dayCell.innerText = weekendDays[i];
    tableBody.childNodes[rowIndex].append(dayCell);
    rowIndex++;
  }
  console.log(`Display weekends: ${nonProcessingDays[2]}`);
  displayProcessingDays();
};

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

// Pass the below functions as the 'direction' argument to other functions in order to push days either forwards or backwards;
function forwards(a) {
  a++;
  return a;
}
function backwards(a) {
  a--;
  return a;
}

// Shift dates back or forward by 1 day, using 'forwards' or 'backwards' utility functions as the direction argument (use this before comparing with non-processing days)
function shiftDates(dates, direction) {
  let newDates = [];
  // Shift dates back by 1
  for (let i = 0; i < dates.length; i++) {
    let newDate = new Date(dates[i]);
    newDate.setDate(`${direction(newDate.getDate())}`);
    newDate.setHours(0);
    newDates.push(newDate);
  }
  return newDates;
}

// Display processing dates
const displayProcessingDays = () => {
  const header = document.createElement("h2");
  header.innerText = "Processing days calendar:";
  // Displaytable
  const table = document.createElement("table");
  table.classList.add("table", "table-primary", "table-striped", "table-hover");
  table.id = "resultsTable";
  resultsTable = table;

  for (let i = 0; i < 26; i++) {
    const tr = table.insertRow();
    for (let j = 0; j < 8; j++) {
      tr.insertCell();
    }
  }
  // Populate table top 2 rows
  table.rows[0].cells[0].innerText = "Claim Date";
  table.rows[0].cells[1].innerText = "DD Dedupe Report";
  table.rows[0].cells[2].innerText =
    "Claim run @ 9.00am (completed by Apps Support Team)";
  table.rows[0].cells[3].innerText =
    "Date to send claim file (completed by Supporter Payments)";
  table.rows[0].cells[4].innerText = "Bank Processing Date";
  table.rows[0].cells[5].innerText = "Payment Date";
  table.rows[0].cells[6].innerText =
    "ARUDD Reporting (completed by Operations Team)";
  table.rows[0].cells[7].innerText =
    "ARUDD Reporting sweep-up (completed by Operations Team)";
  table.rows[1].cells[0].innerText =
    "Step 1 - Capture the 5th or 19th of the month";
  table.rows[1].cells[1].innerText = "Step 8 - 3 working days before claim run";
  table.rows[1].cells[2].innerText =
    "Step 7 - 1 working day before the claim file is sent";
  table.rows[1].cells[3].innerText =
    "Step 4 - 1 working day before the procesing date";
  table.rows[1].cells[4].innerText =
    "Step 3 - 1 working day before the payment date";
  table.rows[1].cells[5].innerText =
    "Step 2 - 5th or 19th of the month but must be a working day, if falls on weekend of bank holiday, the payment date will be next working day following the 5th or 19th.";
  table.rows[1].cells[6].innerText =
    "Step 5 - 1 working day after the payment date";
  table.rows[1].cells[7].innerText =
    "Step 6 - 2 working days after the payment date";

  table.rows[0].classList.add("table-dark");
  table.rows[1].classList.add(
    "table-info",
    "table-group-divider",
    "border-dark"
  );

  // Column A dates
  let month = 1;
  let claimDates = [];
  for (let i = 2; i < table.rows.length; i++) {
    if (i % 2 === 0) {
      let claimDate = `05/${month.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })}/${yearSelected}`;
      table.rows[i].cells[0].innerText = claimDate;
      claimDates.push(convertUKDateToObject(claimDate));
    } else if (i % 2 === 1) {
      let claimDate = `19/${month.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })}/${yearSelected}`;
      table.rows[i].cells[0].innerText = claimDate;
      claimDates.push(convertUKDateToObject(claimDate));
      month++;
    }
  }

  // Use to compare dates with nonProcessing days and return the next (or previous) working day, depending on the direction specified. Populates a given table column with bankHols
  function compareDates(dates1, dates2, direction, column) {
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
          // Populate rows from 3rd row down, in the column given
          table.rows[i + 2].cells[column].innerText =
            convertJSDateToDMY(newDate);
          resultDates.push(newDate);
        }
      }
      // Populate with default date (will apply if there is no clash between column dates and nonprocessing days)
      if (defaultDate === true) {
        table.rows[i + 2].cells[column].innerText = convertJSDateToDMY(
          dates1[i]
        );
        resultDates.push(dates1[i]);
      }
      defaultDate = true;
    }
    return resultDates;
  }

  // Column F dates
  let colF = claimDates;
  compareDates(colF, nonProcessingDays, forwards, 5);
  colF = compareDates(claimDates, nonProcessingDays, forwards, 5);

  // Column E dates
  let colE = shiftDates(claimDates, backwards); // Note we are shifting the original claim dates backwards, instead of passing in the modified column F dates
  compareDates(colE, nonProcessingDays, backwards, 4);
  colE = compareDates(colE, nonProcessingDays, backwards, 4);

  // Column D dates
  let colD = shiftDates(colE, backwards);
  compareDates(colD, nonProcessingDays, backwards, 3);
  colD = compareDates(colD, nonProcessingDays, backwards, 3);

  // Column C dates
  let colC = shiftDates(colD, backwards);
  compareDates(colC, nonProcessingDays, backwards, 2);
  colC = compareDates(colC, nonProcessingDays, backwards, 2);

  // Column B dates (shifting back 3 days)
  let colB = shiftDates(colC, backwards);
  colB = compareDates(colB, nonProcessingDays, backwards, 1);
  colB = shiftDates(colB, backwards); // Shifting back a 2nd day
  colB = compareDates(colB, nonProcessingDays, backwards, 1);
  colB = shiftDates(colB, backwards); // Shifting back a 3rd day
  colB = compareDates(colB, nonProcessingDays, backwards, 1);

  // Column G dates
  let colG = shiftDates(colF, forwards);
  compareDates(colG, nonProcessingDays, forwards, 6);
  colG = compareDates(colG, nonProcessingDays, forwards, 6);

  // Column H dates
  let colH = shiftDates(colG, forwards);
  compareDates(colH, nonProcessingDays, forwards, 7);
  colH = compareDates(colH, nonProcessingDays, forwards, 7);

  // Column A dates
  let colA = claimDates;

  console.log("COLUMN DATA:", colA, colB, colC, colD, colE, colF, colG, colH);

  // console.log(`Claim dates: ${claimDates}`);
  // console.log(`Non processing days: ${nonProcessingDays}`);
  // console.log(`Display processing days: ${nonProcessingDays[3]}`)
  processingDays.append(header, table);
  processingDaysObj = {
    colA,
    colB,
    colC,
    colD,
    colE,
    colF,
    colG,
    colH,
  };
  console.log("processingDaysObj:", processingDaysObj);
  return processingDaysObj;
};

// Update year values for calculations
yearSelected.addEventListener("change", function () {
  yearSelected = yearSelected.value;
});

// Trigger on clicking 'calculate dates' button
chooseYear.addEventListener("submit", function (e) {
  e.preventDefault();
  dynamicTooltip(
    calculateDatesBtn,
    "Make sure to add company holiday dates first",
    "Dates calculated!"
  );
  getBankHols(yearSelected);
  reveal(results);
  reveal(bankHolsTab);
  reveal(weekendsTab);
  reveal(processingTab);
  console.log("nonProcessingDays:", nonProcessingDays);
  console.log("processingDays:", processingDays);
});

// Displays a given element
function reveal(section) {
  section.style.display = "block";
}

// Hides elements
function hideTabs(tab) {
  tab.style.display = "none";
}

// Runs only once to generate header
let displayCompanyHolsHeader = (function () {
  let executed = false;
  return function () {
    if (!executed) {
      executed = true;
      const header = document.createElement("h2");
      header.innerText = `Company holiday dates:`;
      const list = document.createElement("ul");
      companyDatesDisplay.append(header, list);
    }
  };
})();

// Display optional company holidays beneath Company Hols header
const displayCompanyHols = (date) => {
  displayCompanyHolsHeader();
  // Keep other results hidden until year selected
  reveal(results);
  hideTabs(bankHolsTab);
  hideTabs(weekendsTab);
  hideTabs(processingTab);
  // Creates new list items
  const newItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-sm", "btn-danger", "deleteBtn");
  const breakLine = document.createElement("br");
  newItem.innerText = `${convertJSDateToDMY(date)}`;
  newItem.style.display = "inline";
  deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
  companyDatesDisplay.append(newItem, deleteButton, breakLine);
  console.log(date);
  console.log(nonProcessingDays);
};

// Remove delete buttons for company holidays after generating dates - UI improvement
function removeDeleteBtns() {
  const deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach((btn) => {
    btn.remove();
  });
}

// Add extra date items to list on submission
extraDatesForm.addEventListener("submit", function (e) {
  addExtraDate(e, extraDates.value);
});

function addExtraDate(e, date) {
  e.preventDefault();
  dynamicTooltip(addCompanyDatesBtn, "Add date", "Date added");
  let newDate = new Date(date);
  newDate.setHours(0);
  console.log("EXTRA DATE:", newDate);
  nonProcessingDays.push(newDate);
  displayCompanyHols(newDate);
  return newDate;
}

// Clicking on ' - ' chooseYear to remove list item
companyDatesDisplay.addEventListener("click", removeDate);

// Remove extra company dates if clicking on '-'
function removeDate(e) {
  if (e.target.nodeName === "BUTTON") {
    let dateToDelete = new Date(
      convertUKDateToObject(e.target.previousElementSibling.innerText)
    );
    dateToDelete.setHours(0);
    let index = nonProcessingDays.findIndex(
      (date) => date.getTime() === dateToDelete.getTime()
    );
    if (index !== -1) {
      nonProcessingDays.splice(index, 1);
    }
    console.log("nonProcessingDays:", nonProcessingDays);
    e.target.previousElementSibling.remove();
    e.target.nextElementSibling.remove();
    e.target.remove();
  }
}

// Utility function to select any element
function selectElement(el) {
  let range = document.createRange();
  let selection = window.getSelection();
  selection.removeAllRanges();
  range.selectNodeContents(el);
  selection.addRange(range);
}

// Copy to clipboard
function copyElement(el) {
  const type = "text/plain";
  const blob = new Blob([el.innerText], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  navigator.clipboard.write(data);
}

// Select all in table and copy
copyButton.addEventListener("click", function () {
  copyElement(resultsTable);
  dynamicTooltip(copyButton, "Copy to clipboard", "Copied!");
});

// Set up tooltip with updated message on click - pass this into an event listener
function dynamicTooltip(button, originalMsg, updateMsg) {
  const tooltip = bootstrap.Tooltip.getInstance(button);
  tooltip.setContent({ ".tooltip-inner": updateMsg });
  setTimeout(() => {
    tooltip.hide();
    tooltip.setContent({ ".tooltip-inner": originalMsg });
  }, 1000);
}

// Exporting variables and functions
const variables = {
  extraDatesForm,
  extraDates,
  companyDatesDisplay,
  chooseYear,
  bankHols,
  processingDays,
  yearSelected,
  nonProcessingDays,
  processingDaysObj,
};

const functions = {
  getBankHols,
  displayBankHols,
  convertGovDateToDMY,
  convertUKDateToObject,
  convertGovDateToObject,
  convertJSDateToDMY,
  getWeekends,
  displayWeekends,
  displayProcessingDays,
  displayCompanyHolsHeader,
  displayCompanyHols,
  forwards,
  backwards,
  shiftDates,
  addExtraDate,
  removeDate,
};

export { functions, variables };
