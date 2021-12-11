import { GlobalUser } from "./user_types";

type PostImages = { image: string}

export interface GlobalPost {
    user: GlobalUser,
    text?: string;
    images?: PostImages[];
    num_likes: number,
    uuid: string;
}