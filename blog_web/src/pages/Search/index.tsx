import React , { useState} from 'react'
import { Link } from 'react-router-dom'
const page = [  
  { name : "Bulu Tangkis"},
  { name : "Jongging"},
  { name : "OlahRaga"},
  { name : "Sepak Bola"},
  { name : "PushUp"}
]
const Search = () => {
  const [name, setName] = useState<string>("")
  const [foundUsers, setFoundUsers] = useState(page);
  const filter = (e:any) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = page.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(page);
    }

    setName(keyword);
  };
  return (
    <React.Fragment>
     <div className='grid-container1'>
      <div>
        <p className='paragraph-search'>BLOG Gilang</p>
      </div>
      <div className='inputan-search'>
       <form className='inputan-search'>
         <label >
           <input type="search" value={String(name)} onChange={filter} className="input-search" placeholder='Pencarian Halaman Lain'/>
         </label>
         <span className='page-list'>
         {foundUsers.length < 5 ? (
          foundUsers.map((user) => (
            <li key={user.name} className="page-list2">
              <span className="user-name"><Link to="/SepakBola">{user.name}</Link></span>
            </li>
          ))
        ) : ( 
          <p>Pencarian Tidak di temukan</p>
          )}
         </span>
       </form>
      </div>
        <div>
        <img src="./Search.png" alt="" width={30} height={30}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Search