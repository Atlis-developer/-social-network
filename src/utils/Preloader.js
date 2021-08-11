import React from 'react';
import s from './Preloader.module.css'


const Preloader = (props) => {
    return <div>
        <div className={s.preloader}><div className={s.spinner}></div></div> 
        </div>
}


export default Preloader;