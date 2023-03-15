import React, {useState} from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpForm = () => {
    let [form, setForm] = useState({username:"", password:"", repass:"", email:"", birthday:"", name:"", role:"user"});
    const validationSchema = Yup.object().shape({
        //name: Yup.string().required("Please input a name."), 
        username: Yup.string().required("Please input more than 3 characters.").min(3),
        //email: Yup.string().email(),
        password: Yup.string().required("Please input more than 3 characters.").min(3),
        repass: Yup.string().required("Please input more than 3 characters.").min(3),
        //birthday: Yup.string().nullable().required("Wrong date.")
    });
    let handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
  return (
    <div className='bg-white text-center' style={{margin:'auto', width:"250px"}}>
    <Formik 
    initialValues={form}
    validationSchema = {validationSchema}
    enableReinitialize = {true}
    onSubmit = {() => {
    if (form.password === form.repass) {
    axios.post('http://localhost:9000/signup',form)
    .then(function (response) {
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    else {
        alert("Mời nhập lại mật khẩu cho chính xác");
    }}}>
        <Form>
            <p className='mb-0'>Username</p>
            <Field name="username" placeholder="Input Your Username" value={form.username||""} onChange={handleChange} ></Field>
            <ErrorMessage name="username" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Password</p>
            <Field name="password" type='password' placeholder="Input Your Password" value={form.password||""} onChange={handleChange} ></Field>
            <ErrorMessage name="password" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Re-input Password</p>
            <Field name="repass" type='password' placeholder="Re-input Your pass" value={form.repass||""} onChange={handleChange} ></Field>
            <ErrorMessage name="repass" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Email</p>
            <Field name="email" type='email' placeholder="Input Your Email" value={form.email||""} onChange={handleChange} ></Field>
            <ErrorMessage name="email" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Birthday</p>
            <Field name='birthday' type='date' value={form.birthday||""} onChange={handleChange}></Field>
            <ErrorMessage name='birthday' component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Name</p>
            <Field name='name' placeholder="Input Your Name" value={form.name||""} onChange={handleChange}></Field>
            <ErrorMessage name='name' component="div" className='text-danger'></ErrorMessage>
            <br></br>
            <button type='submit' className='btn btn-success mt-2'>Submit</button>
        </Form>
           </Formik>
    </div>
  )
}

export default SignUpForm;