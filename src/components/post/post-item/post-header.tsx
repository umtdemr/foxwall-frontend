import React from "react";
import { Link } from "react-router-dom";

import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { RemoveCircle, Check } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
import { GlobalUser } from "../../../types/global/user_types";
import timeDifference from "../../../modules/utils/relative_time";
import { IAuthSlice } from "../../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { deletePost } from "../../../redux/slices/post/post-thunks";
import { useSnackbar } from "notistack";


interface PostHeaderProps {
  user: GlobalUser;
  createdAt: string;
  uuid: string;
}


const PostHeader: React.FC<PostHeaderProps> = ({ user, createdAt, uuid }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const authUserState: IAuthSlice = useSelector((state: RootState) => state.auth);

  const handleDelete = async () => {
    if (window.confirm("Do you really want to remove this post")) {
      const response: any = await dispatch(deletePost(uuid));
      if (response.payload.status === 204) {
        enqueueSnackbar(
          "Post has been deleted",
          {
            variant: "success",
          }
        );
      } else {
        enqueueSnackbar(
          "An error occurred while deleting post",
          {
            variant: "error",
          }
        )
      }
    }
  }

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center">
        <Link to={`/profile/${user.username}`}>
          <Avatar
            sx={{ marginRight: "10px" }}
            src={user.profile.avatar}
          ></Avatar>
        </Link>
        <Stack direction="column">
          <Stack direction="row" alignItems="center">
            <Link to={`/profile/${user.username}`} style={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}>
              <Typography variant="subtitle1" sx={{ marginRight: "5px" }}>
                {user.profile.name}
              </Typography>
            </Link>
            {
              user.profile.is_celebrity && <Avatar
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: theme.palette.primary.main,
                }}
              >
              <Check sx={{ width: 12, height: 12 }} />
            </Avatar>
            }
          </Stack>
          <Typography variant="caption">{user.username} | { timeDifference(createdAt) }</Typography>
        </Stack>
      </Stack>
      {
        authUserState.user.username === user.username && <IconButton 
          aria-label="delete" 
          title="Delete post"
          onClick={() => handleDelete()}
          >
            <RemoveCircle />
        </IconButton>
      }
    </Stack>
  );
};

export default PostHeader;
