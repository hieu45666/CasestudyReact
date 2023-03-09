import React from 'react'
import Footer from '../ChildComponent/Footer'
import Header from '../ChildComponent/Header'
import ListProduct from '../ChildComponent/ListProduct'
import Menu from '../ChildComponent/Menu'
import Modal from '../ChildComponent/Modal'
import Slider from '../ChildComponent/Slider'


export default function Home() {
  return (
    <div>
      <Header/>
      <Menu />
      <Slider/>
      <ListProduct/>
      <Footer/>
    </div>
  )
}
