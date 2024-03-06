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
- 'Toast' notifications for each user interaction, providing visual feedback. These stack with repeated actions, and auto-clear after a set time interval.

## Technologies :floppy_disk:

- HTML/CSS
- JavaScript
- React
- React-BootStrap
- Git Version Control
- Netlify
- Vitest / Jest

## Development Challenges and Lessons :wrench:

- Updating from vanilla JS/BootStrap to a fully-fledged React application meant not only a refactoring of UI elements (taking advantage of modular component structure and dynamic rendering), but restructuring the app's functionality, as React works with a virtual DOM rather than the traditional DOM. This was a challenge but at the same time, a great exercise in **design thinking** - analysing the app's process flow, simplifying and breaking down functions and UI elements further where necessary, improving clarity and reusability.
- Refactoring was helped by having already written unit tests, expressing what each function should achieve. Conditional rendering logic could now be handled by components themselves, rather than arising from other functions, allowing for a clearer separation of concerns. The React [Context API](https://react.dev/reference/react/createContext) also allowed me to maintain greater control and a clearer overview of state management throughout the app, without overly complicated interactions and unwanted side effects. 
- Testing the 'copy to clipboard' function in Vitest involved some extra complexity without certain DOM elements in a testing environment. I nonetheless managed this by:
  - Mocking the navigator object using 'vi' in Vitest;
  - Mocking the document object using [JSDOM](https://www.npmjs.com/package/jsdom)
- To make the app's output more predictable, I opted to change the **data structure** of each function's returned output so that they followed a consistent schema. In turn, my tests greatly supported my overall debugging process, as they involved checking the data structure as well as type-checking.
- For some further app-specific challenges, as well as complications and lessons from working with the JavaScript Date object, see my original repo [here](https://github.com/JamieBarlow/weekend-bankhol?tab=readme-ov-file#development-challenges-and-lessons-wrench).

## Upcoming features :hourglass:

- Testing React components with React Testing Library

## License :scroll:

- [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
