import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


const ProfileHeader: React.FC = () => {
    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "200px",
            }}
            >
                <img src="https://via.placeholder.com/1024x200"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
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
                    src="https://www.pngrepo.com/png/9649/512/avatar.png"
                ></Avatar>
                <button className="button_outline light align-baseline" style={{ 
                    marginTop: "10px",
                 }}>
                    edit profile
                </button>
            </Stack>
        </Box>
    );
}


export default ProfileHeader;