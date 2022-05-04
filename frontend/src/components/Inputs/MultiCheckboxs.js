import * as React from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { conditions } from "../../Utils/helper";

export default function MultiCheckboxs(props) {
  return (
    <Autocomplete
      multiple
      variant="outlined"
      options={conditions.map((option) => option.title)}
      freeSolo
      onChange={props.func}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Conditions"
          onChange={(e) => console.log(e.target.value, params)}
          placeholder="Select Or type here..."
        />
      )}
    />
  );
}
