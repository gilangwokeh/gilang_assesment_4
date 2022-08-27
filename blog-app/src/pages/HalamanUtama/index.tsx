import React from 'react'
import Header2 from '../Header2/Header2';
import Search from '../Search';
import Footer2 from '../Footer/Footer2';
import Halaman1 from '../../main/Halaman1';
const HalamanUtama = () => {
  return (
    <React.Fragment>
    <Search/>
     <Header2/>
     <Halaman1/>
     <Footer2/>
    </React.Fragment>
  )
}

export default HalamanUtama;