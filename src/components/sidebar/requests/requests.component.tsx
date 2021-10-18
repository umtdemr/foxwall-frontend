import React, { useState } from "react";
import { Chip, Divider, List, Stack } from "@mui/material";

import RequestItem from "./request-item.component";
import { IRequestItem } from "./request-item.type";


const RequestItems: React.FC = () => {
  const [requests, setRequests] = useState<IRequestItem[]>([
    {
      id: 1,
      name: "Ümit Demir",
    },
    {
      id: 2,
      name: "Demir Ümit",
    }
  ])

  const deleteItem = (id: number) => {
    console.log("requested to delete " + id);
  }

  return (
    <Stack direction="column">
      <Divider sx={{ marginTop: "20px" }}>
        <Chip label="requests" />
      </Divider>
      <List>
        {
          requests.map((request_item) => <RequestItem item={request_item}/>
          )
        }
      </List>
    </Stack>
  )
}


export default RequestItems;
