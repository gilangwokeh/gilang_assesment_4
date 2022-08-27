import React from 'react'
import { Link ,Navigate } from 'react-router-dom';

const Halaman1 = () => {
  const token = localStorage.getItem('token')
  if(!token){
   return <Navigate to="/"/>
  }
  return (
    <React.Fragment>
      <div className='grid-container'>
        <div className='item-1'>
          <Link to='/'><img className='facebook1' src="./facebook.png" alt="" /></Link>
          <Link to='/'><img className='instagram1' src="./instagram.png" alt="" /></Link>
          <Link to='/'><img className='lingkend1' src="./lingkend.png" alt="" /></Link>
        </div>
        <div className='item-2'>
          <p className='text-halaman1'>assallammualikum wr wb. </p>
          <p className='text-halaman1'>Alhamdulillah Puji syukur penulis panjatkan dengan menyebut Allah yang Maha Besar & Maha Penyayang, penulis bersyukur dengan Bimbingan Karunia & Rahmat Nya.</p>
          <p className='text-halaman1'>perkenalkan nama saya GIlang Romadhon,tinggal Di Jakarta Pusat ,saya lahir di  Jakarta Pusat . </p>
          <p className='text-halaman1'>kali ini saya buat website untuk bikin artikel sekaligus di blog saya.</p>
          <p className='text-halaman1'>saya buat blog ini karena dimana orang tidak mengetahui artinya penting olahraga untuk kehidupan sehari - hari.</p>
          <p className='text-halaman1'>terutama olahraga banyak sekali kegiatan dan bermacam macam kegiatan ,olahraga sangat baik di lakukan di pagi hari di utamakan makan terlebih dahulu baru minum lalu ngopi sedikit untuk semangat olahraga dan jangan lupa berdoa sebelum olahraga.</p>
          <p className='text-halaman1'>sering melihat orang lain olahraga di tempat olahraga atau di tempat lain ,orang lain sering sekali olahraga setiap hari libur terutama hari minggu itu hari libur para pekerja kantor atau anak sekolahan.</p>
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