import React from 'react'

import {
    Box,
    Skeleton,
    Stack,
} from "@mui/material"

const ProfileHeaderSkeleton: React.FC = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: "100%",
                    paddingTop: "39.06%",
                    position: "relative",
                }}
            >
                <Skeleton 
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                    }}
                />
            </Box>
            
            <Stack
                sx={{
                    padding: "0 30px;",
                }}
                direction="row"
                justifyContent="space-between"
            >
                <Skeleton
                    sx={{ 
                        marginTop: "-30px",
                    }}
                    width={90}
                    height={90}
                    variant="circular"
                />
                <Skeleton 
                    sx={{ 
                        marginTop: "10px",
                    }}
                    width={100}
                    height={30}
                />
            </Stack>
            <Stack sx={{
                    padding: "0 30px;",
                }}
            >
                <Skeleton variant="text" width={70} height={15} />
                <Skeleton variant="text" width={40} height={15} />
                <Skeleton variant="text" width={120} height={15} sx={{marginTop: "10px"}} />
            </Stack>
        </Box>
    );
}

export default ProfileHeaderSkeleton;