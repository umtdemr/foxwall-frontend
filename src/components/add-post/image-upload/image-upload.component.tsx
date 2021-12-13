import React, { ChangeEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { AddAPhoto } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ImageUploadPreview from "./upload-preview.component";
import { useTheme } from "@mui/material/styles";
import { number } from "yup/lib/locale";
import { ImageInput } from "../../../types/global/form/image_input";

const Input = styled("input")({
  display: "none",
});

const ImageUploadPostForm: React.FC = () => {
  const theme = useTheme();
  const [images, setImages] = useState<ImageInput[]>([]);
  const handleImageChange = (e: ChangeEvent) => {
    const files = (e.target as HTMLInputElement).files!;
    if (files.length > 2) return;
  
    setImages([]);
    const localImages: ImageInput[] = [];
    for (let index = 0; index < files.length; index++) {
      const image = files[index];
      const appendData = {
        id: localImages.length,
        file: URL.createObjectURL(image),
        name: image.name,
      };
      
      localImages.push(appendData);
    }

    setImages(localImages);
  }

  const handleImageDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
  }

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
