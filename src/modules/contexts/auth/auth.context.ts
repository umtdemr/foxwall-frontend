import * as React from 'react'
import { authActionTypes } from '../../../types/auth/auth-types';

interface IAuthActionContext {
    current_type: authActionTypes;
    changeType?: () => void;
}

type State = { current_type: authActionTypes }
type Dispatch = (action: Action) => void
type Action = {type: string, payload: any}


type AuthActionProviderProps = {children: React.ReactElement}


export const AuthActionContext = React.createContext(null);


export const AuthActionProvider = ({children}: AuthActionProviderProps) => {
    const [authTyped, setAuthTyped] = React.useState<authActionTypes>(authActionTypes.EMPTY);

    const changeAuthActionType = (new_type: authActionTypes) => {
        setAuthTyped(new_type);
    }
    return (
        {children}
    )
}