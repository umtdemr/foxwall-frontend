import React from "react";
import { Chip, Divider, List, Stack, Collapse } from "@mui/material";
import { TransitionGroup } from 'react-transition-group';

import RequestItem from "./request-item.component";
import { useSelector } from "react-redux";
import { IRequestsData } from "../../redux/slices/requests";
import { RootState } from "../../redux/store";
import RequestItemSkeleton from "./request-item.skeleton";


const RequestItems: React.FC = () => {
  
  const state: IRequestsData = useSelector((state: RootState) => state.requests);

  return (
    <Stack direction="column">
      {
        state.results.length > 0 && <Divider sx={{ marginTop: "20px" }}>
          <Chip label="requests" />
        </Divider>
      }
      <List>
        <TransitionGroup>
          {
            state.results.map((requestItem) => (
                <Collapse key={requestItem.id}>
                   <RequestItem item={requestItem.creator} />
                </Collapse>
              )
            )
          }
        </TransitionGroup>
        {
          state.loading && [0, 1].map(id => <RequestItemSkeleton key={id} />)
        }
      </List>
    </Stack>
  )
}


export default RequestItems;
