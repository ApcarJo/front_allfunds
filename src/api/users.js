
import axios from "axios";

// const baseApi = "https://allfundsback.herokuapp.com"
const baseApi = "http://localhost:3006"

export const registerUser = async (body) => {
        try {
            return await axios.post(`${baseApi}/user`, body);
        } catch (e) {
            console.log(e);
        }

}

export const loginUser = async (body) => {
    try {
        return await axios.post(`${baseApi}/login`, body);
    } catch (e) {
        console.log(e);
    }
}