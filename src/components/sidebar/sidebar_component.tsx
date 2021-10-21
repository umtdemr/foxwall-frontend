import React from "react";

import { Button, } from "@mui/material";
import { Search } from "@mui/icons-material"
import RequestItems from "../requests/requests.component";

const SideBar: React.FC = () => {
  return (
    <>
      <Button color="primary" variant="outlined" startIcon={<Search />} sx={{ display: "flex", margin: "10px auto 0 auto;", textTransform: "lowercase", borderColor: "#999", color: "#666" }}>
        search users...
      </Button>
      <RequestItems />
    </>
  );
};

export default SideBar;
