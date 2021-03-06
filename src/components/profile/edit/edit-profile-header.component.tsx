import React, { useEffect, useState, useCallback } from 'react'
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
import { updateProfile } from '../../../redux/slices/profile/profile-thunks';
import { useHistory } from 'react-router-dom';
import { IUpdateProfile } from '../../../types/global/profile_types';
import { useSnackbar } from 'notistack';
import { logout } from '../../../redux/slices/auth';

const EditProfileHeader: React.FC = () => {
    const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
    const [editUsername, setEditUsername] = useState(state.username);
    const [editName, setEditName] = useState(state.profile?.name);
    const [editBio, setEditBio] = useState(state.profile?.bio);
    const [avatarImg, setAvatarImg] = useState<File>();
    const [coverImg, setCoverImg] = useState<File>();
    const dispatch = useDispatch();
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect(() => {
        setEditName(state.profile?.name);
        setEditUsername(state.username);
        setEditBio(state.profile?.bio);
    }, [state]);

    const handleImageLoadPreview = (imgUrl: string, where: "avatar" | "cover") => {
        if (where === "avatar") {
            // change avatar bg
            const avatarBoxWrapper = document.querySelector(".avatar_box") as HTMLDivElement;
            avatarBoxWrapper.style.backgroundImage = `url(${imgUrl})`;
        } else if (where === "cover") {
            const coverBox = document.querySelector(".cover_box") as HTMLImageElement;
            coverBox.src = imgUrl;
        }
    }
    
    const handleImageLoad = useCallback(
      (e: React.ChangeEvent, where: "avatar" | "cover") => {
          const file = (e.target as HTMLInputElement).files![0];
          handleImageLoadPreview(URL.createObjectURL(file), where);
          if (where === "avatar") {
              setAvatarImg(file);
          } else if (where === "cover") {
              setCoverImg(file);
          }
      },
      [avatarImg, avatarImg]
  )

    const saveProfile = async () => {
        if (editUsername!.trim().length < 3) { 
            alert("Username should be at least 3 character");
            return;
        }
        if (editName!.trim().length < 2) { 
            alert("Name should be at least 2 character");
            return;
        }
        const updateProfileData: IUpdateProfile = {};
        if (editUsername !== state.username) updateProfileData.username = editUsername
        if (editName !== state.profile?.name) updateProfileData.name = editName
        if (editBio !== state.profile?.bio) updateProfileData.bio = editBio
        if (avatarImg !== undefined) updateProfileData.avatar = avatarImg
        if (coverImg !== undefined) updateProfileData.cover = coverImg
        
        const response: any = await dispatch(updateProfile(updateProfileData));
        if (response.payload.status === 200)
        {
            enqueueSnackbar(
                "Profile has been updated",
                {
                    variant: "success",
                }
            );
            history.push(`/profile/${editUsername}/`);
        } else {
            enqueueSnackbar(
                "An error has occurred during updating profile",
                {
                    variant: "error",
                }
            );
        }
        if (editUsername !== state.username) {
            dispatch(logout());
        }
    }

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
                        height: "100%",
                        objectFit: "cover",
                    }}
                    alt="Username's cover"
                    className="cover_box"
                />
                <ImageOverlay
                    handleImageLoad={handleImageLoad}
                    where="cover"
                >
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
                    className="avatar_box"
                >
                    <ImageOverlay
                        handleImageLoad={handleImageLoad}
                        where="avatar"
                    >
                        <FindInPage /> 
                    </ImageOverlay>
                </Box>
            </Stack>
            <Box>
                <Stack direction="row" mt={5} justifyContent="space-between"> 
                    <TextField 
                        label="name"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        sx={{width: "50%"}}
                    />
                    <TextField 
                        label="username"
                        value={editUsername}
                        onChange={(e) => setEditUsername(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                        }}
                        sx={{width: "50%", marginLeft: "10px"}}
                    />
                </Stack>

                <TextField 
                    label="bio"
                    value={editBio}
                    onChange={(e) => setEditBio(e.target.value)}
                    multiline
                    fullWidth
                    margin="normal"
                    maxRows={4}
                    minRows={4}
                />
                <Button 
                    variant="contained" 
                    endIcon={<Check />}
                    onClick={() => saveProfile()}
                >Save</Button>
            </Box>
        </Box>
    )
}

export default EditProfileHeader;
