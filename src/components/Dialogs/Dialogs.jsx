import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) =>{

let DialogNew = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
let MessagesNew = props.messages.map(m => <Message message={m.message} key={m.id} />)

let onSendMessage = () =>{
    props.sendMessage();
}

let onChangeNewMessage = (e) =>{
    let newMessage = e.target.value
    props.changeNewMessage(newMessage);
}
/*if (!props.isAuth) return <Redirect to={'/login'}/>*/
return (
    
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
            {DialogNew}
            </div>
            <div className={s.messages}>
            {MessagesNew}
            </div>
            <div className={s.addMessage}>
                <textarea value={props.addNewMessageToDialog} onChange={onChangeNewMessage}></textarea>
                <button onClick={onSendMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs