import Header from '../Header'
import React, {SyntheticEvent, useState , useEffect} from 'react'
import Masuk2 from '../../main/Masuk2'
import Footer2 from '../Footer/Footer2'
const Login : React.FC = () => {
return (
    <React.Fragment>
      <Header/>
        <Masuk2/>
      <Footer2/>
    </React.Fragment>  
  )
}
export default Login