import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';
import { deleteNew, getArchivedPublications } from '../../api/news';
import { t } from 'i18next';
import PaginateButtons from '../../components/PaginateButtons/PaginateButtons';

const ArchivedNews = (props) => {

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
        loadArchived();
    }, [pagination.page]);



    const loadArchived = async () => {
        let isArchived = true;
        const res = await getArchivedPublications(pagination.page, pagination.limit, isArchived);
        setNews(res.data.results);
        setPagination({ ...pagination, prev: res.data.previous?.page, next: res.data.next?.page, count: res.data.count })
    }

    const deletePublication = (newId) => {
        deleteNew(newId, props.credentials?.token)
            .then(() => loadArchived())
    }

    return (
        <div className="newsView">
            <h1>{t('archived')}</h1>
            {!news.length && <div className="newsView">
                <span>{t('loading')}</span>
            </div>}
            <div className="newsList">
                {news.length > 0 && news?.map((newsA, index) => (
                    <div key={index} className="contentCard col">
                        <NewsCard data={newsA} />
                        <div class="actionButtons">
                            <button type="button" onClick={() => deletePublication(newsA._id)}>{t('delete')}</button>
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
}))(ArchivedNews);