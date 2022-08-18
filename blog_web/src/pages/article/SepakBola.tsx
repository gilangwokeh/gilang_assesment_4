import React from 'react'
import Header2 from '../Header2/Header2';
import Search from '../Search';
import Footer2 from '../Footer/Footer2';
import SepakBola2 from '../../main/SepakBola2';
import Komentar from '../../main/Komentar';
const SepakBola = () => {
  return (
   <React.Fragment>
  <Search/>
      <Header2/>
      <SepakBola2/> 
      <Komentar/>   
  <Footer2/>
   </React.Fragment>
  )
}

export default SepakBola