import React from 'react';
import data from '../../Data/data.json'
import './Picture.css'

const Picture = () => {
    return (
        <div className='picture-container'>
           <img className='picture' src= {data.shop_picture} alt="Picture_Compagny" /> 
        </div>
    );
};

export default Picture;