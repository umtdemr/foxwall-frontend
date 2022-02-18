import { Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import RequestItems from '../../components/requests/requests.component';
import { IRequestsData } from '../../redux/slices/requests';
import { RootState } from '../../redux/store';


const RequestsPage: React.FC = () => {
    const state: IRequestsData = useSelector((state: RootState) => state.requests);
    return (
        <Stack>

            <RequestItems />
            {
                state.results.length < 1 && <Typography align='center'>
                    No requests
                </Typography>
            }
        </Stack>
    )
}


export default RequestsPage;