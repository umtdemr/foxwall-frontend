import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Button, Typography } from '@mui/material';
import profile, { IProfileInitialState } from '../../../redux/slices/profile';
import ProfileActions from './profile-actions/profile-actions';


interface ProfileHeaderProps {
    data: IProfileInitialState;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
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
                <Box
                    sx={{
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                        width: "100%",
                        height: "100%",
                        padding: "20px",
                        backdropFilter: "blur(10px)",
                        background: "rgba(255, 255, 255, .2)",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <Stack>
                        <Typography variant='subtitle1'>
                            Ümit requested to follow you
                        </Typography>
                        <Stack direction="row" justifyContent="space-around">
                            <Button 
                                color='error'
                                variant='contained'
                            >
                                Decline
                            </Button>
                            <Button 
                                color='success'
                                variant='contained'
                            >
                                Accept
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
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