import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchPopup, ILayoutState } from "../../redux/slices/layout";

import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { 
    Home,
    Search,
    Favorite,
    Person,
} from "@mui/icons-material";
import { useLocation, useHistory } from "react-router-dom";
import { RootState } from '../../redux/store';

enum NAV_TYPES {
    NAN,
    HOME = "/",
    SEARCH = "/search",
    ACTIVITIES = "/activities",
    PROFILE = "/profile/username",
}

const BottomNav = () => {
    const location = useLocation();
    const history = useHistory();
    const [navValue, setNavValue] = useState<NAV_TYPES>(NAV_TYPES.NAN);
    const state: ILayoutState = useSelector((state: RootState) => state.layout);
    const dispatch = useDispatch();
    
    const handleNavChange = (event: React.SyntheticEvent, requestedAction: any) => {
        if (requestedAction === NAV_TYPES.HOME || requestedAction === NAV_TYPES.PROFILE) {
            history.push(requestedAction);
        } else if (requestedAction === NAV_TYPES.SEARCH) {
            dispatch(toggleSearchPopup());
        }
    }

    useEffect(() => {
        if (state.isSearchPopupOpen) {
            setNavValue(NAV_TYPES.SEARCH);
        }
        else if (location.pathname === "/") {
            setNavValue(NAV_TYPES.HOME);
        } else if (location.pathname === "/profile/username" || location.pathname === "/profile/username/edit") {
            setNavValue(NAV_TYPES.PROFILE);
        }
    }, [location, state])

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