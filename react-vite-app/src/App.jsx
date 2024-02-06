import "./App.css";
import {
  Button,
  Header,
  Heading,
  Text,
  Badge,
  Collapse,
  InfoBox,
  Box,
  DateField,
  Select,
  Carousel,
  Pagination,
  Footer,
  Step,
} from "@cruk/cruk-react-components";

// React datepicker with UK localisation
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
registerLocale("enGB", enGB);
setDefaultLocale("enGB");
import { RxCalendar } from "react-icons/rx";

import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

const InlineText = styled(Text)`
  display: inline;
`;
const LeftBadge = styled(Badge)`
  float: left;
  margin-right: 1em;
`;

function App() {
  return (
    <>
      <Header
        siteSlogan="Direct Debits"
        fullWidth
        logoAltText="Click to refresh app"
        logoLinkTitle="Click to refresh app"
        logoLinkUrl="https://dd-calculator.web.app/"
      >
        <Button>Refresh</Button>
      </Header>
      <Box margin="s">
        <Heading h1 textAlign="center">
          Direct Debit Processing Calendar
        </Heading>
        <LeftBadge backgroundColor="tertiary" borderColor="primary">
          1
        </LeftBadge>
        <Text textSize="l" margin="s">
          Enter any extra company holiday dates which aren't UK bank holidays
          (e.g. any extra Christmas office closure dates) from the year you are
          generating results for, <b>and</b> the year previous to this.
        </Text>
        <Text textSize="l" margin="s">
          Click 'Add' to exclude them from the list of potential working days.
        </Text>
        <Box margin="s" backgroundColor="primary">
          <Text textSize="l" textColor="textOnPrimary">
            <form id="extra-dates__form">
              <label style={{ margin: 10 }} htmlFor="company-dates">
                Please enter in DD/MM/YYYY format and click 'Add' after each
                entry:
              </label>
              <DatePicker
                placeholderText="    Click to select a date"
                showIcon
                id="company-dates"
                pattern="([0-9]+(/[0-9]+)+)"
                icon={<RxCalendar />}
              />
              <Button
                id="addCompanyDatesBtn"
                type="submit"
                style={{ margin: 10 }}
              >
                <FaPlus />
                Add
              </Button>
            </form>
          </Text>
        </Box>

        <Heading h3>H3</Heading>
        <Heading h4>H4</Heading>
        <Heading h5>H5</Heading>
        <Text textSize="xxxxl">xxxxl</Text>
        <Text textSize="xxxl">xxxl</Text>
        <Text textSize="xxl">xxl</Text>
        <Text textSize="xl">xl</Text>
        <Text textSize="l">l</Text>
      </Box>
      <Box backgroundColor="primary">
        <Text textColor="textOnPrimary">this is a box with colours</Text>
      </Box>
      <Button appearance="secondary">Button test</Button>
    </>
  );
}

export default App;
