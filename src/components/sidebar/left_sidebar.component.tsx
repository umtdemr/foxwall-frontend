import React from 'react';
import { Stack } from '@mui/material';
import HeadWithLogo from '../head/head-with-logo.component';


const LeftSideBar: React.FC = () => {
    return (
        <div className='left_sidebar'>
            <Stack direction="row">
                <HeadWithLogo />
            </Stack>
        </div>
    )
}

export default LeftSideBar;