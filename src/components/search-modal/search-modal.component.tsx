import React from "react";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ILayoutState, toggleSearchPopup } from "../../redux/slices/layout";
import { RootState } from "../../redux/store";

import { boxStyle } from "./search-model.style";
import SearchResults from "./search-results/search-results.component";


const SearchModal: React.FC = () => {
  const state: ILayoutState = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

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
        <SearchResults /> 
      </Box>
    </Modal>
  );
};

export default SearchModal;
