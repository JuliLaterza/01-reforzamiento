import axios from "axios";

export const reqRestapi = axios.create({
    baseURL: "https://reqres.in/api",
});

axios

