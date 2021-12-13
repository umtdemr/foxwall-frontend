import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostList from '../../components/post/post-list.component';
import ProfileHeader from '../../components/profile/profile-header/profile-header.component';
import ProfileHeaderSkeleton from '../../components/profile/profile-header/skeleton/profile-header.skeleton';
import { IProfileInitialState } from '../../redux/slices/profile';
import { fetchProfile } from '../../redux/slices/profile/profile-thunks';
import { RootState } from '../../redux/store';


const ProfilePage: React.FC = () => {
    const { username } = useParams<{username?: string}>();
    const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile(username!));
    }, [username, dispatch])

    return (
        <div>
            {
                state.loading
                ? <ProfileHeaderSkeleton />
                : <ProfileHeader data={state}/>
            }
            {/* <PostList /> */}
        </div>
    )
}

export default ProfilePage;