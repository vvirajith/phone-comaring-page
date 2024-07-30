import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const SpecificationTable = ({ phoneOne, phoneTwo }) => {
  if (!phoneOne && !phoneTwo) {
    return (
      <Typography variant="h6" align="center">
        Please select phones to compare.
      </Typography>
    );
  }

  const specs = [
    { label: "Name", key: "name" },
    { label: "Storage", key: "storage" },
    { label: "RAM", key: "ram" },
    { label: "Price $", key: "price" },
    { label: "Network Technology", key: "network.technology" },
    { label: "Announced", key: "launch.announced" },
    { label: "Status", key: "launch.status" },
    { label: "Dimensions", key: "body.dimensions" },
  ];

  const getSpecValue = (phone, key) => {
    if (!phone) return "-";
    const keys = key.split(".");
    let value = phone;
    for (let k of keys) {
      value = value ? value[k] : "-";
    }
    return value || "-";
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              {phoneOne && (
                <img
                  src={phoneOne.image} // Use the appropriate field for image URL
                  alt={phoneOne.name}
                  style={{ maxWidth: "50%", height: "auto" }}
                />
              )}
            </TableCell>
            <TableCell>
              {phoneTwo && (
                <img
                  src={phoneTwo.image} // Use the appropriate field for image URL
                  alt={phoneTwo.name}
                  style={{ maxWidth: "50%", height: "auto" }}
                />
              )}
            </TableCell>
          </TableRow>
          {specs.map((spec) => (
            <TableRow key={spec.key}>
              <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                {spec.label}
              </TableCell>
              <TableCell sx={{ fontSize: "20px" }}>
                {getSpecValue(phoneOne, spec.key)}
              </TableCell>
              <TableCell sx={{ fontSize: "20px" }}>
                {getSpecValue(phoneTwo, spec.key)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpecificationTable;
