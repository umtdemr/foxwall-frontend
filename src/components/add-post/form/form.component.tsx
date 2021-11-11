import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { deepOrange } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import ImageUploadPostForm from "../image-upload/image-upload.component";

const AddPostForm: React.FC = () => {
  return (
    <Box mt={5} sx={{ display: "flex" }}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>NS</Avatar>
      <Box ml={3} sx={{ width: "100%" }}>
        <Paper>
          <TextField
            multiline
            maxRows={4}
            minRows={4}
            sx={{ width: "100%" }}
            placeholder={"What do you think, fox?"}
            label={"Text"}
          />
        </Paper>
        <Box mt={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ImageUploadPostForm />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPostForm;
