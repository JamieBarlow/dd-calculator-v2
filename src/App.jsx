// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import {
  Button,
  Header,
  Heading,
  Text,
  Badge,
  Collapse,
  InfoBox,
  Box,
  Carousel,
  Pagination,
  Footer,
  Step,
} from "@cruk/cruk-react-components";
import CompanyHolsForm from "./CompanyHolsForm";
import YearSelectForm from "./YearSelectForm";
import DisplayResults from "./DisplayResults";
import Toasts from "./Toasts";

// Context API
import { ContextProvider } from "./context/AppContext";

// Icons
import { FaRegQuestionCircle } from "react-icons/fa";

// Custom styling with styled-components
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
      <ContextProvider>
        <Header
          siteSlogan="Direct Debits"
          fullWidth
          logoAltText="Click to refresh app"
          logoLinkTitle="Click to refresh app"
          logoLinkUrl="https://dd-calculator.web.app/"
        >
          <Button>Refresh</Button>
        </Header>
        <Box marginVertical="s" marginHorizontal="l">
          <Heading h1 textAlign="center">
            Direct Debit Processing Calendar
          </Heading>
          <LeftBadge backgroundColor="tertiary" borderColor="primary">
            1
          </LeftBadge>
          <Text marginHorizontal="xl" textSize="l">
            Enter any extra company holiday dates which aren't UK bank holidays
            (e.g. any extra Christmas office closure dates) from the year you
            are generating results for, <b>and</b> for the year previous to
            this.
          </Text>
          <InfoBox
            backgroundColor="#E40173"
            descriptionTextColor="#fff"
            icon={<FaRegQuestionCircle />}
            size="1.5em"
            titleTextColor="#fff"
            marginHorizontal="xl"
          >
            <Collapse
              headerTitleText="More info"
              headerTitleTextColor="white"
              id="default"
              onOpenChange={function noRefCheck() {}}
            >
              <Box>
                <Text textColor="white">
                  Holiday/office closure dates from the previous year may affect
                  calculations for the start of the current year, so it is
                  important to include these as well.
                </Text>
                <Text textColor="white">
                  For example, if you are calculating processing dates for 2024,
                  you will need to include company holiday dates from both 2023
                  and 2024.
                </Text>
                <Text textColor="white">
                  You do not need to add national bank holidays, these are
                  accounted for.
                </Text>
              </Box>
            </Collapse>
          </InfoBox>
          <Text marginHorizontal="xl" textSize="l" marginTop="s">
            Click 'Add' to exclude them from the list of potential working days.
          </Text>
          <Box marginHorizontal="xl" backgroundColor="primary">
            <CompanyHolsForm />
          </Box>
          <LeftBadge backgroundColor="tertiary" borderColor="primary">
            2
          </LeftBadge>
          <Text textSize="l" marginHorizontal="xl" margin="s">
            Choose the year you want to calculate processing dates for.
          </Text>
          <Box marginHorizontal="xl" margin="s" backgroundColor="primary">
            <YearSelectForm />
          </Box>
        </Box>
        <Box marginVertical="s" marginHorizontal="l">
          <DisplayResults />
        </Box>
        <Toasts />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
