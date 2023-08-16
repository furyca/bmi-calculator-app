import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{width: "75%"}}>
      <Typography variant="h5" color='secondary' textAlign={'center'} mb={5}>Info</Typography>
      <Typography px={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere
        cumque quam eaque reiciendis recusandae alias corporis, aspernatur ad.
        Molestiae eius assumenda cum qui unde, rem numquam dolorem dolorum
        facere.
      </Typography>
    </Box>
  );
};

export default About;
