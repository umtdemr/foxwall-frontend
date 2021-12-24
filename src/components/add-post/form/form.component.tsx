import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ImageUploadPostForm from "../image-upload/image-upload.component";
import { IUserInitialState } from "../../../redux/slices/user";
import { RootState } from "../../../redux/store";
import { createPost } from "../../../redux/slices/post/post-thunks";
import { IPostInitialState } from "../../../redux/slices/post";
import { ImageInput } from "../../../types/global/form/image_input";


const AddPostForm: React.FC = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState<ImageInput[]>([]);
  const userState: IUserInitialState = useSelector((state: RootState) => state.user);
  const postState: IPostInitialState = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();


  const handleImageChange = (e: React.ChangeEvent) => {
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
        fileOriginal: image,
      };
      
      localImages.push(appendData);
    }

    setImages(localImages);
  }

  const handleImageDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
  }


  const handleSubmit = async () => {
    dispatch(createPost({
      text,
      images,
    }));
  }

  useEffect(() => {
    if (postState.create.loading) {
      setImages([]);
      setText("");
    }
  }, [postState.create.loading]);

  return (
    <Box mt={5} sx={{ display: "flex" }}>
      <Link to={`/profile/${userState.username}`}>
        <Avatar src={userState.avatar}></Avatar>
      </Link>
      <Box ml={3} sx={{ width: "100%" }}>
        <Paper>
          <TextField
            multiline
            maxRows={4}
            minRows={4}
            sx={{ width: "100%" }}
            placeholder={`What do you think, ${userState.name}?`}
            label={"Text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Paper>
        <Box mt={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ImageUploadPostForm
            images={images} 
            handleImageChange={handleImageChange}
            handleImageDelete={handleImageDelete}
          />
          <Button 
            variant="outlined"
            onClick={handleSubmit}
            disabled={postState.create.loading}
          >Create</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPostForm;
