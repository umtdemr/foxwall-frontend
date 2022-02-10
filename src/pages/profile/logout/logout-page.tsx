import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/slices/auth';


const LogoutPage: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
    }, [dispatch])

    return (
        <div>Logging out</div>
    )
}


export default LogoutPage;