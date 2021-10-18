
import { Check, Remove } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { IRequestItem } from "./request-item.type";


interface RequestItemProps {
  item: IRequestItem;
}


const RequestItem: React.FC<RequestItemProps> = ({ item }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton color="error" edge="end" aria-label="remove" sx={{ marginRight: "2px" }}>
            <Remove />
          </IconButton>
          <IconButton color="success" edge="end" aria-label="accept">
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
    </ListItem>
  );
}

export default RequestItem;
