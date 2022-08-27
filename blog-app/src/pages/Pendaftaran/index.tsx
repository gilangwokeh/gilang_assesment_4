import React ,{useState , useEffect, SyntheticEvent} from 'react'
import Header from '../Header'
import Footer2 from '../Footer/Footer2'
import Pendaftaran2 from '../../main/Pendaftaran2'



const Pendaftaran = () => {
  return (
    <React.Fragment>
      <Header/>
        <Pendaftaran2/>
      <Footer2/>
    </React.Fragment>
  )
}

export default Pendaftaran