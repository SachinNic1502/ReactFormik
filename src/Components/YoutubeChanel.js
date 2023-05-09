import { useFormik } from 'formik'
import React from 'react'

function YoutubeChanel() {
   const formil= useFormik({
    initialValues:{
        name:'',
        email:'',
        channel:''
    },
    onSubmit:values=>{
        console.warn(values);
    }
   })
//    console.warn(formil.values);
  return (
    <div>
        <form onSubmit={formil.handleSubmit}>
            <label htmlFor='Name'>Name</label>
            <input name='name' type='text' id='name' onChange={formil.handleChange} value={formil.values.name}/>
            <label htmlFor='email'>Email</label>
            <input name='email' type='email' id='email' onChange={formil.handleChange} value={formil.values.email}/>
            
            <label htmlFor='channel'>Channel</label>
            <input name='channel' type='text' id='channel' onChange={formil.handleChange} value={formil.values.channel}/>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default YoutubeChanel