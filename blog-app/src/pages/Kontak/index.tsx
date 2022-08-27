import React from 'react'
import Header2 from '../Header2/Header2';
import Footer from '../Footer'
import Search from '../Search'
import Kontak2 from '../../main/Kontak2'
const index = () => {
  return (
    <React.Fragment>
      <Search/>
      <Header2/>
      <Kontak2/>
      <Footer/>
   </React.Fragment>
  )
}

export default index