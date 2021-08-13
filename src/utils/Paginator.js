import React, { useState } from 'react';
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator = (props ) => {
    

    let pagesCount = Math.ceil(props.allPagesCount / props.pageSize)
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    let portionCount = Math.ceil (pagesCount/props.usersPage.boxSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBoxNumber = (portionNumber - 1) * props.usersPage.boxSize + 1;
    let rightBoxNumber = portionNumber * props.usersPage.boxSize;

    return <div>

{portionNumber > 1 &&
<button onClick = {() =>{setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {page
            .filter(p => p >= leftBoxNumber && p <= rightBoxNumber)
            .map(page => {
               
                return <span className={ cn({[s.numberPage] : props.numberPage === page}, s.numb)}
                    key = {page} 
                    onClick={() => { props.getCurrentPage(page) }}>{page}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    
}
export default Paginator;