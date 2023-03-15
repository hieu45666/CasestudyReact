import React from 'react'
import Footer from '../ChildComponent/Footer'
import Header from '../ChildComponent/Header'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Nav from './Nav'

export default function Home1() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Nav/>
      <div className='container w-50 h-50'>
      <Routes>
          <Route path='/login' element={<LoginForm/>} key='login'></Route>
          <Route path='/signup' element={<SignUpForm/>} key='signup'></Route>
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
