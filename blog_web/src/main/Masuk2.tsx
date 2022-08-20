import React,{  useEffect, useState , SyntheticEvent} from 'react'
import {Link ,useNavigate  } from 'react-router-dom';
import axios from "axios";
import Users from '../config/Users';
const Masuk2 = () => {

    //define state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //define state validation

    //define history
    const navigate = useNavigate();

    //function "loginHanlder"
    const loginHandler = async (e : any) => {
        e.preventDefault();
        if(username || password){
          localStorage.setItem('LOGIN', JSON.stringify(username));
          return navigate('/HalamanUtama')
 
        }
        // await axios.post('http://localhost:8000/users/login-user')
        // // send data to server
        // .then((response) => {

        //     //set token on localStorage
        //     localStorage.setItem('LOGIN', "local");

        //     //redirect to dashboard
        //   })
        // .catch((error) => {
        //   console.log("error")
        // })
    };
  return (
    <React.Fragment>
      <img className='image-register' src="./Pegunungan.jpg" alt="" />
       <form className='Login'>
         <label>
         <p>Masuk Member</p>
          <input type="input" placeholder='username' className='username' required value={username} onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <input className='password 'type="password" placeholder='KataSandi' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type='submit' onClick={loginHandler}>Masuk</button>
          <ul>
            <li><Link to='./Pendaftaran'>Pendaftaran Member Blog</Link></li>
          </ul>
        </label>
    </form>
    
    </React.Fragment>
  )
}

// onClick={()=>navigate("/HalamanUtama")}

export default Masuk2