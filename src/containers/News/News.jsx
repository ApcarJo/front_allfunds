import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';
import { t } from 'i18next';
import RenderlessApiCall from '../../components/RenderlessApiCall/RenderlessApiCall';
import PaginateButtons from '../../components/PaginateButtons/PaginateButtons';

const News = (props) => {

    const [news, setNews] = useState({});
    let [queryCall, setQueryCall] = useState('get');
    const [body, setBody] = useState({});

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 4,
        next: '',
        prev: '',
        count: '',
        res: ''
    });

    const apiUrl = "http://localhost:3006/publications";

    useEffect(() => {
        getActivePublications();
    }, []);


    const getActivePublications = async () => {
        try {
            // let res = await axios.get(`https://dynamizaticbackend.herokuapp.com/record/get?page=${pagination.page}&limit=${pagination.limit}`);
            let res = await axios.get(`http://localhost:3006/publications?page=${pagination.page}&limit=${pagination.limit}`);
            console.log(res.data)
            setNews(res.data.results);
            setPagination({ ...pagination, prev: res.data.previous?.page, next: res.data.next?.page, count: res.data.coun })
            pagination.res = Math.floor(res.data.count / res.data.next?.limit);
        } catch (e) {
            console.log(e);
        };
    }

    const archiveNew = async (newId) => {
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

    


    return (
        <div className="newsView">
            <h1>{t('news')}</h1>
            {/* <RenderlessApiCall URL={apiUrl} method={queryCall} data={(data) => setNews(data)} body={body} refresh={archiveNew} /> */}
            {/* <span>{queryCall}</span> */}

            {!news.length && <div className="newsView">
                <span>{t('loading')}</span>
            </div>}
            <div className="newsList">
                {news.length > 0 && news?.map((newsA, index) => (
                    <div key={index} className="contentCard col">
                        <NewsCard data={newsA} />
                        <div class="actionButtons">
                            <button type="button" onClick={() => archiveNew(newsA._id)}>{t('archive')}</button>
                        </div>
                    </div>
                ))}
            </div>
            <PaginateButtons refresh={getActivePublications} pagination={pagination}/>
        </div>

    );

}

export default News;