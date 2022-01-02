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
                <Typography variant="h5">{data.profile?.name}</Typography>
                <Typography variant="body2" color="#777">@{data.username}</Typography>
                <Typography variant="body1" mt={2}>{data.profile?.bio}</Typography>
            </Stack>
        </Box>
    );
}


export default ProfileHeader;