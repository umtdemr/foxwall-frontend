import { getContrastRatio } from '@mui/system';
import * as React from 'react'
import { authActionTypes } from '../../../types/auth/auth-types';

interface IAuthActionContext {
    current_type: authActionTypes;
    changeType?: (new_type: authActionTypes) => void;
}

type State = { current_type: authActionTypes }
type Dispatch = (action: Action) => void
type Action = {type: string, payload: any}


type AuthActionProviderProps = {children: React.ReactElement}


export const AuthActionContext = React.createContext<IAuthActionContext>({current_type: authActionTypes.EMPTY});


export const AuthActionProvider = ({children}: AuthActionProviderProps) => {
    const [authTyped, setAuthTyped] = React.useState<authActionTypes>(authActionTypes.EMPTY);

    const changeAuthActionType = (new_type: authActionTypes) => {
        setAuthTyped(new_type);
    }
    return <AuthActionContext.Provider
        value={{
            current_type: authTyped,
            changeType: changeAuthActionType 
        }}

    >
        {children}
    </AuthActionContext.Provider>
}

