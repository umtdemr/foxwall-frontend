import React from 'react'
import { 
    Box,
    Stack,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material';
import { Check, FindInPage } from "@mui/icons-material"
import ImageOverlay from '../../image-overlay/image-overlay.component';

const EditProfileHeader: React.FC = () => {
    return (
        <Box>
            <Box sx={{
                width: "100%",
                position: "relative",
                paddingTop: "39.06%",
            }}
            >
                <img src="https://via.placeholder.com/1024x400"
                    style={{
                        width: "100%",
                        position: "absolute",
                        left: "0",
                        top: "0",
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
                        backgroundImage: "url(https://www.pngrepo.com/png/9649/512/avatar.png)",
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
                        defaultValue="Ümit"
                        sx={{width: "50%"}}
                    />
                    <TextField 
                        label="username"
                        defaultValue="mediumgoal"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                        }}
                        sx={{width: "50%", marginLeft: "10px"}}
                    />
                </Stack>

                <TextField 
                    label="bio"
                    defaultValue="geek over"
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