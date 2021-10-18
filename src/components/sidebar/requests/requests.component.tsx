import React, { useState } from "react";
import { Chip, Divider, List, Stack, Collapse } from "@mui/material";
import { TransitionGroup } from 'react-transition-group';

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
    let t_requests = requests;
    t_requests = t_requests.filter((item) => item.id !== id);
    console.log(t_requests);
    setRequests(t_requests);
  }

  return (
    <Stack direction="column">
      <Divider sx={{ marginTop: "20px" }}>
        <Chip label="requests" />
      </Divider>
      <List>
        <TransitionGroup>
          {
            requests.map((request_item) => (
                <Collapse key={request_item.id}>
                   <RequestItem item={request_item} handleDelete={deleteItem}/>
                </Collapse>
              )
            )
          }
        </TransitionGroup>
      </List>
    </Stack>
  )
}


export default RequestItems;
