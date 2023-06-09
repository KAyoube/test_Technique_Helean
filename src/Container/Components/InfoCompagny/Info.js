import React from 'react';
import './Info.css'
import data from '../../Data/data.json'

const Info = () => {
    return (
        <div className='info'>
            <p> {data.company_name} </p>
            <p> {data.shop_adress} </p>
            <p> {data.shop_manager_name} {data.shop_manager_surname} </p>
        </div>
    );
};

export default Info;