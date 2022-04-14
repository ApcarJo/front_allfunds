
import axios from "axios";

export const registerUser = async (body) => {
        try {
            return await axios.post('https://allfundsback.herokuapp.com/user', body);
        } catch (e) {
            console.log(e);
        }

}

export const loginUser = async (body) => {
    try {
        return await axios.post(`https://allfundsback.herokuapp.com/login`, body);
    } catch (e) {
        return e;
    }
}