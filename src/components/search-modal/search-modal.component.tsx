import React from "react";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Modal, Stack, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ILayoutState, toggleSearchPopup } from "../../redux/slices/layout";
import { RootState } from "../../redux/store";
import { useTheme } from "@mui/material/styles";

import { boxStyle } from "./search-model.style";
import { Link } from "react-router-dom";


const SearchModal: React.FC = () => {
  const state: ILayoutState = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Modal
      open={state.isSearchPopupOpen}
      onClose={() => dispatch(toggleSearchPopup())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Typography variant="h5" mb={2}>
          Search from foxwallers
        </Typography>
        <Stack>
          <TextField placeholder="username, name..." />
        </Stack>
        <Stack>
          <List>
            <ListItem>
              <Link to="/">
                <ListItemAvatar>
                  <Avatar
                    src="https://www.pngrepo.com/png/9649/512/avatar.png"
                  />
                </ListItemAvatar>
              </Link>
              <Link to="/">
                <ListItemText
                    primary="John doe"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                />
              </Link>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Modal>
  );
};

export default SearchModal;
