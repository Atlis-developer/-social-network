import React from 'react';
import s from './ProfileInfoForm.module.css'
import { Form, Field } from "react-final-form";

export const ProfileInfoForm = (props) => {
    const onSubmit = (values) => {
        
    };
    return (
        <Form onSubmit={onSubmit}
        initialValues={{...props.profile}}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    <div>
                        <label>Имя:</label><Field className={s.field} component='input' name={'fullName'} placeholder='Имя' />
                    </div>
                    <div>
                        <label>Работаете?</label><Field className={s.field} component='input' name={'lookingForAJob'} type={'checkbox'} />
                    </div>
                    <div>
                        <label>Навыки:</label><Field className={s.field} component='input' name={'lookingForAJobDescription'} placeholder='Навыки' />
                    </div>
                    <h3>Контакты</h3>
                    <div>
                        <label>Facebook:</label><Field className={s.field} component='input' name={'contacts.Facebook'} placeholder='Facebook' />
                    </div>
                    <div>
                        <label>Website:</label><Field className={s.field} component='input' name={'contacts.Website'} placeholder='Website' />
                    </div>
                    <div>
                        <label>vk:</label><Field className={s.field} component='input' name={'contacts.vk'} placeholder='vk' />
                    </div>
                    <div>
                        <label>Twitter:</label><Field className={s.field} component='input' name={'contacts.Twitter'} placeholder='Twitter' />
                    </div>
                    <div>
                        <label>Instagram:</label><Field className={s.field} component='input' name={'contacts.Instagram'} placeholder='Instagram' />
                    </div>
                    <div>
                        <label>Youtube:</label><Field className={s.field} component='input' name={'contacts.Youtube'} placeholder='Youtube' />
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
