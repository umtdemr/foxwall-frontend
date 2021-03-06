import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { ImageInput } from "../../../types/global/form/image_input";


interface ImageUploadPreviewProps {
  images: ImageInput[],
  handleDelete: (id: number) => void;
}

const ImageUploadPreview: React.FC<ImageUploadPreviewProps> = ({ images, handleDelete }) => {
  const shorterName = (name: string) => {
    if (name.length < 6) return name;

    return name[0]+name[1]+"."+name[name.length-3]+name[name.length-2]+name[name.length-1];
  }

  return (
    <Stack spacing={1} direction="row" alignItems="center">
      {
        images.map(image => 
          <Box sx={{ position: "relative" }} key={image.id}>
            <Chip
              onDelete={() => handleDelete(image.id)}
              avatar={
                <Avatar
                  src={image.file}
                  variant="square"
                ></Avatar>
              }
              label={shorterName(image.name)}
            ></Chip>
          </Box>
        )
      }
      
    </Stack>
  );
};

export default ImageUploadPreview;
