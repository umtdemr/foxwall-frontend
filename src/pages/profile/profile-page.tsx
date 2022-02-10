import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostList from '../../components/post/post-list.component';
import ProfileHeader from '../../components/profile/profile-header/profile-header.component';
import ProfileHeaderSkeleton from '../../components/profile/profile-header/skeleton/profile-header.skeleton';
import { IPostInitialState, setProfilePostEmpty } from '../../redux/slices/post';
import { fetchProfilePosts } from '../../redux/slices/post/post-thunks';
import { IProfileInitialState, setProfileEmpty } from '../../redux/slices/profile';
import { fetchProfile } from '../../redux/slices/profile/profile-thunks';
import { RootState } from '../../redux/store';


const ProfilePage: React.FC = () => {
    const { username } = useParams<{username?: string}>();
    const profileState: IProfileInitialState = useSelector((state: RootState) => state.profile);
    const postsState: IPostInitialState = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile(username!));
        dispatch(fetchProfilePosts(username!));
        return (() => {
            dispatch(setProfileEmpty());
            dispatch(setProfilePostEmpty());
        });
    }, [username, dispatch])

    return (
        <div>
            {
                profileState.loading
                ? <ProfileHeaderSkeleton />
                : <ProfileHeader data={profileState}/>
            }
            <PostList postsData={postsState.profile}/>
        </div>
    )
}

export default ProfilePage;