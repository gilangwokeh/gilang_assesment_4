import React from 'react'
import Search from '../Search';
import Footer2 from '../Footer/Footer2';
import PushUp2 from '../../main/PushUp2';
import Header2 from '../Header2/Header2';
import Komentar from '../../main/Komentar';
const PushUp = () => {
  return (
    <React.Fragment>
    <Search/>
      <Header2/>
      <PushUp2/>
      <Komentar/>
    <Footer2/>
    </React.Fragment>
  )
}

export default PushUp