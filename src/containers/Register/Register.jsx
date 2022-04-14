
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { registerUser } from '../../api/users';

const Register = () => {

    let navigate = useNavigate();

    const [dataUser, setDataUser] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const [errors, setErrors] = useState({
        eEmail: '',
        ePassword: '',
        ePassword2: '',
    });

    const updateForm = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    const applyRegister = async () => {
        let body = {
            email: dataUser.email,
            password: dataUser.password
        }

        if (dataUser.password === dataUser.password2) {
            registerUser(body)
                .then(() => navigate('/login'))
        }
    }

    const checkError = (arg) => {
        switch (arg) {
            case 'email':
                if (! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(dataUser.email)) {
                    setErrors({ ...errors, eEmail: t('emailNotValid') });
                } else {
                    setErrors({ ...errors, eEmail: '' });
                }

                break;

            case 'password':
                if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(dataUser.password)) {
                    setErrors({ ...errors, ePassword: `${t('ePassword')}` });
                } else {
                    setErrors({ ...errors, ePassword: '' });
                }
                break;

            case 'password2':
                if (dataUser.password !== dataUser.password2) {
                    setErrors({ ...errors, ePassword2: `${t('ePassword2')}` });
                } else {
                    setErrors({ ...errors, ePassword2: '' });
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className="registerView">
            <div className="actionCard center col">
                <h1>{t('register')}</h1>
                <div className="center col">
                    <input className="inputBox" name="email" type="text" onChange={updateForm} onBlur={() => checkError("email")} placeholder={t('email')} required />
                    <span className="errorsText">{errors.eEmail}</span>

                    <input className="inputBox" name="password" type="password" onChange={updateForm} onBlur={() => checkError("password")} placeholder={t('password')} required />
                    <span className="errorsText">{errors.ePassword}</span>

                    <input className="inputBox" name="password2" type="password" onChange={updateForm} onBlur={() => checkError("password2")} placeholder={t('repeat_password')} required />
                    <span className="errorsText">{errors.ePassword2}</span>
                </div>

                <div className="sendButton center" onClick={() => applyRegister()}>{t('register')}</div>
                <div className="sendButton center" onClick={() => navigate(-1)}>{t('back')}</div>
            </div>
        </div>
    )
}

export default Register;