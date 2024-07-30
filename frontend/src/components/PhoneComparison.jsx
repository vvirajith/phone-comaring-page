import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import SpecificationTable from "./SpecificationTable";

const PhoneComparison = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoneOne, setSelectedPhoneOne] = useState(null);
  const [selectedPhoneTwo, setSelectedPhoneTwo] = useState(null);

  const handleChangeOne = (event) => {
    setSelectedPhoneOne(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setSelectedPhoneTwo(event.target.value);
  };

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/phones");
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching phones:", error);
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  if (loading) {
    return (
      <Grid container justifyContent="center">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="phone-select-label-1">Select Phone</InputLabel>
          <Select
            labelId="phone-select-label-1"
            id="phone-select-1"
            value={selectedPhoneOne}
            onChange={handleChangeOne}
            label="Select Phone"
          >
            {phones.map((phone) => (
              <MenuItem key={phone._id} value={phone}>
                {phone.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="phone-select-label-2">Select Phone</InputLabel>
          <Select
            labelId="phone-select-label-2"
            id="phone-select-2"
            value={selectedPhoneTwo}
            onChange={handleChangeTwo}
            label="Select Phone"
          >
            {phones.map((phone) => (
              <MenuItem key={phone._id} value={phone}>
                {phone.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <SpecificationTable
          phoneOne={selectedPhoneOne}
          phoneTwo={selectedPhoneTwo}
        />
      </Grid>
    </Grid>
  );
};

export default PhoneComparison;
