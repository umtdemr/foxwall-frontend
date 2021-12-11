export interface GlobalProfile {
    avatar: string,
    name: string,
    is_hidden: boolean,
    is_celebrity: boolean,
}


export interface GlobalUser {
    id: number,
    username: string,
    profile: GlobalProfile,
}