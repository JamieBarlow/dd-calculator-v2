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
        <Heading>Direct Debit Processing Calendar</Heading>
        <LeftBadge backgroundColor="tertiary" borderColor="primary">
          1
        </LeftBadge>
        <Text textSize="l" margin="none" marginLeft="s">
          Please enter any extra company holiday dates (e.g. Christmas office
          closure dates) in the field below and click 'Add' to exclude them from
          the list of potential working days. Make sure to include holidays for
          both the current year <em>and</em> the previous year.
        </Text>
        <Text textSize="l">
          <label htmlFor="company-dates">
            Please enter in DD/MM/YYYY format and click 'Add' after each entry:
          </label>
        </Text>
            
        <Heading h3>H3</Heading>
        <Heading h4>H4</Heading>
        <Heading h5>H5</Heading>
        <Text textSize="xxxxl">xxxxl</Text>
        <Text textSize="xxxl">xxxl</Text>
        <Text textSize="xxl">xxl</Text>
        <Text textSize="xl">xl</Text>
        <Text textSize="l">l</Text>
      </Box>
      <Button appearance="secondary">Button test</Button>
    </>
  );
}

export default App;
