import React from "react";
import IconButton from "@mui/material/IconButton";
import { InsertPhoto } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Avatar, Chip, Box } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

const ImageUploadPostForm: React.FC = () => {
  const handleDelete = () => {
    console.log("Delte");
  };
  return (
    <Stack direction="row">
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
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" multiple />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <InsertPhoto sx={{ color: blue[200] }} />
        </IconButton>
      </label>
    </Stack>
  );
};

export default ImageUploadPostForm;
