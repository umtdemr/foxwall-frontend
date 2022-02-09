import React from 'react';
import { Stack } from '@mui/material';
import NavItem from './nav-item/nav-item.component';

const SidebarNav: React.FC = () => {
    return (
        <Stack mt={2}>
            <NavItem />
            <NavItem />
            <NavItem />
        </Stack>
    )
}


export default SidebarNav;