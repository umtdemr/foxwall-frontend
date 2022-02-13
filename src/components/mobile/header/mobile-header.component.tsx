import React from 'react'
import { Box, Stack, Avatar, Typography } from "@mui/material"
import { useTheme }  from "@mui/material/styles"
import { IUserInitialState } from '../../../redux/slices/user'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'


const MobileHeader: React.FC = () => {
    const state: IUserInitialState = useSelector((state: RootState) => state.user);
    const theme = useTheme();
    return (
        <Box>
            <Stack 
                direction="row" 
                alignItems="center"
                sx={{
                    position: "fixed",
                    top:"0",
                    padding: "10px 0",
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,.8)",
                    zIndex: "99",
                    backdropFilter: "blur(25px)",
                }}
                >
                <Avatar 
                    src={state.avatar}
                />
                <Typography variant="h6" ml={2}>
                    Foxwall
                </Typography>
            </Stack>
        </Box>
        
    )
}


export default MobileHeader;