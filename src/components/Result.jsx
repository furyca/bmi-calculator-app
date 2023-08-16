import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";

const Result = () => {
  const context = useContext(Context);
  return (
    <Box sx={{ width: "40%", m: "auto", textAlign: "center" }}>
      <Typography variant="h4">{context.bmi?.value} kg/m²</Typography>
      <Typography variant="h5" mt={5}>
        {context.bmi?.value >= 30
          ? "Obese"
          : context.bmi?.value >= 25
          ? "Overweight"
          : context.bmi?.value >= 18.5
          ? "Normal"
          : "Underweight"}
      </Typography>
    </Box>
  );
};

export default Result;
