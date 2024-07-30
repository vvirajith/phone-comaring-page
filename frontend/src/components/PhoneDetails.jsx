import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PhoneDetails = ({ phoneId }) => {
  const [phoneData, setPhoneData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoneData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/phones/${phoneId}`
        );
        setPhoneData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching phone data:", error);
        setLoading(false);
      }
    };
    fetchPhoneData();
  }, [phoneId]);

  if (loading) {
    return (
      <Grid item xs={6}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <CircularProgress />
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            Loading...
          </Typography>
        </div>
      </Grid>
    );
  }
  console.log(phoneData);
  // Display a message if no phone data is available

  return (
    <Grid item xs={4}>
      <Card>
        <CardMedia component="img" height="20%" image={phoneData?.image} />
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }} variant="h2">
            Name : {phoneData?.name}
          </Typography>
          <Typography variant="body2">{`${phoneData?.storage} ${phoneData?.ram} RAM`}</Typography>
          <Typography variant="h6">{phoneData?.price}</Typography>
          <Typography variant="h6">{phoneData?.network?.technology}</Typography>
          <Typography variant="h6">{phoneData?.launch?.announced}</Typography>
          <Typography variant="h6">{phoneData?.launch?.status}</Typography>
          <Typography variant="h6">{phoneData?.body?.dimensions}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PhoneDetails;
