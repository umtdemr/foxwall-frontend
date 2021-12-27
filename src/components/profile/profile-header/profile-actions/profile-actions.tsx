import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';


const ProfileActions = () => {
    const history = useHistory();
    const routeMatch = useRouteMatch();
    return (
        <button 
            className="button_outline dark align-baseline"
            onClick={() => history.push(`${routeMatch.url}/edit`)}
            style={{ 
                marginTop: "10px",
            }}>
            edit profile
        </button>
    );
}


export default ProfileActions;