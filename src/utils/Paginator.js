import React from 'react';
import s from './Paginator.module.css'


const Paginator = (props) => {
    
    let pagesCount = Math.ceil(props.allPagesCount / props.pageSize)
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    return <div>
        <div>
            {page.map(page => {
                return <span className={props.numberPage === page ? s.spa :
                    s.spp} onClick={() => { props.getCurrentPage(page) }}> {page}</span>
            })}
        </div>
    </div>
}

export default Paginator;

