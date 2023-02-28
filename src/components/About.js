import { useEffect, useState } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { style } from './about_style';
import '../App.css';

const About = () => {


  const [user, setUser] = useState('cherki-hamza');
  const [userData, setUserData] = useState([]);
  const [active, setActive] = useState(false);

  const url = `https://api.github.com/users/${user}`;

  const github = 'https://github.com/cherki-hamza';

  useEffect(() => {

    const GetUser = async () => {

      const res = await axios.get(url);

      setUserData(res.data);

      //console.log(userData);

    }


    GetUser();

  }, []);

  const H4 = styled.h4`
    color:red;
    font-size: 20px;

  `;


  return (
    <div className='container d-flex justify-content-center'>
      <div className="card">
        <div className="img">
          <img style={style.IMG} src={userData.avatar_url} />
        </div>
        <div className="infos">
          <div className="name">
            <h2>{userData.name}</h2>
            <h4 style={style.H4}>@{userData.company}</h4>
          </div>
          <p className="text">
            {userData.bio}
          </p>
          <ul className="stats">
            <li>
              <h3>{userData.followers}K</h3>
              <h4>Views</h4>
            </li>
            <li>
              <h3>{userData.public_repos}</h3>
              <h4>Projects</h4>
            </li>
            <li>
              <h3>{userData.following}k</h3>
              <h4>Followers</h4>
            </li>
          </ul>
          <div className="links">
            <button className="follow mx-4">Follow</button>
            <a target='_blink' href={github}><button className="view">View profile</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About