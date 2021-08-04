import React from 'react';
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { Element } from '../../../utils/validators/FormController';
import { maxLength, required } from '../../../utils/validators/validators';



const MyPostForm = (props) => {
const Textarea = Element ('textarea');


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={required} name="newPost" id="" cols="100"
                    rows="5" placeholder='Введите сообщение' />
            </div>
            <button>Отправить</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({ form: 'addPost' })(MyPostForm)

export default MyPostReduxForm

