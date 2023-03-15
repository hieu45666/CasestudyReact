import React from 'react'
import Footer from '../ChildComponent/Footer'
import Header from '../ChildComponent/Header'
import Menu from '../ChildComponent/MenuUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routers } from '../../router/routers'


export default function HomeUser() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Menu />
      <Routes>
      {
        routers.map(item =>{
          return <Route path={item.path} element={item.element} key={item.name}></Route>
        })
            }
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
