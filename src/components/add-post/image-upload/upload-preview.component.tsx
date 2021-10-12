import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ImageUploadPreview: React.FC = () => {
  const handleDelete = () => {
    console.log("Deltse");
  };
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Box sx={{ position: "relative" }}>
        <Chip
          onDelete={handleDelete}
          avatar={
            <Avatar
              src={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              variant="square"
            ></Avatar>
          }
          label="qweqew.jpg"
        ></Chip>
      </Box>
    </Stack>
  );
};

export default ImageUploadPreview;
