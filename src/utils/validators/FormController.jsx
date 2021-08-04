import React from 'react';
import s from './FormController.module.css'

export const Element = Element => ({input, meta, ...props}) =>{
 let hasError = meta.touched && meta.error

    return (
        <div className={s.form}>
            <textarea className={hasError? s.error: ''} {...input} {...props}/>
            { hasError && <span className={s.errorSpan}>
              <p>{meta.error}</p></span>}
        </div>
    )
}

export const ElementInput = ElementInput => ({input, meta, ...props}) =>{
  let hasError = meta.touched && meta.error
 
     return (
         <div className={s.form}>
             <input className={hasError? s.error: ''} {...input} {...props}/>
             { hasError && <span className={s.errorSpan}>
               <p>{meta.error}</p></span>}
         </div>
     )
 }

/* export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={ s.formControl + " " + (hasError ? s.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { meta.error } </span> }
      </div>
    );
  };*/