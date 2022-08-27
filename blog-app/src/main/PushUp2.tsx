import React from 'react'
import { Link ,Navigate } from 'react-router-dom';

const PushUp2 = () => {
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
          <h3 className="header-title-article">PUSH UP</h3>
          <img className='img-olahraga' src="./pushUp.jpg" alt="" />
          <p className='paraghragh-text'>Tolak angkat (bahasa Inggris: push-up) adalah jenis senam kekuatan yang berfungsi untuk menguatkan otot biseps maupun triseps. Posisi awal tidur tengkurap dengan tangan di sisi kanan kiri badan. Kemudian, badan didorong ke atas dengan kekuatan tangan. Posisi kaki dan badan tetap lurus atau tegap. Setelah itu, badan diturunkan dengan tetap menjaga kondisi badan dan kaki tetap lurus. Badan turun tanpa menyentuh lantai atau tanah. Naik lagi dan dilakukan secara berulang. Kegiatan ini dapat dikombinasikan dengan:</p>
          <ol className='pushup3'>
            <p>1.mengubah jarak telapak tangan</p>
            <p>2.bentuk tangan yang menyentuh lantai: membuka, mengepal, menggunakan jari, atau punggung tangan</p>
            <p>3.mengubah jarak  antarkaki</p>
            <p>4.mengubah ketinggian letak kaki: dengan menggunakan kursi atau kaki yang satu ditindihkan ke kaki yang lain</p>
            <p>5.mengubah jumlah tangan yang digunakan: satu tangan atau dua tangan</p>
            <p>6.mengubah bentuk lengan tangan menjadi kuat</p>
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

export default PushUp2