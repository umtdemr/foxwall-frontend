import React from 'react'
import { 
    Box,
    Stack,
    Avatar,
    Typography
} from '@mui/material';
import { IProfileInitialState } from '../../../redux/slices/profile';
import ProfileActions from './profile-actions/profile-actions';
import HeaderActions from './header-actions/header-actions.component';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CelebrityCheck from '../celebrity-check/celebrity-check.component';


interface ProfileHeaderProps {
    data: IProfileInitialState;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
    const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
    return (
        <Box>
            <Box sx={{
                width: "100%",
                position: "relative",
                paddingTop: "39.06%",
                overflow: "hidden",
            }}
            >
                <img src={data.profile?.cover}
                    style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "100%",
                    }}
                    alt="Username's cover"
                />
                {
                    state.is_came_follow_request && <HeaderActions /> 
                }
            </Box>
            <Stack
                sx={{
                    padding: "0 30px;",
                }}
                direction="row"
                justifyContent="space-between"
            >
                <Avatar
                    sx={{ 
                        width: 90,
                        height: 90,
                        border: "3px solid #fff",
                        marginTop: "-30px",
                    }}
                    src={data.profile?.avatar}
                ></Avatar>
                <ProfileActions 
                    
                />
                
            </Stack>
            <Stack sx={{
                    padding: "0 30px;",
                }}
            >
                <Stack direction="row" alignItems="center">
                    <Typography variant="h5" mr={1}>{data.profile?.name}</Typography>
                    { data.profile?.is_celebrity && <CelebrityCheck width={25} height={25} /> }
                </Stack>
                <Typography variant="body2" color="#777">@{data.username}</Typography>
                <Typography variant="body1" mt={2}>{data.profile?.bio}</Typography>
                <Stack mt={1} direction="row">
                    <Typography variant='body2'>
                        {data.follows_count} 
                        &nbsp;
                        <span style={{color: '#777'}}>follows</span>
                    </Typography>
                    <Typography variant='body2' ml={2}>
                        {data.follower_count}
                        &nbsp;
                        <span style={{color: '#777'}}>follower</span>
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
}


export default ProfileHeader;