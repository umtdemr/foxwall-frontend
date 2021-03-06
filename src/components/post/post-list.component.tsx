import { Typography } from '@mui/material';
import React from 'react'
import { IFetchPostData } from '../../redux/slices/post';
import Post from './post-item/post-item.component';
import PostSkeleton from './post-item/post-skeleton';

interface PostListProps {
    postsData: IFetchPostData
}


const PostList: React.FC<PostListProps> = ({ postsData }) => {
    return (
        <>
            {
                postsData.loading && <PostSkeleton />
            }
            {
                (!postsData.loading && postsData.results.length === 0)
                ? <Typography variant="subtitle1" sx={{ textAlign: "center", m: 20}}>No post found</Typography>
                : postsData.results.map(post => <Post post={post} key={post.uuid} /> )
            }
        </>
    )
}


export default PostList;