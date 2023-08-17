import Axios from "axios";

export const axios = Axios.create({
    baseURL:import.meta.env.PROD?"/":"http://localhost:5000/"
})