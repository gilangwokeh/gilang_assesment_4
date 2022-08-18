import React from 'react'
import { Link } from 'react-router-dom';

const Halaman1 = () => {
  return (
    <React.Fragment>
          <div className='grid-container'>
    <div className='item-1'>
     <ul>
       <li>
         <Link to='/'><button className='fb'>facebook</button></Link>
         <Link to='/'><button className='twitter'>twitter</button></Link>
         <Link to='/'><button className='Linkend'>Linkend</button></Link>
         <Link to='/'><button className='instagram'>Instagram</button></Link>
       </li>
     </ul>
    </div>
    <div className='item-2'>
     <p className='text-halaman1'>perkenalkan nama saya GIlang Romadhon,tinggal Di Jakarta Pusat ,saya lahir di  Jakarta Pusat . </p>
     <p className='text-halaman1'>kali ini saya buat website untuk bikin artikel sekaligus di blog saya.</p>
     <p className='text-halaman1'>saya buat blog ini karena dimana orang tidak mengetahui artinya penting olahraga untuk kehidupan sehari - hari.</p>
    </div>
    <div className='item-3'>
       <p className='artikel-7'>ARTIKEL lain di bawah ini :</p>
       <div className='artikel-2'>
         <ul>
           <li>
             <Link to='/Jogging'>
               <p>jogging</p>
             </Link>
           </li>
           <li>
             <Link to='/Olahraga'>
               <p>olahraga</p>
             </Link>
          </li>
           <li>
             <Link to='/PushUp'>
               <p>pushup</p>
             </Link>
           </li>
           <li>
             <Link to='/BuluTangkis'>
               <p>BuluTangkis</p>
             </Link>
           </li>
           <li>
             <Link to='/SepakBola'>
               <p>SepakBola</p>
             </Link>
             </li>
             <li>
              <Link to="/HalamanUtama">
                <p>Dan Lain Lain</p>
              </Link>
             </li>
            </ul>
          </div>
        </div>
     </div>
    </React.Fragment>
  )
}

export default Halaman1