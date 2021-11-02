
import React, { useState, useEffect } from "react";
import { Check, Remove } from "@mui/icons-material";
import { Avatar, Box, IconButton, ListItem, ListItemAvatar, ListItemText, Alert } from "@mui/material";
import { IRequestItem } from "./request-item.type";


interface RequestItemProps {
  item: IRequestItem;
  handleDelete: (id: number) => void;
}

type TClickEvent = "decline" | "accept"
type TReqMessage = "nan" | TClickEvent


const RequestItem: React.FC<RequestItemProps> = ({ item, handleDelete }) => {
  const [reqMessage, setReqMessage] = useState<TReqMessage>("nan");
  const [alertMessage, setAlertMessage] = useState("");

  const clickEvent = (type: TClickEvent ) => {
    setReqMessage(type);
    handleDelete(item.id);
  }

  useEffect(() => {
    if (reqMessage === "accept") setAlertMessage(`Accepted ${item.name}'s request`)
    else if (reqMessage === "decline") setAlertMessage(`Declined ${item.name}'s request`)

    return () => {
      setAlertMessage("");
    }
  }, [reqMessage, item.name]);

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
      <ListItemAvatar>
        <Avatar
          src="https://www.pngrepo.com/png/9649/512/avatar.png"
        />
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
      />
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
