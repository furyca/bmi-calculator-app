import { Box } from "@mui/material";
import Result from "./Result";
import Info from "./Info";
import Form from "./Form";

const Calculator = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: {xs: '80%', md: '90%'}, gap: 2}}>
      <Box sx={{ display: "flex", flexDirection: {xs: 'column', md: 'row'}, justifyContent: {md: 'space-between'}, gap: 2, flexGrow: 1 }}>
        <Form />
        <Result />
      </Box>
      <Info />
    </Box>
  );
};

export default Calculator;
