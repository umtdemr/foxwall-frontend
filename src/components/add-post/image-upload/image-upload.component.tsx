import React from "react";
import IconButton from "@mui/material/IconButton";
import { InsertPhoto } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ImageUploadPreview from "./upload-preview.component";

const Input = styled("input")({
  display: "none",
});

const ImageUploadPostForm: React.FC = () => {
  return (
    <Stack direction="row">
      <ImageUploadPreview />
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
