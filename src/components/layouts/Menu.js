import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Menu = () => {

  // const singleUser = `https://api.github.com/users/cherki-hamza`

  const [user, setUser] = useState('cherki-hamza');
  const [userData, setUserData] = useState([]);

  const url = `https://api.github.com/users/${user}`;



  useEffect(() => {

    const GetUser = async () => {


      const res = await axios.get(url);

      setUserData(res.data);

      //console.log(userData);

    }

    GetUser();

  }, []);


  return (
    <div className='my-3'>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="Bootstrap" width="30" height="24" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">Github About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="portfolio">Portfolio</Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="github">Github Repositories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact Me </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="api">Fetch Api</Link>
              </li>

            </ul>
            <img style={{ borderRadius: '100%', width: '40px', height: '40px' }} src={userData.avatar_url} />
            <a href={userData.blog} target='_blink'>
              <span className='mx-3'>{userData.login}</span>
            </a>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Menu