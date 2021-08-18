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
                return response
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
                return response
            })
    },
    getUserStatus(userID) {
        return instanse.get(`profile/status/${userID}`).
            then(response => {
                return response
            })
    },
    updateUserStatus(status) {
        return instanse.put('/profile/status', { status: status })
    },
    changeMyProfile(profile) {
        return instanse.put('/profile', profile)
    },
    setNewAvatar(avatar) {
        const formData = new FormData();
        formData.append("image", avatar);
        return instanse.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).
            then(response => {
                return response
            })
    }
}

export const headerAPI = {
    getHeaders() {
        return instanse.get(`auth/me`).
            then(response => {
                return response
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



