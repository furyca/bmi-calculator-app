import { Box, Typography } from "@mui/material";
import React from "react";
import MobileDrawerToggler from "./MobileDrawerToggler";

const Header = () => {
  return (
    <Box sx={{position: 'sticky', top: 0, width: '100%', zIndex: 2}}>
      <Box component={'header'}
        sx={{
          height: 80,
          bgcolor: "#171717",
          p: {xs: 1, md: 2},
          borderBottom: "1px solid gray",
          display: 'flex',
          alignItems: 'center',
          overflowX: 'hidden',
        }}
      >
        <Typography color='secondary' sx={{m: 'auto'}} variant="h6" fontWeight={900}>BMI Calculator (for Adults)</Typography>
      </Box>
      <MobileDrawerToggler />
    </Box>
  );
};

export default Header;
