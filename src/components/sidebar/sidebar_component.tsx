import React from "react";
import { Search } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleSearchPopup } from "../../redux/slices/layout";
import RequestItems from "../requests/requests.component";
import { ColorModeContext } from "../../modules/contexts/theme/theme.context";
import SwitchButton from "../swith-button/switch-button";

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div className="sidebar" style={{ padding: "10px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Button
          color="primary"
          variant="outlined"
          startIcon={<Search />}
          sx={{
            textTransform: "lowercase",
            borderColor: "#999",
            color: "#666",
          }}
          onClick={() => dispatch(toggleSearchPopup())}
        >
          search users...
        </Button>
        <SwitchButton
          onChange={(e: React.ChangeEvent) => colorMode.toggleColorMode()}
          defaultChecked={colorMode.current === "light" ? false : true}
        />
      </Stack>
      <RequestItems />
    </div>
  );
};

export default SideBar;
