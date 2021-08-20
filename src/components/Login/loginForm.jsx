import React from 'react';
import { Form, Field } from "react-final-form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './loginForm.module.css'
import {loginControl} from '../../Redux/auth-reducer'

const LoginForm = (props) => {
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    const onSubmit = (values) =>{
        props.loginControl(values.email, values.password, values.rememberMe, values.captcha)
    }
    
    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <Form
                onSubmit={onSubmit}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    }
                    return errors;
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <label>Email:</label>
                                    <input {...input} type="text" placeholder="email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Password:</label>
                                    <input {...input} type="text" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="rememberMe">
                            {({ input, meta }) => (
                                <div>
                                    <label>Remember me: </label>
                                    <input {...input} type="checkbox" p />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        {props.error.message && 
                        <div className={s.error}>
                        {props.error.message}
                        </div>}
                        
                        {props.captchaUrl &&
                        <span className={s.captcha}>
                        <img src={props.captchaUrl}/>
                        <Field name="captcha">
                            {({ input, meta }) => (
                                <div>
                                    <label>Symbols:</label>
                                    <input {...input} type="text"  />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        </span>}
                        
                        <div className={s.buttons}>
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
};

const mapStateToProps = (state) =>{
    
    return{
        isAuth: state.auth.isAuth,
        error: state.auth.error,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect (mapStateToProps,{loginControl})(LoginForm)

