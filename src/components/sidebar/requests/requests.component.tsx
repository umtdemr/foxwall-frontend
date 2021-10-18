import { Check, Remove } from "@mui/icons-material";
import { Avatar, Chip, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material";
import React from "react";


const RequestItems: React.FC = () => {
  return (
    <Stack direction="column">
      <Divider sx={{ marginTop: "20px" }}>
        <Chip label="requests" />
      </Divider>
      <List >
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
            primary="Ümit Demir"
          />
        </ListItem>
      </List>

    </Stack>
  )
}


export default RequestItems;
