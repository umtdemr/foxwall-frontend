import React from 'react'
import {
    Box,
    Stack,
    Typography,
    Button,
    CircularProgress,
} from '@mui/material';
import { green } from '@mui/material/colors';

const HeaderActions: React.FC = () => {
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
                    Ümit requested to follow you
                </Typography>
                <Stack direction="row" justifyContent="space-around">
                    <Box sx={{position: "relative"}}>
                        <Button 
                            color='error'
                            variant='contained'
                        >
                            Decline
                        </Button>
                        <CircularProgress
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
                    </Box>
                    <Box sx={{position: "relative"}}>
                        <Button 
                            color='success'
                            variant='contained'
                        >
                            Accept
                        </Button>
                        <CircularProgress
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
                    </Box>
                    
                </Stack>
            </Stack>
        </Box>)
}


export default HeaderActions;