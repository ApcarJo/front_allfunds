
import axios from 'axios';

// const baseApi = "https://allfundsback.herokuapp.com/"
const baseApi = "http://localhost:3006/"
const apiUrl = "publications";
export const getPublications = async (page, limit, isArchived) => {

    try {
        // let res = await axios.get(`https://dynamizaticbackend.herokuapp.com/record/get?page=${pagination.page}&limit=${pagination.limit}`);
        return await axios.get(`${baseApi}${apiUrl}?page=${page}&limit=${limit}&isArchived=${isArchived}`);

    } catch (e) {
        console.log(e);
    };
}

export const archiveNew = async (newId) => {
    let body = {
        id: newId,
        isArchived: true,
        archiveDate: new Date()
    }

    try {
        await axios.put(`${baseApi}${apiUrl}`, body);

    } catch (e) {
        console.log(e);
    };
}

export const deleteNew = async (newId) => {
    let body = {
        id: newId
    }
    try {
        await axios.delete(`${baseApi}${apiUrl}`, { data: body });
    } catch (e) {
        console.log(e);
    };
}

export const addNew = async (body) => {
    try {
        return await axios.post(`${baseApi}${apiUrl}`, body);
    } catch (e) {
        console.log(e);
    }
}