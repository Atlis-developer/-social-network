import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { ElementInput } from '../../utils/validators/FormController';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {loginControl} from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../../utils/validators/FormController.module.css'

const LoginForm = (props) => {
    const Input = ElementInput ('input');
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={required} name={'email'} placeholder={'email'} />
            </div>
            <div>
                <Field component={Input} validate={required} name={'password'} placeholder={'password'} />
            </div>
            <div>
                <Field component={Input}  name={'rememberMe'} type={'checkbox'} />remember me
            </div>
            <div className={s.error}>
            {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    const onSubmit = (formData) =>{
        props.loginControl(formData.email, formData.password, formData.rememberMe)
    }
   
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


let mapStateToProps = (state)=>{
    
    return{
        isAuth: state.auth.isAuth,
    }
}

export default connect (mapStateToProps, {loginControl})(Login) 