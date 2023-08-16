import { IconButton } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";
import MenuIcon from '@mui/icons-material/Menu';

const MobileDrawerToggler = () => {
  const context = useContext(Context);

  return (
    <IconButton
      sx={{
        display: { xs: "block", lg: "none" },
        ml: 'auto',
      }}
      variant="contained"
      onClick={() => context.setOpen(true)}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MobileDrawerToggler;
