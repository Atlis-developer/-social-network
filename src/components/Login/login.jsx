import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { ElementInput } from '../../utils/validators/FormController';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    const Input = ElementInput ('input');
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={required} name={'login'} placeholder={'Login'} />
            </div>
            <div>
                <Field component={Input} validate={required} name={'password'} placeholder={'password'} />
            </div>
            <div>
                <Field component={Input} validate={required} name={'remember'} type={'checkbox'} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login