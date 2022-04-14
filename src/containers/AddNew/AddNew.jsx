
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { addNew } from '../../api/news'

const AddNewPublication = () => {

    let navigate = useNavigate();

    const [newData, setNewData] = useState({});

    const updateForm = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    }

    const newPublication = () => {
        addNew(newData)
        .then(()=>navigate(`/news`));
    }

    return (
        <div className="addNewView">
            <div className="actionCard center col">
                <h1>{t('newPublication')}</h1>
                <div class="center col">
                    <input className="inputBox" name="title" type="text" onChange={updateForm} placeholder={t('title')} required />

                    <input className="inputBox" name="password" type="password" onChange={updateForm} placeholder={t('description')} required />

                    <textarea className="inputBox" name="password2" onChange={updateForm} placeholder={t('content')} />
                    
                    <input className="inputBox" name="date" type="date"onChange={updateForm} />

                    <input className="inputBox" name="author" type="string" placeholder={t('author')} onChange={updateForm} />
                    
                </div>

                <div className="sendButton center" onClick={() => newPublication()}>Register</div>
                <div className="sendButton center" onClick={() => navigate(-1)}>back</div>
            </div>
        </div>
    )
}

export default AddNewPublication;