import React from 'react'
import { Link } from 'react-router-dom';

const SepakBola2 = () => {
  return (
    <React.Fragment>
      <div className='grid-container'>
      <div className='item-1'>
        <ul>
          <li>
          <Link to='/'>
              <button className='fb'>facebook</button>
            </Link>
            <Link to='/'>
              <button className='twitter'>twitter</button>
            </Link>
            <Link to='/'>
              <button className='Linkend'>Linkend</button>
            </Link>
            <Link to='/'>
              <button className='instagram'>Instagram</button>
            </Link>
          </li>
        </ul>
       </div>
       <div className='item-2'>
          <h1 className="header-title-article">SepakBola</h1>
            <img className='img-olahraga' src="./sepakBola.jpg" alt=""/>
                <ol className='text-bulutangkis'>
                  <li>Sepak bola asosiasi (bahasa Inggris: Association Football atau Soccer) atau hanya sepak bola adalah cabang olahraga yang menggunakan bola yang pada umumnya terbuat dari bahan kulit, yang disebut "bola sepak", dan dimainkan oleh dua tim yang masing-masing beranggotakan 11 (sebelas) orang pemain inti dan beberapa pemain cadangan. Memasuki abad ke-21, olahraga ini telah dimainkan oleh lebih dari 250 juta orang di 200 negara.[2][3][4][5] Sepak bola bertujuan untuk mencetak gol sebanyak-banyaknya dengan memasukan bola ke gawang lawan. Sepak bola dimainkan dalam lapangan terbuka yang berbentuk persegi panjang, di atas rumput atau rumput sintetis.</li>
                  <li>Secara umum, hanya penjaga gawang saja yang berhak menyentuh bola dengan tangan atau lengan di dalam daerah gawangnya, sedangkan 10 (sepuluh) pemain lainnya diizinkan menggunakan seluruh tubuhnya selain tangan, biasanya dengan kaki untuk menendang, dada untuk mengontrol, dan kepala untuk menyundul bola. Tim yang mencetak gol paling banyak pada akhir pertandingan menjadi pemenangnya. Jika hingga waktu berakhir masih berakhir imbang, maka dapat dilakukan undian, perpanjangan waktu maupun adu penalti, bergantung pada format penyelenggaraan kejuaraan. Dari sebuah pertandingan resmi, 3 poin diberikan kepada tim pemenang, 0 poin untuk tim yang kalah dan masing-masing 1 poin untuk dua tim yang bermain imbang.[6] Meskipun demikian, pemenang sebuah pertandingan sepak bola dapat dibatalkan sewaktu-waktu atas skandal dan tindakan kriminal yang terbukti di kemudian hari. Sebuah laga sepak bola dapat dimenangkan secara otomatis oleh sebuah tim dengan 3-0 apabila tim lawan sengaja mengundurkan diri dari pertandingan (Walk Out).</li>
                  <li> untuk pertandingan internasional dewasa, lapangan sepak bola internasional yang digunakan memiliki panjang yang berkisar antara 100-120 meter dan lebar 65-75 meter.[9] Di bagian tengah kedua ujung lapangan, terdapat area gawang yang berupa persegi empat berukuran dengan lebar 7.32 meter dan tinggi 2.44 meter.[9] Di bagian depan dari gawang terdapat area penalti yang berjarak 16.5 meter dari gawang.[9] Area ini merupakan batas kiper boleh menangkap bola dengan tangan dan menentukan kapan sebuah pelanggaran mendapatkan hadiah tendangan penalti atau tidak.</li>
                  <li>sepakbola indonesia sudah terbaik di asean tenggara.</li>
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

export default SepakBola2