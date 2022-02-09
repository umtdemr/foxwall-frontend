import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import EditProfileHeader from "../../../components/profile/edit/edit-profile-header.component";
import { IProfileInitialState } from '../../../redux/slices/profile';
import { fetchProfile } from '../../../redux/slices/profile/profile-thunks';
import { RootState } from '../../../redux/store';


const EditProfilePage: React.FC = () => {
    const state: IProfileInitialState = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch();
    const { username } = useParams<{ username: string }>();
    const history = useHistory();

    useEffect(() => {
        const fetchFreshProfile = async () => {
            const response: any = await dispatch(fetchProfile(username));
            if (response.error) {
                history.push("/");
            }
        }

        if (!state.profile?.avatar) fetchFreshProfile()

    }, [dispatch, username, history, state]);

    return (
        <EditProfileHeader />
    )
}

export default EditProfilePage;