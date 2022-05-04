import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
const { citysList } = require("../../Utils/helper");

export default function CityDropDown(props) {
  return (
    <Stack spacing={2}>
      <Autocomplete
        fullWidth={true}
        onInputChange={props.func}
        options={citysList.map((option) => option.city)}
        renderInput={(params) => (
          <TextField required fullWidth={true} {...params} label="cityList" />
        )}
      />
    </Stack>
  );
}
