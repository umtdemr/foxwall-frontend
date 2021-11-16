import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const HeadWithLogo: React.FC = () => {
  const theme = useTheme();

  return (
    <Link to="/" style={{
      textDecoration: "none",
      color: theme.palette.text.primary,
    }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={logo} />
        <Typography variant="h5">Foxwall</Typography>
      </Box>
    </Link>
  );
};

export default HeadWithLogo;
