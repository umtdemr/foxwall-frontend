import React, { useRef } from 'react'
import Box from "@mui/material/Box"

interface ImageOverlayProps {
    handleImageLoad: (e: React.ChangeEvent, where: "avatar" | "cover") => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ children, handleImageLoad }) => {
    const fileField = useRef() as React.MutableRefObject<HTMLInputElement>;
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
        onClick={() => fileField.current.click()}
        >
            <input 
                type="file" 
                style={{display: "none"}} 
                accept="image/*"
                ref={fileField}
                onChange={(e: React.ChangeEvent) => handleImageLoad(e, "avatar")}
            />
            {children}
        </Box>
    );
}


export default ImageOverlay;