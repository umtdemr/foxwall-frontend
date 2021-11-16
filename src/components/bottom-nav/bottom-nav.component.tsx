import React from 'react'

import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { 
    Home,
    Search,
    Favorite,
    Person,
} from "@mui/icons-material";


const BottomNav = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Search" icon={<Search />} />
                <BottomNavigationAction label="Activities" icon={<Favorite />} />
                <BottomNavigationAction label="Profile" icon={<Person />} />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;