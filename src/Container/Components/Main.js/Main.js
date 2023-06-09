import React from 'react';
import './Main.css'
import Top from '../TopContain/Top'
import Bottom from '../BottomContain/Bottom';

const Main = () => {
    return (
        <div className='main-container'>
            <Top/>
            <Bottom/>
        </div>
    );
};

export default Main;