import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
function YoutubeChanel() {


    const initialValues = {
        name: 'Sachin',
        email: '',
        channel: '',
        comments: '',
        social: {
            fb: '',
            tw: ''
        },
        number:['','']
    }
    const onSubmit = values => {
        console.warn(values);
    }
    const validate = values => {
        let error = {}
        if (!values.name) {
            error.name = "Required"
        }
        if (!values.email) {
            error.email = "Required"
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)) {
            error.email = "Invalide Email Formate"
        }
        if (!values.channel) {
            error.channel = "Required"
        }

        return error;
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required').min(6).max(10),
        email: Yup.string().email('Invalide Email Formate').required('Required'),
        channel: Yup.string().required('Required'),
        comments: Yup.string().required('Required')

    })
    console.log();
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form >
                <label htmlFor='Name'>Name</label>
                <Field name='name' type='text' id='name' />
                <p className='error'><ErrorMessage name='name' /></p>
                <label htmlFor='email'>Email</label>
                <Field name='email' type='email' id='email' />
                <p className='error'><ErrorMessage className='error' name='email' /></p>
                <label htmlFor='channel'>Channel</label>
                <Field name='channel' type='text' id='channel' />
                <p className='error'> <ErrorMessage name='channel' /></p>
                <label htmlFor='comments'>Comments</label>
                <Field name='comments' as="textarea" id='comments' />
                <p className='error'> <ErrorMessage name='comments' /></p>
                <label htmlFor='fb'>Facebook</label>

                <Field name='social.fb' type="text" id='fb' />
                <p className='error'> <ErrorMessage name='comments' /></p>
                <label htmlFor='tw'>Tweeter</label>
                <Field name='social.tw' type="text" id='tw' />
                <p className='error'> <ErrorMessage name='comments' /></p>

                <label htmlFor='fb'>First Number</label>

                <Field name='number[0]' type="text" id='no1' />
                <p className='error'> <ErrorMessage name='comments' /></p>
                <label htmlFor='tw'>Second Number</label>
                <Field name='number[1]' type="text" id='no2' />
                <p className='error'> <ErrorMessage name='comments' /></p>

                <button type="submit">Submit</button>

            </Form>
        </Formik>
    )
}

export default YoutubeChanel