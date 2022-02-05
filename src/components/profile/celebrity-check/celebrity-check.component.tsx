import React from 'react';
import { Avatar } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Check } from "@mui/icons-material"


const CelebrityCheck: React.FC = () => {
    const theme = useTheme();
    return (
        <Avatar
            sx={{
                width: 16,
                height: 16,
                bgcolor: theme.palette.primary.main,
                color: "#fff",
            }}
        >
            <Check sx={{ width: 12, height: 12 }} />
        </Avatar>
    )
}


export default CelebrityCheck;