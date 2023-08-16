import { Box, Button, Drawer } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Menu = () => {
  const context = useContext(Context)

  return (
    <>
      <Box sx={{ display: {xs: "none", lg: 'block'}, width: "25%", height: "100%", border: 1, borderRadius: 1 }}>
        <Link to="">
          <Button fullWidth sx={{ borderBottom: 1, height: 70 }}>
            BMI Calculator
          </Button>
        </Link>
        <Link to="about">
          <Button fullWidth sx={{ borderBottom: 1, height: 70 }}>
            What is BMI?
          </Button>
        </Link>
        <Link to="history">
          <Button fullWidth sx={{ borderBottom: 1, height: 70 }}>
            Records
          </Button>
        </Link>
        
      </Box>
      <Drawer anchor='right' open={context.isOpen} onClose={() => context.setOpen(false)}>
        <Link to="">
          <Button fullWidth sx={{ borderBottom: 1, height: 70 }}>
            BMI Calculator
          </Button>
        </Link>
        <Link to="about">
          <Button fullWidth sx={{ borderBottom: 1, height: 70 }}>
            What is BMI?
          </Button>
        </Link>
        <Link to="history">
          <Button fullWidth sx={{ borderBottom: 1, height: 70 }}>
            Records
          </Button>
        </Link>
      </Drawer>
    </>
  );
};

export default Menu;
