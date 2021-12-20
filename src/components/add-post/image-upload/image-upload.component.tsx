import React, { ChangeEvent } from "react";
import IconButton from "@mui/material/IconButton";
import { AddAPhoto } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import ImageUploadPreview from "./upload-preview.component";
import { ImageInput } from "../../../types/global/form/image_input";

const Input = styled("input")({
  display: "none",
});


interface ImageUploadPostFormProps {
  images: ImageInput[];
  handleImageChange: (e: ChangeEvent) => void;
  handleImageDelete: (id: number) => void;
}

const ImageUploadPostForm: React.FC<ImageUploadPostFormProps> = ({images, handleImageChange, handleImageDelete}) => {
  const theme = useTheme();
  return (
    <Stack direction="row">
      <ImageUploadPreview 
        images={images}
        handleDelete={handleImageDelete}
      />
      <label htmlFor="icon-button-file">
        <Input 
          accept="image/*"
          id="icon-button-file" 
          type="file" 
          multiple 
          onChange={(e: ChangeEvent) => handleImageChange(e)}
        />
        <IconButton aria-label="upload picture" component="span">
          <AddAPhoto sx={{ color: theme.palette.primary.main }} />
        </IconButton>
      </label>
    </Stack>
  );
};

export default ImageUploadPostForm;
