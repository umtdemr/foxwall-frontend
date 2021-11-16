import React, { useState, useEffect } from 'react'

import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { 
    Home,
    Search,
    Favorite,
    Person,
} from "@mui/icons-material";
import { useLocation, useHistory } from "react-router-dom";

enum NAV_TYPES {
    NAN,
    HOME = "/home",
    SEARCH = "/search",
    ACTIVITIES = "/activities",
    PROFILE = "/qwe",
}

const BottomNav = () => {
    const location = useLocation();
    const history = useHistory();
    const [navValue, setNavValue] = useState<NAV_TYPES>(NAV_TYPES.NAN);
    
    const handleNavChange = (event: React.SyntheticEvent, value: any) => {
        history.push(value);
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setNavValue(NAV_TYPES.HOME);
        } else if (location.pathname === "/profile/username" || location.pathname === "/profile/username/edit") {
            setNavValue(NAV_TYPES.PROFILE);
        }
    }, [location])

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation 
                value={navValue}
                onChange={handleNavChange}
            >
                <BottomNavigationAction value={NAV_TYPES.HOME} label="Home" icon={<Home />} />
                <BottomNavigationAction value={NAV_TYPES.SEARCH} label="Search" icon={<Search />} />
                <BottomNavigationAction value={NAV_TYPES.ACTIVITIES} label="Activities" icon={<Favorite />} />
                <BottomNavigationAction value={NAV_TYPES.PROFILE} label="Profile" icon={<Person />} />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;