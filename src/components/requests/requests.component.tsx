import React, { useState } from "react";
import { Chip, Divider, List, Stack, Collapse } from "@mui/material";
import { TransitionGroup } from 'react-transition-group';

import RequestItem from "./request-item.component";
import { IRequestItem } from "./request-item.type";
import { useSelector } from "react-redux";
import { IRequestsData } from "../../redux/slices/requests";
import { RootState } from "../../redux/store";


const RequestItems: React.FC = () => {
  const [requests, setRequests] = useState<IRequestItem[]>([
    {
      id: 1,
      name: "Ümit Demir",
    },
    {
      id: 2,
      name: "Demir Ümit",
    },
  ])
  
  const state: IRequestsData = useSelector((state: RootState) => state.requests);

  const deleteItem = (id: number) => {
    let tempRequests = requests;
    tempRequests = tempRequests.filter((item) => item.id !== id);
    setRequests(tempRequests);
  }

  return (
    <Stack direction="column">
      <Divider sx={{ marginTop: "20px" }}>
        <Chip label="requests" />
      </Divider>
      <List>
        <TransitionGroup>
          {
            requests.map((requestItem) => (
                <Collapse key={requestItem.id}>
                   <RequestItem item={requestItem} handleDelete={deleteItem}/>
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
