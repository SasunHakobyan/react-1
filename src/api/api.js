import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        "API-KEY": "8044ee75-356b-458a-aa91-ed005d7216d1"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },

    auth() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
            .then(response => response.data);
    }
}