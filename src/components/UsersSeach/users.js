import React from 'react';
import Preloader from '../../utils/Preloader';
import Paginator from '../../utils/Paginator';
import User from './user';


const Users = (props) => {


    return <div>
        <Paginator {...props} />
        <span>{props.isFetching ?
            <Preloader isFetching={props.isFetching} /> :
            null}
        </span>
        <User {...props}/>
    </div>
}

export default Users;



