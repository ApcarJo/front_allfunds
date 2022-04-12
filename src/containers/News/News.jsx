import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';

const News = (props) => {

    const [news, setNews] = useState({});
    const [archived, setArchived] = useState({});

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        next: '',
        prev: '',
        count: '',
        res: ''
    });

    useEffect(() => {
        getActivePublications();
    }, []);

    const getActivePublications = async () => {
        try {
            // let res = await axios.get(`https://dynamizaticbackend.herokuapp.com/record/get?page=${pagination.page}&limit=${pagination.limit}`);
            let res = await axios.get(`http://localhost:3006/publications`);
            setNews(res.data);
            setPagination({...pagination, prev: res.data.previous?.page, next: res.data.next?.page, count: res.data.coun})
            pagination.res = Math.floor(res.data.count / res.data.next?.limit);
        } catch (e) {
            console.log(e);
        };
    }

    const getArchivedPublications = async () => {
        try {
            let res = await axios.get(`http://localhost:3006/publications/archived`);
            setArchived(res.data.results);
            setPagination({...pagination, prev: res.data.previous?.page, next: res.data.next?.page, count: res.data.coun})
            pagination.res = Math.floor(res.data.count / res.data.next?.limit);
        } catch (e) {
            console.log(e);
        };
    }

    const deleteNew = async (newId) => {
        console.log(newId)

        let body = {
            id: newId
        }
        try {
            await axios.delete(`http://localhost:3006/publications`, {data: body});
            getActivePublications();
        } catch (e) {
            console.log(e);
        };
    }

    const archiveNew = async (newId) => {
        console.log(newId)

        let body = {
            id: newId,
            isArchived: true,
            archiveDate: new Date()
        }
        try {
            await axios.put(`http://localhost:3006/publications`, body);
            getActivePublications();
        } catch (e) {
            console.log(e);
        };
    }
    

    if (news.length) {
        return (
            <div className="mainHome">
                {news.map((newsA, index) => (
                    <div className="center col separatorLine">
                    <NewsCard key={index} data={newsA}/>
                    <div>
                    <button type="button" onClick={() => deleteNew(newsA._id)}>Delete</button>
                    <button type="button" onClick={() => archiveNew(newsA._id)}>Archive</button>
                    </div>
                    </div>
                ))}
            </div>
            
        );
    } else {
     return (
            <div className="mainHome">
                <span>loading</span>
            </div>
        );
    }
    
}

export default News;