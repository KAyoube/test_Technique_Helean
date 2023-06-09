import React from 'react';
import './Top.css'
import Picture from '../Picture/Picture'
import Score from '../Score/Score'
import Info from '../InfoCompagny/Info'

const Top = () => {
    return (
        <div className='top-contain'>
            <Picture/>
            <Score/>
            <Info/>
        </div>
    );
};

export default Top;