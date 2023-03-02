import React from 'react';
import Button from "../Button/Button";
//import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    //const {user, onClose} = useTelegram();
    const tg = window.Telegram.WebApp;
    const onClose = () =>  {
        tg.close();
    }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initData?.user?.username}
            </span>
        </div>
    );
};

export default Header;