import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import logo from "../../images/logo.png";

const HeadWithLogo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar src={logo} />
      <Typography variant="h5">Foxwall</Typography>
    </Box>
  );
};

export default HeadWithLogo;
