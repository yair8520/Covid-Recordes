import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CityDropDown from "../Inputs/CityDropDown";
import MultiCheckboxs from "../Inputs/MultiCheckboxs";

const { isValidData, BACKEND } = require("../../Utils/helper");

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(5) },
}));

export default function Form() {
  const classes = useStyles();
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    address: "",
    landline: "",
    cellularphone: "",
    zipcode: "",
    dateofbirth: "",
  });
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    landline: "",
    cellularphone: "",
    zipcode: "",
    dateofbirth: "",
  });
  const [errorMassage, setErrorMassage] = useState("");
  const [checked, setChecked] = useState(false);
  const [conditions, setConditions] = useState([]);
  const [city, setCity] = useState();
  const handleCityDropDown = (event, newInputValue) => setCity(newInputValue);
  const handleMultiCheckboxs = (event, newInputValue) =>
    setConditions(newInputValue);

  const onChange = (i) => {
    checkIsValid(i.target.name, i.target.value);
    setForm({ ...form, [i.target.name]: i.target.value });
  };

  const checkIsValid = (fieldName, value) => {
    if (isValidData[fieldName].rgx.test(value)) {
      setError({ ...error, [fieldName]: "" });
      return;
    }
    setError({ ...error, [fieldName]: isValidData[fieldName].message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notErrors()) {
      const submitForm = { ...form };
      Object.assign(
        submitForm,
        { infected: checked },
        { conditions: conditions },
        { city: city }
      );
      fetchFunction(submitForm, e);
    }
  };
  const notErrors = () => {
    for (let key in error) {
      if (error[key] !== "") return false;
    }
    return true;
  };

  const fetchFunction = (submitForm, e) => {
    return fetch(`${BACKEND.ADDRESS}/api/user/`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        console.log("data", data.message);
        setErrorMassage("Report added successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log("error", error);
        console.log("error.message", error.message);
        setErrorMassage("Report failed please try again!");
      });
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <Grid container justifyContent="flex-end" spacing={4}>
        {Object.keys(form).map((objKey, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <TextField
                variant="outlined"
                error={error[objKey] ? true : false}
                type={objKey === "dateofbirth" ? "date" : "text"}
                helperText={
                  objKey === "dateofbirth"
                    ? "*please select Your Date Of Birth"
                    : error[objKey]
                }
                id={`input${idx}`}
                label={objKey === "dateofbirth" ? null : objKey}
                name={objKey}
                value={form[objKey]}
                fullWidth={true}
                onChange={onChange}
                required={objKey === "zipcode" ? false : true}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} sm={6} md={4}>
          <CityDropDown func={handleCityDropDown} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiCheckboxs func={handleMultiCheckboxs} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => {
                  setChecked((checked) => !checked);
                }}
                checked={checked}
                required={false}
                name="infected"
              />
            }
            label="Have you been infected before?"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button type="Submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h5">{errorMassage}</Typography>
        </Grid>
      </Grid>
    </form>
  );
}
