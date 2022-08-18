import React from 'react'
import Search from '../Search';
import Footer2 from '../Footer/Footer2';
import BuluTangkis2 from '../../main/BuluTangkis2';
import Header2 from '../Header2/Header2';
import Komentar from '../../main/Komentar';

const BuluTangkis = () => {
  return (
  <React.Fragment>
  <Search/>
    <Header2/>
    <BuluTangkis2/>
    <Komentar/>
  <Footer2/>
    </React.Fragment>
  )
}

export default BuluTangkis