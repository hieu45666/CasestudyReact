import React, {useState} from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
    const [form, setForm] = useState({name:"", phone:"", address:""});
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please input a name."), 
        phone: Yup.string().required("Please input a phone number.").max(11).min(10),
        address: Yup.string().required("Please input a name.").min(3)
    });
    const handleSubmit = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
  return (
    <div className='container'>
    <Formik 
    initialValues={form}
    validationSchema = {validationSchema}
    enableReinitialize = {true}
    onSubmit = {(value) => {
        console.log(value);
    }}>
        <Form>
            <p className='mb-0'>Name</p>
            <Field name="name" placeholder="Input Your Name" value={form.name||""} onChange={handleSubmit} ></Field>
            <ErrorMessage name="name" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Phone</p>
            <Field name='phone' placeholder="Input Your Phone" value={form.phone||""} onChange={handleSubmit}></Field>
            <ErrorMessage name='phone' component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Address</p>
            <Field name='address' placeholder="Input Your Address" value={form.address||""} onChange={handleSubmit}></Field>
            <ErrorMessage name='address' component="div" className='text-danger'></ErrorMessage>
            <br></br>
            <button type='submit' className='btn btn-success mt-2'>Submit</button>
        </Form>
           </Formik>
    </div>
  )
}

export default SignUpForm;