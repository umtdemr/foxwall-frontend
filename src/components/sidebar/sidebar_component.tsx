import React from "react";
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchPopup } from "../../redux/slices/layout";
import type { ILayoutState } from "../../redux/slices/layout";
import type { RootState } from "../../redux/store";
import RequestItems from "../requests/requests.component";
import { ColorModeContext } from "../../modules/contexts/theme/theme.context";

const SideBar: React.FC = () => {
  const state: ILayoutState = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        startIcon={<Search />}
        sx={{
          display: "flex",
          margin: "10px auto 0 auto;",
          textTransform: "lowercase",
          borderColor: "#999",
          color: "#666",
        }}
        onClick={() => dispatch(toggleSearchPopup())}
      >
        search users...
      </Button>
      <RequestItems />
      <Button onClick={() => colorMode.toggleColorMode()}>DEMO THEME</Button>
    </>
  );
};

export default SideBar;
