import React from 'react'
import Search from '../Search';
import Footer2 from '../Footer/Footer2';
import Jogging2 from '../../main/Jogging2';
import Header2 from '../Header2/Header2';
import Komentar from '../../main/Komentar';
const Jogging = () => {
  return (
   <React.Fragment>
    <Search/>
      <Header2/>
      <Jogging2/>
      <Komentar/>
    <Footer2/>
   </React.Fragment>
  )
}

export default Jogging