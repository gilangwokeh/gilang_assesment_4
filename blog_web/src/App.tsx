import React from 'react'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import{ Kontak, HalamanUtama,Jogging,Olahraga,PushUp,Pendaftaran,Login ,BuluTangkis,SepakBola } from './pages';
import './App.scss'

const App: React.FC = () => {

  return (
    <React.Fragment>
     <BrowserRouter>
      <Routes>
        <Route path='/HalamanUtama' element={<HalamanUtama/>}/>
        <Route path='/Kontak' element={<Kontak/>}/>
        <Route path='/Jogging' element={<Jogging/>}/>
        <Route path='/Olahraga' element={<Olahraga/>}/>
        <Route path='/Bulutangkis' element={<BuluTangkis/>}/>
        <Route path='/PushUp' element={<PushUp/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/SepakBola' element={<SepakBola/>}/>
        <Route path='/pendaftaran' element={<Pendaftaran/>}/>
      </Routes>
     </BrowserRouter>
    </React.Fragment>
  )
}

export default App