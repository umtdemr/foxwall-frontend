import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import profile, { IProfileInitialState } from '../../../redux/slices/profile';


interface ProfileHeaderProps {
    data: IProfileInitialState;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
    const history = useHistory();
    const routeMatch = useRouteMatch();
    return (
        <Box>
            <Box sx={{
                width: "100%",
                position: "relative",
                paddingTop: "39.06%",
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
                <button 
                    className="button_outline dark align-baseline"
                    onClick={() => history.push(`${routeMatch.url}/edit`)}
                    style={{ 
                        marginTop: "10px",
                    }}>
                    edit profile
                </button>
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