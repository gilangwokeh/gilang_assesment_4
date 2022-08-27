import React from 'react'
import { Link ,Navigate} from "react-router-dom";

const Jogging2 = () => {
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
          <h1 className="header-title-article">Manfaat Jogging</h1>
          <img className='img-olahraga' src="./jogging2.jpg" alt="" />
          <ol>
            <li className="header-li">Meningkatkan energi</li>
            <p>Manfaaatnya jogging selanjutnya juga dapat meningkatkan energi. Setiap tubuh manusia tentu membutuhkan energi. Tubuh membutuhkan sebuah energi supaya setiap organ tubuh dapat berfungsi secara baik.</p>
            <p>Energi tersebut dihasilkan dari proses metabolisme tubuh. Caranya adalah dengan mengubah makanan dan minuman yang masuk ke dalam tubuh. Melalui energi-energi tersebut, tubuh dapat menjalankan aktivitas secara baik.</p>
            <p>Energi akan membuat tubuh lebih kuat. Itulah yang membuat kamu dapat menjalankan aktivitas sehari-hari. Contohnya seperti berjalan, berlari, bekerja dan lain sebagainya.</p>
            <li className="header-li">mencegah stress</li>
            <p>Stress selalu adalah sebuah reaksi dari tubuh. Stress ini akan muncul ketika seseorang menghadapi sebuah  hal-hal yang kurang baik. Seperti mengalami tekanan, ancaman bahkan mengalami suatu perubahan.</p>
            <p>Stress juga bisa terjadi karena sebuah situasi atau pikiran. Biasanya, hal itu akan membuat seseorang merasa lebih gugup, marah, bersemangat atau bahan merasa putus asa. Situasi itulah yang akan memicu respons dari tubuh.</p>
            <p>Respons yang dikeluarkan dapat terjadi dalam hal fisik atau psikis. Contoh dalam fisik seperti sesak napas, detak jantung lebih cepat, tekanan darah menjadi meningkat dan otot-otot tubuh menjadi kaku.</p>
            <li className="header-li">Menurunkan tekanan darah</li>
            <p>Tekanan darah adalah sebuah ukuran yang menentukan kinerja jantung. Melalui tekanan darah, kita dapat mengetahui seberapa kuat jantung dalam memompa darah. Darah yang dipompa jantung nantinya akan mengalir ke seluruh tubuh.</p>
            <p>Tekanan darah bisa saja bikin orang mengamuk tidak berjalan dalam jumlah yang pasti. Tekanan darah dapat berubah-ubah. Hal itu dikarenakan tekanan darah dapat bervariasi.</p>
            <p >Tekanan darah berubah tergantung apa saja aktivitas yang sedang kamu lakukan. Contohnya seperti saat berolahraga, saat berbicara, saat berjalan dan ketika perubahan perubahan postur seperti duduk kemudian berdiri.</p>
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

export default Jogging2