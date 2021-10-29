import React from 'react'
import Box from "@mui/material/Box"

const ImageOverlay: React.FC = ({ children }) => {
    return (
        <Box sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.6)",
            cursor: "pointer",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            left: "0",
            top: "0",
        }}
        onClick={() => alert("there is more...")}
        >
            {children}
        </Box>
    );
}


export default ImageOverlay;