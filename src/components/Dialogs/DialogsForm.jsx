import React from 'react';
import { Field, reduxForm } from 'redux-form'
import s from './Dialogs.module.css'


const addDialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={'textarea'} name={'newMessage'}/>
            </div>
            <div>
            <button>Add message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:'addDialogs'})(addDialogsForm)



export default DialogsReduxForm