import React from 'react';
import { Field, reduxForm, reset } from 'redux-form'
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

const afterSubmit = (result, dispatch) =>
  dispatch(reset('addDialogs'));

const DialogsReduxForm = reduxForm({form:'addDialogs', onSubmitSuccess: afterSubmit})(addDialogsForm)



export default DialogsReduxForm