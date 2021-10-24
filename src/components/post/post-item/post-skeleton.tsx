import React from "react";

import { Skeleton, Box, Paper, Stack, Avatar, Typography } from "@mui/material";

const PostSkeleton: React.FC = () => {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: "10px" }}>
        <Stack direction="row">
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ marginRight: "10px" }}
          />
          <Stack direction="column">
            <Stack direction="row" alignItems="center">
              <Skeleton variant="text" width={100} height={10} />
            </Stack>
            <Skeleton variant="text" width={70} height={10} />
          </Stack>
        </Stack>
        <Box mt={4}>
          <Skeleton variant="text" width="100%" height={10} />
          <Skeleton variant="text" width="70%" height={10} />
          <Skeleton variant="text" width="80%" height={10} />
          <Skeleton variant="text" width="50%" height={10} />
        </Box>
      </Paper>
    </Box>
  );
};

export default PostSkeleton;
