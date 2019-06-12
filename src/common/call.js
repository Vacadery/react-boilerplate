require('dotenv').config()

import axios from 'axios'

export default async function call(method, url, options = {}) {
    const { data, token, params } = options
    let response = {}

    try {
        response = await axios({
            method,
            url: process.env.API_URL + url,
            data: data,
            headers: {
                'access-token': config.apiKey,
                'auth': token
            },
            params: params
        })
        return response.data
    } catch (axiosError) {
        response.error = axiosError.response.data.message
        return response
    }
}