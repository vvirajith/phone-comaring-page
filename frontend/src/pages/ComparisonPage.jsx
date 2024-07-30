import React from "react";
import { Container, TextField, Box } from "@mui/material";
import PhoneComparison from "../components/PhoneComparison";
import Advertisement from "../components/Advertisement";

const ComparisonPage = () => {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <PhoneComparison />
      </Box>
      <Box my={4}>
        <Advertisement />
      </Box>
    </Container>
  );
};

export default ComparisonPage;
