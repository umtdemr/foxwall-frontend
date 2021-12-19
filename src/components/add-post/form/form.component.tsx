import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { Button, Skeleton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ImageUploadPostForm from "../image-upload/image-upload.component";
import { IUserInitialState } from "../../../redux/slices/user";
import { RootState } from "../../../redux/store";
import { createPost } from "../../../redux/slices/post/post-thunks";
import { IPostInitialState } from "../../../redux/slices/post";


const AddPostForm: React.FC = () => {
  const [text, setText] = useState("");
  const userState: IUserInitialState = useSelector((state: RootState) => state.user);
  const postState: IPostInitialState = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();


  const handleSubmit = async () => {
    dispatch(createPost({
      text,
    }));
  }

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
          <ImageUploadPostForm />
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
