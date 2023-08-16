import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const Form = () => {
  const context = useContext(Context);

  useEffect(() => {
    localStorage.setItem("bmi", JSON.stringify(context.recordList));
  }, [context.recordList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(context.age, context.gender, context.height, context.weight);
  };

  const calculateBMI = (age, gender, height, weight) => {
    const decimalHeight = (height / 100).toFixed(2);
    const date = new Date().toUTCString()

    const result = {
      date,
      value: (weight / Math.pow(decimalHeight, 2)).toFixed(2),
    };
    context.setBmi(result);

    context.setRecordList((prev) => [...prev, result]);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: { sm: "100%", md: "60%" },
        px: { sm: 1, lg: 10 },
      }}
      onSubmit={handleSubmit}
    >
      <RadioGroup label="Gender" row sx={{ mx: "auto" }}>
        <FormControlLabel
          value="Female"
          control={
            <Radio
              checked={context.gender === "Female"}
              onChange={(e) => context.setGender(e.target.value)}
            />
          }
          label="Female"
        />
        <FormControlLabel
          value="Male"
          control={
            <Radio
              checked={context.gender === "Male"}
              onChange={(e) => context.setGender(e.target.value)}
            />
          }
          label="Male"
        />
      </RadioGroup>
      <TextField
        required
        label="Age"
        type="number"
        defaultValue={18}
        onChange={(e) => context.setAge(e.target.value)}
        InputProps={{
          inputProps: { min: 18, max: 120 },
        }}
      />
      <TextField
        required
        label="Height"
        type="number"
        defaultValue={170}
        onChange={(e) => context.setHeight(e.target.value)}
        InputProps={{
          endAdornment: <InputAdornment position="end">cm</InputAdornment>,
        }}
      />
      <TextField
        required
        label="Weight"
        type="number"
        defaultValue={70}
        onChange={(e) => context.setWeight(e.target.value)}
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, py: 2, width: "70%", mx: "auto" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
