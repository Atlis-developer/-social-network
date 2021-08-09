import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addMessageToMessages } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withRouter } from 'react-router-dom';
import { getDialogs, getMessages } from '../../Redux/dialogs-reselect';


const mapDispatchToPops = (dispatch) => {
    return {
        sendMessage: (newMessage) => { dispatch(addMessageToMessages(newMessage)) },
    }
}

const mapStateToProps = (state) => {
    
    return {
        dialogs: getDialogs(state),
        messages: getMessages (state),
    }
}


export default compose (connect(mapStateToProps, mapDispatchToPops), withRouter,withAuthRedirect) (Dialogs)