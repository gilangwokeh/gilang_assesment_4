import React from 'react'
import { Navigate } from 'react-router-dom'
const Komentar = () => {
  const token = localStorage.getItem('token')
  if(!token){
   return <Navigate to="/"/>
  }
  return (
    <React.Fragment>
     <form className='text-form3'>
      <label>
        <p>Komentar :</p>
        <textarea id=""></textarea>
        <br />
        <button type='submit'>Kirim</button>
      </label>
    </form>   
    </React.Fragment>
  )
}

export default Komentar