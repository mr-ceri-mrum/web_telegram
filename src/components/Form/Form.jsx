import React, {useCallback, useEffect, useState} from "react";
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () =>{
    const [country] = useState('');
    const [street] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject, tg])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg.MainButton])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street, tg.MainButton])

    /*const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }*/

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return(
        <div className={"form"}>
            <h3>Your Data</h3>
            <input
                className={'input'}
                type={"text"}
                placeholder={'City'}
            />
            <input
                className={'input'}
                type={"text"}
                placeholder={'Address'}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;