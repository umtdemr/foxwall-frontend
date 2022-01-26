export interface UserProfileDoc {
    name: string;
    avatar: string;
    cover: string;
    bio?: string;
    is_hidden: boolean;
    is_celebrity: boolean;
}


export interface UserProfile {
    id: number;
    email: string;
    username: string;
    profile: UserProfileDoc;
    is_following: boolean,
    is_followed_me: boolean,
    is_sent_follow_request: boolean,
    is_came_follow_request: boolean
}


export interface ICameFollowRequestAction {
    username: string,
    accept: boolean
}

export interface IResultCreatorProfile {
    name: string;
    avatar: string;
    is_hidden: boolean;
    is_celebrity: boolean;
}

export interface IResultCreator {
    id: number;
    username: string;
    profile: IResultCreatorProfile;
}