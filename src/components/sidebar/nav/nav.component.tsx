import React from 'react';
import { Stack } from '@mui/material';
import { Home, Person, Logout } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import NavItem from './nav-item/nav-item.component';
import { IUserInitialState } from '../../../redux/slices/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const SidebarNav: React.FC = () => {
    const theme = useTheme();
    const state: IUserInitialState = useSelector((state: RootState) => state.user);

    return (
        <Stack mt={2}>
            <NavItem 
                Icon={<Home sx={{ 
                    width: 32,
                    height: 32,
                    color: theme.palette.text.primary,
                }}/>} 
                link="/"
                text="Home"
            />
            <NavItem 
                Icon={<Person sx={{ 
                    width: 32,
                    height: 32,
                    color: theme.palette.text.primary,
                }}/>} 
                link={`/profile/${state.username}`}
                text="Profile"
            />
            <NavItem 
                Icon={<Logout sx={{ 
                    width: 32,
                    height: 32,
                    color: theme.palette.text.primary,
                }}/>} 
                link="/logout"
                text="Logout"
            />
        </Stack>
    )
}


export default SidebarNav;