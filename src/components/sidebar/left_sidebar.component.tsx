import React from 'react';
import { Stack } from '@mui/material';
import HeadWithLogo from '../head/head-with-logo.component';
import SidebarNav from './nav/nav.component';


const LeftSideBar: React.FC = () => {
    return (
        <div className='left_sidebar'>
            <Stack>
                <HeadWithLogo />
                <SidebarNav />
            </Stack>
        </div>
    )
}

export default LeftSideBar;