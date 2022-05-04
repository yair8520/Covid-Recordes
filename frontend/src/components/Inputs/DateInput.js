import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@material-ui/core";

export default function DateInput() {
  const [value, setValue] = React.useState(null);

  return (
    <Grid item>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date Of birth"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Grid>
  );
}
