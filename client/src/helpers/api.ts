import axios from "axios"
import { useDispatch } from "react-redux"
import { setCredentials } from "../redux/authReducer"

// api instance 
export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    }
})

api.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }


api.interceptors.response.use((response) => {
    return response;
},
    async (error) => {

        const previousRequest = error?.config;

        if (error.response.status === 401 && !previousRequest.sent) {
            previousRequest.sent = true
            const newAccessToken = await refreshToken()
            previousRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
            return api(previousRequest)
        }
    })


// api calls
export const login = async (username: any, password: any) => {
    let data;

    await api.post('auth/login', {
        username: username,
        password: password
    })
        .then(response => {
            data = response.data
            console.log(response.data)
            localStorage.setItem('user', response.data.user)
            localStorage.setItem('user_id', response.data.userId)
            localStorage.setItem('token', response.data.accessToken)
        })
        .catch(error => {
            if (error.response.status === 401) {
                return false;
            }
        })

    return data;
}

export const refreshToken = async () => {
    let token;

    await api.get('/auth/refreshToken')
        .then(response => {
            localStorage.setItem('token', response.data.accessToken)
            token = response.data.accessToken
        })
    return token
}

// Posts

type Post = {
    text: string
    image: string
    userId?: string
}

export const createPost = async (data: Post) => {
    const { text, image, userId } = data;
    api.post('post/createPost', {
        text: text,
        media: image,
        userId: userId
    }, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(response => {
        console.log(response)
    })
}

export const getPost = async (user: any, post: any) => {
    let data;
    await api.post(`/post/getPost`, {
        user: user,
        postId: post
    }).then(response => {
        data = response.data
    })
    return data
}

export const deletePost = async (postId: string) => {
    let data;
    await api.post('post/deletePost', {
        postId
    }).then(response => {
        data = response.data
    })
    return data;
}

export const newComment = async (user: string, commentText: string, postId: string) => {
    let data;
    await api.post('post/newComment', {
        text: commentText,
        user: user,
        post: postId
    }).then(response => {
        data = response.data
    })
    return data;
}

export const deleteComment = async (commentId: string) => {
    let data;
    await api.post('post/deleteComment', {
        commentId
    }).then(response => {
        data = response.data
    })
    return data;
}

// Users

export const getUser = (user: any) => {
    api.post(`/users/${user}`)
        .then(response => {
            console.log(response)
        })
}