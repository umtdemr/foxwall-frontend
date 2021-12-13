import { Typography } from '@mui/material';
import React from 'react'
import { IPostInitialState } from '../../redux/slices/post';
import Post from './post-item/post-item.component';
import PostSkeleton from './post-item/post-skeleton';

interface PostListProps {
    postsData: IPostInitialState
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
                : postsData.results.map(post => <Post post={post} /> )
            }
        </>
    )
}


export default PostList;