import { api } from "..";

export const getProfile = (body: any) => {
    return api.get(`users/${body.username}`);
};
