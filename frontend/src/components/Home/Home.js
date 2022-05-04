import React from "react";
import Form from "../Form/Form";
import { Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div
      style={{
        marginTop: 20,
      }}
    >
      <Typography variant="h4" align="center">
        Please fill up this Form
      </Typography>
      <Typography align="center">(*indicates a required field)</Typography>
      <Form />
    </div>
  );
}
