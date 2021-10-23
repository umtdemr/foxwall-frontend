import React from "react";
import { Box, Modal, Stack, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ILayoutState, toggleSearchPopup } from "../../redux/slices/layout";
import { RootState } from "../../redux/store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  border: "2px solid #999",
  boxShadow: 24,
  p: 4,
};

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
      <Box sx={style}>
        <Stack>
          <TextField placeholder="search users..." />
        </Stack>
      </Box>
    </Modal>
  );
};

export default SearchModal;
