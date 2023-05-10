import { useFormik } from 'formik'
import React from 'react'

function YoutubeChanel() {


const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.warn(values);
}
const validate= values => {
    let error = {}
    if (!values.name) {
        error.name = "Required"
    }
    if(!values.email){
        error.email= "Required"
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        error.email= "Invalide Email Formate"
    }
    if(!values.channel){
        error.channel= "Required"
    }
    
    return error;
}
    const formil = useFormik({
        initialValues,
        onSubmit ,
        validate
    })
       console.log("Touchetd",formil.touched);
    return (
        <div>
            <form onSubmit={formil.handleSubmit}>
                <label htmlFor='Name'>Name</label>
                <input 
                    name='name' 
                    type='text' 
                    id='name' 
                    onChange={formil.handleChange} 
                    onBlur={formil.handleBlur}
                    value={formil.values.name} 
                />
                {formil.touched.name&&formil.errors.name?<p style={{color:'red'}}>{formil.errors.name}</p>:null}
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' id='email' onBlur={formil.handleBlur}  onChange={formil.handleChange} value={formil.values.email} />
                {formil.touched.email &&formil.errors.email?<div style={{color:'red'}}>{formil.errors.email}</div>:null}
                <label htmlFor='channel'>Channel</label>
                <input name='channel' type='text' id='channel' onBlur={formil.handleBlur} onChange={formil.handleChange} value={formil.values.channel} />
                {formil.touched.channel &&formil.errors.channel?<div style={{color:'red'}}>{formil.errors.channel}</div>:null}
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default YoutubeChanel