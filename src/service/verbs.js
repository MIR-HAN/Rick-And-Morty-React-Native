import axiosClient from "./instance";

export async function getRequest(URL, params) {
    const response = await axiosClient.get(`${URL}`, { params })

    return response
}

export async function postRequest(URL, payload) {
    const response = await axiosClient.post(`${URL}`, { params })

    return response
}

export async function patchRequest(URL, payload) {
    const response = await axiosClient.get(`${URL}`, { params })

    return response
}

export async function deleteRequest(URL, params) {
    const response = await axiosClient.get(`${URL}`, { params })

    return response
}

