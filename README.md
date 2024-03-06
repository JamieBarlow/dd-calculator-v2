<div align="center">
  <h1>Direct Debit Processing Calendar :closed_book:</h1>
  <strong>By Jamie Barlow</strong>
</div>

## Purpose / Background :bulb:

### Tech updates
- This is v2 of a browser app that can be used to determine Direct Debit processing days for a selected year by accounting for weekends, bank holidays and other non-work days. The original can be found [here](https://github.com/JamieBarlow/weekend-bankhol). The UI has since been refactored to use [React](https://react.dev/) components (including [CRUK's React component library](https://www.npmjs.com/package/@cruk/cruk-react-components), built using styled-components), and the app's functional layer now makes use of React state management instead of traditional JS DOM manipulation. This has greatly improved the visual interface and provides a robust user experience, allowing for results to be updated dynamically without the need to refresh the browser.
- To bridge the gap between the original app's UI elements and React, I made use of some of the original BootStrap components, rebuilt for React with the [React-BootStrap](https://react-bootstrap.netlify.app/) library.
- Unit tests (originally Mocha/Chai) have been been rewritten in [Vitest](https://vitest.dev/), due to its integration with my React build tool of choice, [Vite](https://vitejs.dev/), and compatibility with the popular [Jest](https://jestjs.io/) API. Further advantages of this setup included clear assertions, integrated mocking, and visualisation of code coverage.
- For a simplified deployment process and built-in continuous integration and continuous deployment(CI/CD), I deployed with [Netlify](https://www.netlify.com).
### What the app does / the need to automate
- Companies who operate a [Direct Debit scheme](https://www.directdebit.co.uk/) will rely on a processing calendar to determine their schedule for specific Direct Debit processes, both internally and in terms of DD claim submission to Bacs. This is to ensure that the agreed withdrawal date, between Service User (company, payee) and the customer, is met (as per the [Direct Debit guarantee](https://www.directdebit.co.uk/direct-debit-explained/direct-debit-guarantee/)). Processing dates for both Service User and bank are determined by working days, and therefore need to be adjusted to account for bank holidays, weekends, and office closures. Determining when these dates are can be a manual, complex and error-prone process, and so this app was created to meet a real challenge / need for automation.
- There is a [3 day processing cycle](https://www.bacs.co.uk/services/bacs-schemes/getting-started/direct-debit/#:~:text=To%20collect%20Direct%20Debit%20payments,then%20transmitted%20to%20each%20institution.) operated by Bacs. This is accounted for in the app's calculations. The app also accounts for further company-specific internal processes that the claim submission is dependent upon - in this case the 'DD Dedupe Report', 'Claim Run' and 'ARUDD Reporting' are also included.
- Ultimately this app is designed to provide a reliable, consistent and maintainable means of determining Direct Debit processing days, mitigating error and risk. A company will typically load DD data via an annual 'rectification' process which depends on precise calendar data. Failure to generate this data correctly may result in multiple negative impacts that are difficult and/or costly to fix: missed or delayed submissions, payment reconciliation issues, knock-on impact on future claims, damage to reputation or the company's Service User status.
- By factoring in extra holidays / office closure dates which can be added manually by the user, the app is also flexible and can comprehensively cover all non-processing days.

## Features :heavy_check_mark:

- Bank holidays are calculated using the [UK Government Bank Holidays API](https://www.api.gov.uk/gds/bank-holidays/#bank-holidays), which returns bank holiday data in JSON format. Depending on the year selected, this is parsed and added to a list of bank holiday dates (from the current year and late previous year, due to processes overlapping calendar years).
- Weekend dates are calculated using the [JavaScript Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Again this includes some overlap into the previous and next calendar year.
- Your organisation may have extra holidays or office closures, which are not accounted for in the standard list of bank holidays or weekends. The app therefore allows you to enter further 'company holiday' dates individually. Clicking 'Add' will add this to a display list, and also to the collection of 'non-processing' dates that are factored into the calculation. You can also delete these after adding them if desired, and the results table will update dynamically to reflect this.
- After completing the form, the results calendar is displayed under the 'Processing Days' tab.
- All other dates used for the calculation - company Holidays, bank holidays and weekends - are also displayed on separate tabs.
- A copy button allows the user to copy the results to their clipboard in the correct format, and paste into an Excel spreadsheet.

## Technologies :floppy_disk:

- HTML/CSS
- JavaScript
- React
- React-BootStrap
- Git Version Control
- Netlify
- Vitest / Jest

## Development Challenges and Lessons :wrench:

The below challenges have all been accounted for in the design of this app, but they are worthy of consideration to ensure that any future development or changes remain fit for purpose:

- Bank holidays can add multiple non-working days between processing days. As a result, shifting a processing date forwards or backwards by 1 working date may still lead to the adjusted date falling on a non-working day. The app therefore runs checks multiple times, and shifts the date the necessary number of times until it is confirmed that the date provided is in fact a valid working day. In code this is represented by nested looping, with dates requiring a maximum of 4 shifts before there is no clash with non-processing days (company/bank holidays and weekends).
- DD claims at the start of a calendar year will result in lead-up processes that need to occur in the previous calendar year. The app therefore factors in non-processing dates (company/bank holidays and weekends) from towards the end of the previous year. Therefore when manually adding company holidays, the user is also asked to provide these for both current and previous calendar years.
- In some cases, follow-up processes will also spill over to the next calendar year, so weekends from early in the following year will also be accounted for.
- The gap of 3 working days between the DD Dedupe Report process and the Claim Run presents some logical challenges that can easily lead to manual error - fortunately the app can automate this with the right logic! A user attempting to calculate the Dedupe dates manually might presume that you simply need to find the date 3 calendar days before the claim run, check whether this lands on a non-processing day, and then adjust (shift back 1 working day) if necessary. However, non-working days *between* these 2 dates will also need to be accounted for. The app therefore needs to shift the date back 1 day at a time, checking that this is a valid processing day *each time* , and shifting back the required number of days on each iteration.
- The app works with a range of date formats: the 'YYYY-MM-DD' format returned by the UK Gov API, the 'DD/MM/YYYY' format (required for DD display and validation), and instances of the [JavaScript Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). All calculations are performed using the JavaScript Date object, so this is reliant on a series of conversion functions. These have been unit-tested - see the [Testing and Debugging](https://github.com/JamieBarlow/weekend-bankhol/edit/master/README.md#testing-and-debugging-computer) section. For learning and improving my familiarity with the JS dates, this has been very useful, but for future development I would consider bypassing this stage and using a JS date library to speed up development.
  - To illustrate one challenge here, my `convertGovDateToObject()` function returned some unexpected behaviour when later comparing dates, as the date created from data passed back by the Government API would produce inconsistent times - in one instance a new Date object would be e.g. Mon Apr 18 2022 00:00:00 GMT+0100 (British Summer Time), while in another it would be represented as Mon Apr 18 2022 01:00:00 GMT+0100 (British Summer Time). This wasn't immediately obvious, but once identified I resolved this by initialising the Date object to dateObject.setHours(0);
- Copying the results table to the clipboard - in establishing a solution, I needed to convert the displayed table to some form of data, a process I wasn't at all familiar with. My solution involved researching the [Blob Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob), constructing a Blob instance with the innerText of an element, then using this to generate a [Clipboard Item](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem) with the Clipboard API, and finally writing this data to the clipboard using `navigator.clipboard.write()`.
- Selecting an appropriate format for displaying results - there is a lot of data to display on one page vertically (especially weekend dates), so for ease of use I wanted to design a way to break down the results display somehow. At the same time, I decided that I wanted to keep this a single-page application (SPA), making the app/interface more efficient to build and run, without the additional need to pass form data to another page, as I have done with [previous applications](https://github.com/JamieBarlow/Take-Home-Salary-Calculator) using [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). I therefore made use of BootStrap's [Tables](https://getbootstrap.com/docs/5.2/content/tables/) and [Tabbed Navigation](https://getbootstrap.com/docs/5.2/components/navs-tabs/) to keep the results pages compact, and easy to navigate.


## Upcoming features :hourglass:

- Updated unit-testing and integration-testing with Vitest/Jest

## License :scroll:

- [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
