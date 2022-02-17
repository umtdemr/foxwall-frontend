import React from 'react'
import { Avatar, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { Close } from "@mui/icons-material"
import { IUserInitialState } from '../../../redux/slices/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SidebarNav from '../../sidebar/nav/nav.component';


const MobileNavMenu: React.FC = () => {
    const state: IUserInitialState = useSelector((state: RootState) => state.user);
    const theme = useTheme();
    return (
        <Stack
            sx={{
                width: "350px",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
                padding: "20px",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Stack justifyContent="space-between" direction="row" alignItems="center">
                <Typography variant='h6'>Account Info</Typography>
                <IconButton aria-label='close'>
                    <Close />
                </IconButton>
            </Stack>
            <Divider sx={{padding: "20px 0"}}/>
            <Stack mt={4}>
                <Avatar
                    src={state.avatar}
                />
                <Typography variant='h6' mt={2}>
                    {state.name}
                </Typography>
                <Typography variant='caption' color={theme.palette.text.disabled}>
                    @{state.username}
                </Typography>
            </Stack>
            <SidebarNav />
        </Stack>
    )
}


export default MobileNavMenu;