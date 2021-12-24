import { GlobalUser } from "./user_types";

export type PostImages = { image: string }

export interface GlobalPost {
    user: GlobalUser,
    text?: string;
    images?: PostImages[];
    num_likes: number,
    uuid: string;
}