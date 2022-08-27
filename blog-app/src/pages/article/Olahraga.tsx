import React from 'react'
import Search from '../Search';
import Footer2 from '../Footer/Footer2';
import Olahraga2 from '../../main/Olahraga2';
import Header2 from '../Header2/Header2';
import Komentar from '../../main/Komentar';
const Olahraga = () => {
  return (
    <React.Fragment>
    <Search/>
      <Header2/>
      <Olahraga2/>
      <Komentar/>
    <Footer2/>
    </React.Fragment>
  )
}

export default Olahraga