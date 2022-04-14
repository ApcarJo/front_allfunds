
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { t } from 'i18next';
import { addNew } from '../../api/news'

const AddNewPublication = (props) => {

    let navigate = useNavigate();

    const [newData, setNewData] = useState({});

    const updateForm = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    }

    const newPublication = () => {
        let body = {
            user_id: props.credentials?.user._id,
            title: newData.title,
            description: newData.description,
            author: newData.author,
            date: newData.date,
            content: newData.content,
        }
        addNew(body)
            .then(() => navigate(`/`));
    }

    return (
        <div className="addNewView">
            <div className="actionCard center col ">
                <h1>{t('newPublication')}</h1>
                <div className="center col gap05">
                    <input className="inputBox" name="title" type="text" onChange={updateForm} placeholder={t('title')} required />

                    <input className="inputBox" name="description" type="string" onChange={updateForm} placeholder={t('description')} required />

                    <textarea className="inputBox" name="content" onChange={updateForm} placeholder={t('content')} />

                    <input className="inputBox" name="date" type="date" onChange={updateForm} />

                    <input className="inputBox" name="author" type="string" placeholder={t('author')} onChange={updateForm} />

                </div>

                <button type="button" className="sendButton center" onClick={() => newPublication()}>{t('add')}</button>
                <div className="sendButton center" onClick={() => navigate(-1)}>{t('back')}</div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials
}))(AddNewPublication);