import React from 'react'
import PostList from '../../components/post/post-list.component';
import ProfileHeader from '../../components/profile/profile-header/profile-header.component';


const ProfilePage: React.FC = () => {
    return (
        <div>
            <ProfileHeader />
            <PostList />
        </div>
    )
}

export default ProfilePage;