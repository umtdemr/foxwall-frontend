import { Button, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { IAuthSlice } from '../../../../redux/slices/auth';
import { IProfileInitialState } from '../../../../redux/slices/profile';
import { RootState } from '../../../../redux/store';


const ProfileActions = () => {
    const [isMe, setIsMe] = useState(false);
    const [actionButtonText, setActionButtonText] = useState("");
    const history = useHistory();
    const { username } = useParams<{username?: string}>();
    const routeMatch = useRouteMatch();
    const authState: IAuthSlice = useSelector((state: RootState) => state.auth);
    const profileState: IProfileInitialState = useSelector((state: RootState) => state.profile);
    
    useEffect(() => {
        if (username === authState.user.username ) {
            setIsMe(true);
        }
        
    }, [authState.user.username, username]);
    useEffect(() => {
        if (profileState.is_following) setActionButtonText("unfollow")
        else if (profileState.is_sent_follow_request) setActionButtonText("cancel follow request")
        else setActionButtonText("follow")
    }, [profileState])

    return (
        <div className="profile_actions">
            {
                isMe && (<button 
                    className="button_outline dark align-baseline"
                    onClick={() => history.push(`${routeMatch.url}/edit`)}
                    style={{ 
                        marginTop: "10px",
                    }}>
                    edit profile
                </button>)
            }
            {
                !isMe && (
                    <Stack
                        direction="row"
                        mt={2}
                    >
                        <Button>
                           {actionButtonText}
                        </Button>
                    </Stack>
                )
            }
            
        </div>
    );
}


export default ProfileActions;