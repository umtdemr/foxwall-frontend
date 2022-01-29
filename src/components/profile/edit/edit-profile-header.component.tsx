import React, { useEffect, useState } from 'react'
import { 
    Box,
    Stack,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material';
import { Check, FindInPage } from "@mui/icons-material"
import ImageOverlay from '../../image-overlay/image-overlay.component';
import { IProfileInitialState } from '../../../redux/slices/profile';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../../redux/slices/profile/profile-thunks';
import { useParams } from 'react-router-dom';

const EditProfileHeader: React.FC = () => {
    const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
    const [editUsername, setEditUsername] = useState(state.username);
    const [editName, setEditName] = useState(state.profile?.name);
    const [editBio, setEditBio] = useState(state.profile?.bio);
    const { username } = useParams<{ username: string }>();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!state.profile?.avatar) {
            dispatch(fetchProfile(username));
        }
    }, [state]);

    return (
        <Box>
            <Box sx={{
                width: "100%",
                position: "relative",
                paddingTop: "39.06%",
                overflow: "hidden",
            }}
            >
                <img src={state.profile?.cover}
                    style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "100%",
                    }}
                    alt="Username's cover"
                />
                <ImageOverlay>
                    <FindInPage /> 
                </ImageOverlay>
            </Box>
            <Stack
                sx={{
                    padding: "0 30px;",
                    position: "relative",
                }}
                direction="row"
                justifyContent="space-between"
            >
                <Box
                    sx={{ 
                        width: 90,
                        height: 90,
                        border: "3px solid #fff",
                        marginTop: "-30px",
                        backgroundImage: `url(${state.profile?.avatar})`,
                        backgroundSize: "100%",
                        backgroundPosition: "center",
                        borderRadius: 90,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <ImageOverlay>
                        <FindInPage /> 
                    </ImageOverlay>
                </Box>
            </Stack>
            <Box>
                <Stack direction="row" mt={5} justifyContent="space-between"> 
                    <TextField 
                        label="name"
                        value={editName}
                        sx={{width: "50%"}}
                    />
                    <TextField 
                        label="username"
                        value={editUsername}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                        }}
                        sx={{width: "50%", marginLeft: "10px"}}
                    />
                </Stack>

                <TextField 
                    label="bio"
                    value={editBio}
                    multiline
                    fullWidth
                    margin="normal"
                    maxRows={4}
                    minRows={4}
                />
                <Button 
                    variant="contained" 
                    endIcon={<Check />}
                >Save</Button>
            </Box>
        </Box>
    )
}

export default EditProfileHeader;