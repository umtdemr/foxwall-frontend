import React, { useState } from 'react'
import { Box, Stack, Avatar, Typography } from "@mui/material"
import { useTheme }  from "@mui/material/styles"
import { IUserInitialState } from '../../../redux/slices/user'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import MobileNavMenu from '../nav-menu/mobile-nav.component'


const MobileHeader: React.FC = () => {
    const state: IUserInitialState = useSelector((state: RootState) => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    const toggleMobileNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Box>
            <MobileNavMenu 
                isOpen={isOpen}
                toggleNav={toggleMobileNav}
            />
            <Stack 
                direction="row" 
                alignItems="center"
                sx={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    padding: "10px 0",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,.8)" : "rgba(255, 255, 255, 0.8)",
                    zIndex: "99",
                    backdropFilter: "blur(25px)",
                }}
                >
                <button 
                    onClick={() => toggleMobileNav()}
                    style={{background: "transparent", border: "none"}}
                >
                    <Avatar 
                        src={state.avatar}
                    />
                </button>
                <Typography variant="h6" ml={2}>
                    Foxwall
                </Typography>
            </Stack>
        </Box>
        
    )
}


export default MobileHeader;