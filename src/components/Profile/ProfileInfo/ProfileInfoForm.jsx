import React from 'react';
import s from './ProfileInfoForm.module.css'
import { Form, Field } from "react-final-form";

export const ProfileInfoForm = (props) => {
    const onSubmit = (values) => {
        props.changeMyProfile(values)
        props.setForm(false)
    };
    return (
        <Form onSubmit={onSubmit}
        initialValues={{...props.profile}}
        validate={values => {
            const errors = {}
            if (!values.aboutMe) {
              errors.aboutMe = 'Required'
            }
            return errors
          }}
            render={({ handleSubmit, submitError, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    
                    <div>
                        <label>Имя:</label><Field className={s.field} component='input' name={'fullName'} placeholder='Имя' />
                    </div>
                    <div>
                        <label>Ищете работу?</label><Field className={s.field} component='input' name={'lookingForAJob'} type={'checkbox'} />
                    </div>
                    <div>
                        <label>Навыки:</label><Field className={s.field} component='input' name={'lookingForAJobDescription'} placeholder='Навыки' />
                    </div>
                    <div>
                        <label>Про меня:</label><Field className={s.field} component='input' name={'aboutMe'} placeholder='Про меня' />
                    </div>
                    <h3>Контакты</h3>
                    <div>
                        <label>Facebook:</label><Field className={s.field} component='input' name={'contacts.facebook'} placeholder='Facebook' />
                    </div>
                    <div>
                        <label>Website:</label><Field className={s.field} component='input' name={'contacts.website'} placeholder='Website' />
                    </div>
                    <div>
                        <label>vk:</label><Field className={s.field} component='input' name={'contacts.vk'} placeholder='vk' />
                    </div>
                    <div>
                        <label>Twitter:</label><Field className={s.field} component='input' name={'contacts.twitter'} placeholder='Twitter' />
                    </div>
                    <div>
                        <label>Instagram:</label><Field className={s.field} component='input' name={'contacts.instagram'} placeholder='Instagram' />
                    </div>
                    <div>
                        <label>Youtube:</label><Field className={s.field} component='input' name={'contacts.youtube'} placeholder='Youtube' />
                    </div>
                    <div>
                        <label>github:</label><Field className={s.field} component='input' name={'contacts.github'} placeholder='github' />
                    </div>
                    <div>
                        <label>mainLink:</label><Field className={s.field} component='input' name={'contacts.mainLink'} placeholder='mainLink' />
                    </div>
                    <div className={s.error}>
                        {props.error}
                    </div>
                    <div className={s.buttons}>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => { form.reset() }}>Reset</button>
                    </div>
                </form>
            )}
        />
    )
}
