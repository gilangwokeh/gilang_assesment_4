import React from 'react'

const Komentar = () => {
  return (
    <React.Fragment>
     <form className='text-form3'>
      <label>
        <p>Komentar :</p>
        <textarea id=""></textarea>
        <br />
        <button type='submit'>Kirim</button>
      </label>
    </form>   
    </React.Fragment>
  )
}

export default Komentar