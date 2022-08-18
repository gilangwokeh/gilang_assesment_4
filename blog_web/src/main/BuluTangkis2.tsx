import React from 'react'
import { Link } from "react-router-dom";

const BuluTangkis2 = () => {
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
          <h1 className="header-title-article">bulu tangkis</h1>
            <img className='img-olahraga' src="./bulu-tangkis.jpg" alt=""/>
                <ol className='text-bulutangkis'>
                  <li>
                    Bulu tangkis atau badminton (bahasa Inggris: badminton) adalah suatu olahraga yang menggunakan alat yang berbentuk bulat dengan memiliki rongga-rongga di bagian pemukulnya. Dan memiliki gagang. Alat ini dikenal dengan nama raket yang dimainkan oleh dua orang (untuk tunggal) atau dua pasangan (untuk ganda) yang saling berlawanan.
                    Mirip dengan tenis, bulu tangkis bertujuan memukul bola permainan bulu tangkis, yaitu kok (shuttlecock) melewati jaring agar jatuh di bidang permainan lawan yang sudah ditentukan dan berusaha mencegah lawan melakukan hal yang sama.
                  </li>
                  <li>
                    bulu tangkis sangat terkenal apalagi bulutangkis indonesia sangat di seganin atau di kagum oleh banyak negara lain.
                  </li>
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

export default BuluTangkis2