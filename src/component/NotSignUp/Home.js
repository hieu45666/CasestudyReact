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
      <div className="bg-secondary">
      <Nav/>
      <div className='container justify-context-center'>
      <Routes>
          <Route path='/' element={<LoginForm/>} key='login'></Route>
          <Route path='/signup' element={<SignUpForm/>} key='signup'></Route>
      </Routes>
      </div>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
