import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';
import { t } from 'i18next';
import PaginateButtons from '../../components/PaginateButtons/PaginateButtons';
import { getPublications, archiveNew } from '../../api/news';

const News = (props) => {

    const [news, setNews] = useState({});

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 4,
        next: '',
        prev: '',
        count: '',
        res: ''
    });

    useEffect(() => {
        loadNews();
    }, [pagination.page]);

    const loadNews = async () => {
        let isArchived = false;
        const res = await getPublications(pagination.page, pagination.limit, isArchived);
        setNews(res.data.results);
        setPagination({ ...pagination, prev: res.data.previous?.page, next: res.data.next?.page, count: res.data.count })
    }

    const loadArchive = (newId) => {
        archiveNew(newId, props.credentials?.user._id, props.credentials?.token)
            .then(() => loadNews())
    }

    return (
        <div className="newsView">
            <div>
                <h1>{t('news')}</h1>
            </div>
            {!news.length && <div className="newsView">
                <span>{t('loading')}</span>
            </div>}
            <div className="newsList">
                {news.length > 0 && news?.map((newsA, index) => (
                    <div key={index} className="contentCard col">
                        <NewsCard data={newsA} />
                        <div className="actionButtons">
                            {props.credentials?.user._id === newsA.user_id && <button type="button" onClick={() => loadArchive(newsA._id)}>{t('archive')}</button>}
                        </div>
                    </div>
                ))}
            </div>
            <PaginateButtons pagination={pagination} change={setPagination} />
        </div>
    );

}

export default connect((state) => ({
    credentials: state.credentials
}))(News);