import React from 'react';
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'



const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name="newPost" id="" cols="100"
                    rows="5" placeholder='Введите сообщение' />
            </div>
            <button>Отправить</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({ form: 'addPost' })(MyPostForm)

export default MyPostReduxForm

