import axios from "axios";

const baseURL = "http://localhost:3000/Activities";

const API = {

    getAll: () =>{
        return axios.get(baseURL);
    },
    createActivity: (newActivity) => {
        return axios.post(baseURL, newActivity);
    },
    getActivityById: (id) => {
        return axios.get(`${baseURL}/${id}`)
    },
    updateActivity: (id, updatedActivity) => {
        return axios.put(`${baseURL}/${id}`, updatedActivity);
    },
    deleteActivity: (id) => {
        return axios.delete(`${baseURL}/${id}`);
    }

}

export default API;