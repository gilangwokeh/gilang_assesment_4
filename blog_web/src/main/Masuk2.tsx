import React,{  useEffect, useState , SyntheticEvent} from 'react'
import {Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
const Masuk2 = () => {
  // const [login, setLogin] = useState<string>("")
  const [username, setUsername] = useState(()=>{
    const savedItem = localStorage.getItem("form")
    const parsedItem = JSON.parse(String(savedItem))
    return parsedItem || "" ;
  })
  const [password, setPasword] = useState("")
  let navigate = useNavigate()

  useEffect(()=>{
   const data = localStorage.getItem("from")
   console.log("data",data)

  })
  useEffect(() => {
    localStorage.setItem("from",JSON.stringify(username))
    
  },[username])

  return (
    <React.Fragment>
      <img className='image-register' src="./Pegunungan.jpg" alt="" />
       <form className='Login' onSubmit={(e)=>e.preventDefault}>
         <label>
         <p>Masuk Member</p>
          <input type="input" placeholder='username' className='username' required value={username} onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <input className='password 'type="password" placeholder='KataSandi' required value={password} onChange={(e) => setPasword(e.target.value)} />
          <br />
          <button type='submit' onClick={()=>navigate("/HalamanUtama", { replace: true })}>Masuk</button>
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