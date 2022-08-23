import React from 'react'
import { Link ,Navigate } from "react-router-dom";

const Olahraga2 = () => {
  return (
    <React.Fragment>
      <div className='grid-container'>
        <div className='item-1'>
          <Link to='/'><img className='facebook1' src="./facebook.png" alt="" /></Link>
          <Link to='/'><img className='instagram1' src="./instagram.png" alt="" /></Link>
          <Link to='/'><img className='lingkend1' src="./lingkend.png" alt="" /></Link>
        </div>
        <div className='item-2'>
          <h1 className="header-title-article">OLAHRAGA</h1>
          <img className='img-olahraga' src="./olahraga.jpg" alt="" />
          <ol>
            <li className='header-li'>mendaki gunung</li>
            <p>Kegiatan pengganti olahraga lain yang dapat Anda coba adalah mendaki gunung. Mendaki gunung merupakan aktivitas fisik yang memiliki banyak manfaat.</p>
            <p>Selain Anda bisa menikmati pemandangan, rutin mendaki gunung dapat menurunkan risiko penyakit jantung, mengontrol tekanan darah dan gula darah, dan meningkatkan kepadatan tulang.</p>
            <li className='header-li'>bejalan kaki</li>
            <p>Jika Anda tidak suka berlari atau tidak dapat berlari karena cedera, jangan paksakan untuk berlari. Pilihlah aktivitas jalan kaki.</p>
            <p>Jalan kaki yang dilakukan selama 30 menit dalam sehari mampu mengurangi risiko tekanan darah tinggi, kolesterol tinggi, diabetes, dan stroke.</p>
            <li className='header-li'>lari lari di pagi hari</li>
            <p>jika anda lari lari di pagi hari membugarkan tubuh dan menghirup udara segar bila di lingkungan kamu dikelilingin pohon hijau.</p>
          </ol>
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

export default Olahraga2