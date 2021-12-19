import React, { useState } from "react";
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


const AddPostForm: React.FC = () => {
  const [text, setText] = useState("");
  const state: IUserInitialState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();


  const handleSubmit = async () => {
    dispatch(createPost({
      text,
    }));
  }

  return (
    <Box mt={5} sx={{ display: "flex" }}>
      <Link to={`/profile/${state.username}`}>
        <Avatar src={state.avatar}></Avatar>
      </Link>
      <Box ml={3} sx={{ width: "100%" }}>
        <Paper>
          <TextField
            multiline
            maxRows={4}
            minRows={4}
            sx={{ width: "100%" }}
            placeholder={`What do you think, ${state.name}?`}
            label={"Text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Paper>
        <Box mt={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ImageUploadPostForm />
          <Button variant="outlined" onClick={handleSubmit}>Create</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPostForm;
