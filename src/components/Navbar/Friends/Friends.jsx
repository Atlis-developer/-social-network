import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css'

const Friends = (props) =>{
    return (
<div>
         <div className={s.item}>
             Friends</div>
         <div className={s.avatar}>
            <div className={s.ava}>
              <NavLink to={'/profile/2'}>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'/>
               </NavLink>
             </div>
             <div className={s.ava}>
             <NavLink to={'/profile/3'}> 
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'/>
               </NavLink>
             </div>
             <div className={s.ava}>
             <NavLink to={'/profile/4'}>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU'/>
               </NavLink>
            </div>
         </div>
         <div className={s.names}>
          <div className={s.name}>
          Олег
          </div>
          <div className={s.name}>
          Вова
          </div>
          <div className={s.name}>
          Вика
          </div>
         </div>
       </div>)
}

export default Friends