import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


interface NavItemProps {
    Icon: React.ReactChild;
    link: string;
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({ Icon, link, text }) => {
    const theme = useTheme();
    return (
        <Link 
            to={link} 
            className="nav_item__link"
        >
            <Stack 
                direction="row"
                alignItems="center"
                className="nav_item__wrapper"
            >
                {Icon}
                <Typography variant='h6' ml={1} sx={{
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                }}>
                    {text}
                </Typography>
            </Stack>
        </Link>        
    )
}


export default NavItem;