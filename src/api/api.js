import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4176f6ac-22fc-4194-8b3d-820652a19c1d'
    }
})

export const usersAPI = {

    getUsers(numberPage, pageSize) {
        return instanse.get(`users?page=${numberPage}&count=${pageSize}`).
            then(response => {
                return response.data
            })
    },
    followFriends(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unFollowFriends(userId) {
        return instanse.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfiles(userID) {
        return instanse.get(`profile/${userID}`).
            then(response => {
                return response.data
            })
    },
    getUserStatus(userID) {
        return instanse.get(`profile/status/${userID}`).
            then(response => {
                return response.data
            })
    },
    updateUserStatus(status) {
        return instanse.put('/profile/status', { status: status })
    }
}

export const headerAPI = {
    getHeaders() {
        return instanse.get(`auth/me`).
            then(response => {
                return response.data
            })
    },
    loginControl(email, password, rememberMe=true) {
        
        return instanse.post('auth/login', { email, password, rememberMe })
    },
    loginOut() {
        return instanse.delete('auth/login')
    }
}

/*export const followersAPI = {
    addFollowers() {
        return instanse.get(`follow/${}`).
            then(response => {
                return response.data
            })
    }
}*/



