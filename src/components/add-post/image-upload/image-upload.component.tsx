import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { InsertPhoto } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const ImageUploadPostForm: React.FC = () => {
  return (
    <label htmlFor="icon-button-file">
      <Input accept="image/*" id="icon-button-file" type="file" multiple />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <InsertPhoto sx={{ color: blue[200] }} />
      </IconButton>
    </label>
  );
};

export default ImageUploadPostForm;
