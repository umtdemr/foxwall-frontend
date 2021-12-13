import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostList from '../../components/post/post-list.component';
import ProfileHeader from '../../components/profile/profile-header/profile-header.component';


const ProfilePage: React.FC = () => {
    const { username } = useParams<{username?: string}>();

    useEffect(() => {
       // fetch profile data
    }, [])
    return (
        <div>
            <ProfileHeader />
            {/* <PostList /> */}
        </div>
    )
}

export default ProfilePage;