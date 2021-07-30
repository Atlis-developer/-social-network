import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addMessageToMessages, addNewMessage } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';




/*const DialogsContainers = (props) =>{

let state = props.store.getState();

let sendMessage = () =>{
    props.store.dispatch(addMessageToMessages());
}

let changeNewMessage = (newMessage) =>{
    props.store.dispatch (addNewMessage(newMessage));
}

return <Dialogs changeNewMessage = {changeNewMessage} 
                sendMessage = {sendMessage}/>
}*/

const mapDispatchToPops = (dispatch) => {
    return {
        changeNewMessage: (newMessage) => { dispatch(addNewMessage(newMessage)) },
        sendMessage: () => { dispatch(addMessageToMessages()) },
    }
}

const mapStateToProps = (state) => {
    
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        addNewMessageToDialog: state.dialogsPage.addNewMessageToDialog,

    }
}


export default compose (connect(mapStateToProps, mapDispatchToPops),withAuthRedirect) (Dialogs)