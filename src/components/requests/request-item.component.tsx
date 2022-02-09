
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import { Check, Remove } from "@mui/icons-material";
import { Avatar, Box, IconButton, ListItem, ListItemAvatar, ListItemText, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IResultCreator } from "../../types/global/profile_types";
import { useDispatch, useSelector } from "react-redux";
import { cameFollowRequestAction } from "../../redux/slices/requests/requests-thunks";
import { removeRequest } from "../../redux/slices/requests";
import { changeIsCameFollowRequest, IProfileInitialState } from "../../redux/slices/profile";
import { RootState } from "../../redux/store";


interface RequestItemProps {
  item: IResultCreator;
}

type TClickEvent = "decline" | "accept"
type TReqMessage = "nan" | TClickEvent


const RequestItem: React.FC<RequestItemProps> = ({ item }) => {
  const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
  const [reqMessage, setReqMessage] = useState<TReqMessage>("nan");
  const [alertMessage, setAlertMessage] = useState("");

  const theme = useTheme();
  const dispatch = useDispatch();

  const clickEvent = async (type: TClickEvent ) => {
    await dispatch(cameFollowRequestAction({
      username: item.username,
      accept: type === "accept" ? true : false,
    }));

    setReqMessage(type);
    dispatch(removeRequest({ username: item.username }));
    if (item.username === state.username) dispatch(changeIsCameFollowRequest({ isCameIssue: false }));
  }

  useEffect(() => {
    if (reqMessage === "accept") setAlertMessage(`Accepted ${item.profile.name}'s request`)
    else if (reqMessage === "decline") setAlertMessage(`Declined ${item.profile.name}'s request`)

    return () => {
      setAlertMessage("");
    }
  }, [reqMessage, item.profile.name]);

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton color="error" edge="end" aria-label="remove" sx={{ marginRight: "2px" }} onClick={() => clickEvent("decline")}>
            <Remove />
          </IconButton>
          <IconButton color="success" edge="end" aria-label="accept" onClick={() => clickEvent("accept")}>
            <Check />
          </IconButton>
        </>
      }
    >
      <Link to={`/profile/${item.username}/`}>
        <ListItemAvatar>
          <Avatar
            src={item.profile.avatar}
          />
        </ListItemAvatar>
      </Link>
      <Link 
        to={`/profile/${item.username}/`}
        style={{
          textDecoration: "none",
        }} 
      >
        <ListItemText
          primary={item.profile.name}
          sx={{
            color: theme.palette.text.primary,
          }}
        />
      </Link>
      {
       reqMessage !== "nan" && <Box className="alert_section" sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "1",
        }}>
        <Alert severity={reqMessage === "decline" ? "error": "success"}>
          {alertMessage}
        </Alert>
        </Box>
      }

    </ListItem>
  );
}

export default RequestItem;
