import React from 'react';
import './Score.css'
import data from '../../Data/data.json'
import PrecisionRoll from '../PrecisionRoll/PrecisionRoll';

const Score = () => {
    return (
        <div className='main-score'>
            Score Total
            <PrecisionRoll R={(data.total_shop_score)/100} />
        </div>
    );
};

export default Score;