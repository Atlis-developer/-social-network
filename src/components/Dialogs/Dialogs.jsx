import React from 'react';
import s from './Dialogs.module.css'
import DialogsReduxForm from './DialogsForm';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) =>{

let DialogNew = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
let MessagesNew = props.messages.map(m => <Message message={m.message} key={m.id} />)

let onSendMessage = (value) =>{
    props.sendMessage (value.newMessage)
}

return (
    
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
            {DialogNew}
            </div>
            <div className={s.messages}>
            {MessagesNew}
            </div>
            <div className={s.addMessage}>
               <DialogsReduxForm onSubmit={onSendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs