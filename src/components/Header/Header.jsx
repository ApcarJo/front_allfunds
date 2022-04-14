import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

const Header = (props) => {

    let navigate = useNavigate();

    const logOut = () => {

        props.dispatch({type:LOGOUT});
        navigate("/")
    }

    if (props.credentials.user.email){
        return(
            <div className="header">
                <div className="center row gap">
                    <div type="button" onClick={() => navigate('/news')}>{t('news')}</div>
                    <div type="button" onClick={() => navigate('/archived')}>{t('archived')}</div>
                </div>
                <div className="headerUser">
                    <div>{props.credentials?.user.email}</div>
                    <div className="verticalLine">
                        <div className="linkLogout" onClick={() => logOut()}>{t('logout')}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="header">
                <div className="headerUser">
                        <Button path="/login" destination={t('login')} />
                    <div className="verticalLine">
                        <Button path="/register" destination={t('register')}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    credentials:state.credentials
}))(Header);