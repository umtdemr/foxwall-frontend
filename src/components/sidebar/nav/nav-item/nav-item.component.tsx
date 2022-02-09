import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const NavItem: React.FC = () => {
    const theme = useTheme();
    return (
        <Link to="/" className="nav_item__link">
            <Stack 
                direction="row"
                alignItems="center"
                className="nav_item__wrapper"
            >
                <Home sx={{
                    width: 36,
                    height: 36,
                    color: theme.palette.text.primary,
                }}/>
                <Typography variant='h6' sx={{
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                }}>
                    Home
                </Typography>
            </Stack>
        </Link>        
    )
}


export default NavItem;