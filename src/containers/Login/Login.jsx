
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';
import { t } from 'i18next';
import { loginUser } from '../../api/users'

const Login = (props) => {

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [msgError, setMensajeError] = useState({ eEmail: '', ePassword: '', eValidate: '' });

    const updateCredentials = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (props.credentials.user?._id) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
    });

    const checkError = async (arg) => {

        switch (arg) {

            case 'email':

                if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {
                    setMensajeError({ ...msgError, eEmail: t('eInsertEmail') });
                } else {
                    setMensajeError({ ...msgError, eEmail: "" });
                }
                break;

            case 'password':

                if (credentials.password.length < 1) {
                    setMensajeError({ ...msgError, ePassword: t('eInsertPassword') });
                } else {
                    setMensajeError({ ...msgError, ePassword: "" });
                }
                break;

            default:
                break;
        }
    }

    const logeame = async () => {
        try {
            let body = {
                email: credentials.email,
                password: credentials.password
            }
            const res = await loginUser(body);
            props.dispatch({ type: LOGIN, payload: res.data });

            setTimeout(() => {
                navigate('/');
            }, 250);
        } catch {
            setMensajeError({ ...msgError, eValidate: 'Wrong email or password' });
        }

    }

    return (
        <div className="vistaLogin col">
            <div className="actionCard center col">
                <h1>{t('login')}</h1>
                <div Name="center col">
                    <input className="inputBox" name="email" type="text" onChange={updateCredentials} onBlur={() => checkError("email")} placeholder={t('email')} required />
                    <span className="errorsText">{msgError.eEmail}</span>

                    <input className="inputBox" name="password" type="password" onChange={updateCredentials} onBlur={() => checkError("password")} placeholder={t('password')} required />
                    <span className="errorsText">{msgError.ePassword}</span>
                </div>

                <div className="sendButton center" onClick={() => logeame()}>{t('signin')}</div>
                <div className="sendButton" onClick={() => navigate(`/register`)}>{t('registernow')}</div>
            </div>
            <span className="paddingY">{msgError.eValidate}</span>
        </div>

    )
}

export default connect((state) => ({
    credentials: state.credentials
}))(Login);