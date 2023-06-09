import React from 'react';
import './CardChart.css'
import data from '../../Data/data.json'
import PrecisionRoll from '../PrecisionRoll/PrecisionRoll'

const CardChart = () => {
    return (
        <div className='card-contain'>
            {data.data.map((info,index)=>{
                return <div className='card-body'>
                    <div className='score'>
                        Score n°{index+1}
                        <p style={{color:'blue'}}>{info.mean_shop}</p>
                    </div>
                    <span className='space'>  </span>
                    <div className='stat'>
                    <div>R</div>
                    <PrecisionRoll R={info.R}/>
                    </div>
                </div> 
            })}
        </div>
    );
};

export default CardChart;