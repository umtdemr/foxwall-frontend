import React from "react";

import { Button, Divider, Chip, Stack, ListItem, List, ListItemAvatar, Avatar, ListItemText, IconButton } from "@mui/material";
import { Search, Check, Remove } from "@mui/icons-material"

const SideBar: React.FC = () => {
  return (
    <>
      <Button variant="outlined" startIcon={<Search />} sx={{ display: "flex", margin: "10px auto 0 auto;", textTransform: "lowercase" }}>
        search users...
      </Button>
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
    </>
  );
};

export default SideBar;
