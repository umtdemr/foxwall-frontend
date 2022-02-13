import React from 'react'
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { Close } from "@mui/icons-material"


const MobileNavMenu: React.FC = () => {
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
        </Stack>
    )
}


export default MobileNavMenu;