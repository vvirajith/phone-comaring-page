import React from "react";
import { Card, CardMedia } from "@mui/material";
import image from "../assets/abc.jpg";

const Advertisement = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Xiaomi 14 Advertisement"
      />
    </Card>
  );
};

export default Advertisement;
