import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Users from '../config/Users';
const Pendaftaran2 = () => {
  const [user, setUser] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [NoTelp, setNoTelp] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleSend = async ( ) => {
    let _user: Users = {
      username: user,
      email: email,
      name: name,
      password: password,
      NoTelp: NoTelp
    }
    const urlPost = "http://localhost:8000/api/users/register-user"
    await axios.post(urlPost, _user,)
      .then((res) => { console.log("succes send data") })
      .catch(err => { console.log(err) });
  }

 
  return (
    <React.Fragment>
      <img className='image-register' src="./Pegunungan.jpg" alt="image" />
      <h1 className='paragraph-daftar'>UNTUK INGIN BERGABUNG MENJADI MEMBER BLOG INI SILAHKAN DAFTAR.</h1>
      <div className='formulir2'>
        <form >
          <label>
            <p className='Form-paragraph'>Formulir Pendaftaran</p>
            <ul className='from-regist'>
              <li>
                <input type="input" className="username" placeholder='username' value={String(user)}   onChange={(evt => { setUser(evt.target.value) })} />
              </li>
              <li>
                <input  type="email" className="email-2" placeholder='email anda' value={String(email)}  onChange={(evt => { setEmail(evt.target.value) })} />
              </li>
              <li>
                <input type="input" className="nama" name='name' placeholder='nama Lengkap anda' value={String(name)}  onChange={(evt => { setName(evt.target.value) })} />
              </li>
              <li>
                <input type="password" className="password" placeholder='Kata Sandi' value={String(password)} onChange={(evt => { setPassword(evt.target.value) })} />
              </li>
              <li>
                <input type="number" className="no-ktp" placeholder='masukkan no telp anda' value={String(NoTelp)} onChange={(evt => { setNoTelp((evt.target.value)) })} />
              </li>
            </ul>
            <button type='submit' onClick={handleSend}>Kirim</button>
          </label>
        </form>
      </div>
      <div className='text-advantages'>
        <p>kelebihan :</p>
        <p>Keuntungan menjadi member akan menambah wawasan dari Blog ini.</p>
        <p>bisa menerapkan baca secara nyaman tidak di ganggu iklan.</p>
      </div>
      <div className='text-deficiency'>
        <p>Kekurangan :</p>
        <p>kekurangan tidak masuk member akan kehilangan ilmu dari mamber blog.</p>
        <p>kekurangan update berita dari blog ini,yang pasti kamu bakal ketinggalan informasi dari Member Blog.</p>
      </div>
    </React.Fragment>
  )
}

export default Pendaftaran2