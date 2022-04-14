import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';
import { t } from 'i18next';

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
        getArchivedPublications();
    }, []);



    const getArchivedPublications = async () => {
        try {
            let res = await axios.get(`http://localhost:3006/publications/archived`);
            setNews(res.data);
            setPagination({ ...pagination, prev: res.data.previous?.page, next: res.data.next?.page, count: res.data.coun })
            pagination.res = Math.floor(res.data.count / res.data.next?.limit);
        } catch (e) {
            console.log(e);
        };
    }

    const deleteNew = async (newId) => {
        let body = {
            id: newId
        }
        try {
            await axios.delete(`http://localhost:3006/publications`, { data: body });
            getArchivedPublications()
        } catch (e) {
            console.log(e);
        };
    }


    if (news.length) {
        return (
            <div className="newsView">
                <h1>{t('news')}</h1>
                
                <div className="newsList">
                    {news.map((newsA, index) => (
                        <div className="contentCard col">
                            <NewsCard key={index} data={newsA} />
                            <div class="actionButtons">
                                <button type="button" onClick={() => deleteNew(newsA._id)}>{t('delete')}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    } else {
        return (
            <div className="newsView">
                <span>{t('loading')}</span>
            </div>
        );
    }

}

export default News;