import { useContext, useState } from "react";
import AppContext from "./context/AppContext";
import { Heading, Text, Button, Box } from "@cruk/cruk-react-components";
import { FaMinus } from "react-icons/fa";

import styled from "styled-components";
const InlineText = styled(Text)`
  display: block;
  margin: 0;
`;
const CompDatesBox = styled(Box)`
  display: inline-flex;
  align-items: center;
`;

export default function DisplayCompanyHols() {
  const { companyHols, setCompanyHols, setNonProcessingDays, addToast } =
    useContext(AppContext);
  const handleClick = (id, i) => {
    setNonProcessingDays((oldValues) => {
      return oldValues.filter((item) => item.id !== id);
    });
    setCompanyHols((oldValues) => {
      return oldValues.filter((item) => item.id !== id);
    });
    addToast("Date removed");
  };
  return (
    <>
      {companyHols.length !== 0 && <Heading>Company holiday dates</Heading>}
      <Box style={{ display: "flex", justifyContent: "flex-start" }}>
        {companyHols.map((item, i) => {
          return (
            <CompDatesBox key={i} padding="xxs" margin="xs">
              <InlineText>{item.displayDate}</InlineText>
              <Button
                isIconButton
                appearance="secondary"
                onClick={() => {
                  handleClick(item.id, i);
                }}
                style={{ margin: 10 }}
                size="s"
              >
                <FaMinus />
              </Button>
            </CompDatesBox>
          );
        })}
      </Box>
    </>
  );
}
