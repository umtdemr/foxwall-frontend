import React, { useState } from 'react'
import {
    Box,
    Stack,
    Typography,
    Button,
    CircularProgress,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { IProfileInitialState } from '../../../../redux/slices/profile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { cameFollowRequestAction } from '../../../../redux/slices/profile/profile-thunks';

const HeaderActions: React.FC = () => {
    const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleAction = async (actionType: boolean) => {
        setLoading(true);
        await dispatch(cameFollowRequestAction({
            username: state.username!,
            accept: actionType,
        }))
        setLoading(false);
    }

    return (
        <Box
            sx={{
                position: "absolute",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                padding: "20px",
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, .2)",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Stack>
                <Typography variant='subtitle1'>
                    {state.profile?.name} requested to follow you
                </Typography>
                <Stack direction="row" justifyContent="space-around">
                    <Box sx={{position: "relative"}}>
                        <Button 
                            color='error'
                            variant='contained'
                            disabled={loading}
                            onClick={() => handleAction(false)}
                        >
                            Decline
                        </Button>
                        {
                            loading &&  <CircularProgress
                                size={24}
                                sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                                }}
                            />
                        }
                    </Box>
                    <Box sx={{position: "relative"}}>
                        <Button 
                            color='success'
                            variant='contained'
                            disabled={loading}
                            onClick={() => handleAction(true)}
                        >
                            Accept
                        </Button>
                        {
                            loading && <CircularProgress
                                size={24}
                                sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                                }}
                            />
                        }
                    </Box>
                    
                </Stack>
            </Stack>
        </Box>)
}


export default HeaderActions;