import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostList from '../../components/post/post-list.component';
import ProfileHeader from '../../components/profile/profile-header/profile-header.component';
import { fetchProfile } from '../../redux/slices/profile/profile-thunks';


const ProfilePage: React.FC = () => {
    const { username } = useParams<{username?: string}>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile(username!));
    }, [username, dispatch])

    return (
        <div>
            <ProfileHeader />
            {/* <PostList /> */}
        </div>
    )
}

export default ProfilePage;