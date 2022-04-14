
import axios from 'axios';

// const baseApi = "https://allfundsback.herokuapp.com/"
const baseApi = "http://localhost:3006/publications"
export const getPublications = async (page, limit, isArchived) => {

    try {
        return await axios.get(`${baseApi}?page=${page}&limit=${limit}&isArchived=${isArchived}`);
    } catch (e) {
        console.log(e);
    };
}

export const getArchivedPublications = async (page, limit, isArchived) => {

    try {
        return await axios.get(`${baseApi}/archived?page=${page}&limit=${limit}&isArchived=${isArchived}`);
    } catch (e) {
        console.log(e);
    };
}

export const archiveNew = async (newId, user_id, token) => {
    let body = {
        user_id: user_id,
        id: newId,
        isArchived: true,
        archiveDate: new Date()
    }

    try {
        await axios.put(`${baseApi}`, body, {headers:{'authorization':'Bearer ' + token}});

    } catch (e) {
        console.log(e);
    };
}

export const deleteNew = async (newId, token) => {
    let body = {
        id: newId
    }
    try {
        await axios.delete(`${baseApi}`, { data: body, headers:{'authorization':'Bearer ' + token} });
    } catch (e) {
        console.log(e);
    };
}

export const addNew = async (body) => {
    try {
        return await axios.post(`${baseApi}`, body);
    } catch (e) {
        console.log(e);
    }
}