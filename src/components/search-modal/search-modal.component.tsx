import React, { useState, useEffect } from "react";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ILayoutState, toggleSearchPopup } from "../../redux/slices/layout";
import { RootState } from "../../redux/store";

import { boxStyle } from "./search-model.style";
import SearchResults from "./search-results/search-results.component";
import { useAuthenticatedAPI } from "../../modules/api/api";
import { UserProfile } from "../../types/global/profile_types";
import { LinearProgress } from "@material-ui/core";


const SearchModal: React.FC = () => {
  const state: ILayoutState = useSelector((state: RootState) => state.layout);
  const [query, setQuery] = useState("");
  const [results, setResuts] = useState<UserProfile[]>([]);
  const [resultState, setResultState] = useState<"loading" | "notfound" | "nomessage">("nomessage");
  const dispatch = useDispatch();
  const API = useAuthenticatedAPI();

  useEffect(() => {
    const searchFromAPI = async () => {
      setResultState("loading");
      try {
        const response = await API.get(`/user/search/?q=${query}`);
        setResuts(response.data);
        setResultState("nomessage");
      } catch {
        setResuts([]);
        setResultState("notfound");
      }
    }
    const delayedApiSearch = setTimeout(() => {
      if (query !== "" && query.length > 0) {
        searchFromAPI();
      } else {
        setResuts([]);
        setResultState("nomessage");
      }
    }, 1000);

    return () => clearTimeout(delayedApiSearch);
  }, [query])


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
          <TextField 
            placeholder="username, name..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {
            resultState === "loading" && <LinearProgress sx={{ width: "83.5%", top: '150px', position: "fixed" }} /> 
          }
        </Stack>
        <SearchResults results={results} resultState={resultState} /> 
      </Box>
    </Modal>
  );
};

export default SearchModal;
