import React from 'react'

const Kontak2 = () => {
  return (
   <React.Fragment>
   <h4 className="contact">Kontak Pribadi</h4>
    <div className="grid-container">
        <div className="item-informasi">
            <h1 className="text-title">HUBUNGI :</h1>
            <p>.........................</p>
            <p className="text-title">No.Telp :</p>
            <p>
              <b>(+62) 89631119809</b>
            </p>
            <p>.........................</p>
            <p className="text-title">kirim email :</p>
            <p>
              <b>gilangsos99@gmail.com</b>
            </p>
            <p>.........................</p>
        </div>
        <div className='grid-alamat'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507743.03934151644!2d106.32597435000001!3d-6.165229299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5407cf0a523%3A0x96f15e1b168b1b64!2snasi%20uduk%20meja%20kuning!5e0!3m2!1sid!2sid!4v1655353139539!5m2!1sid!2sid" title='maps'></iframe>
          <p className='alamat-1'>ALAMAT:</p>
          <p className='alamat-2'>Jl.haji ung no.f9 RT 06/RW 03 kel utan panjang kec kemayoran jakarta pusat 10650.</p>
        </div>
    </div>
   </React.Fragment>
  )
}

export default Kontak2