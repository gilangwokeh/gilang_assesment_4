import React, { useEffect, useState , Fragment} from 'react'
import { Link, Navigate} from 'react-router-dom';
import axios from "axios";
import Users from '../config/Users';
const Masuk2 = () => {

  //define state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [navigate,setNavigate] = useState(false);
  const [error,setError] = useState('')

  const onChangeUsername = (e : any) => {
    const value = e.target.value
    setUsername(value)
    setError('')
  }
  const onChangePassword = (e : any) => {
    const value = e.target.value
    setPassword(value)
    setError('')
  }
  const submitLogin = (e : any) => {
    e.preventDefault();
    const data = {
      username : username,
      password : password
    }
    axios.post("http://localhost:8000/api/users/login-user", data)
    .then(login=>{
      if(login){
        localStorage.setItem('token',login.data.token)
        setNavigate(true)
      }
    })
    .catch((e)=>setError(e.response.data.message))
  }
  return (
    <Fragment>
      <div>
      {
        navigate  && (
          <Navigate to="/HalamanUtama"/>
         )
      }
      </div>
      <img className='image-register' src="./Pegunungan.jpg" alt="" />
      <form className='Login'>
        {
          error && (
            <p className='error'>{error}</p>
          )
        }
        <label>
          <p>Masuk Member</p>
          <input type="input" placeholder='username' className='username' required value={username} onChange={onChangeUsername} />
          <br />
          <input className='password ' type="password" placeholder='KataSandi' required value={password} onChange={onChangePassword} />
          <br />
          <button type='submit' onClick={submitLogin}>Masuk</button>
          <ul>
            <li><Link to='./Pendaftaran'>Pendaftaran Member Blog</Link></li>
          </ul>
        </label>
      </form>
    </Fragment>
  )
}

// onClick={()=>navigate("/HalamanUtama")}

export default Masuk2