import React, { useEffect, useState } from 'react'
import ApiFetch from '../customhooks/ApiFetch'
import ApiAxios from '../customhooks/ApiAxios';
import axios from 'axios';

const ApiData = () => {

  const [state, setState] = useState([]);
  //const [state] = ApiFetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = ApiAxios('https://jsonplaceholder.typicode.com/posts')

  const fetchAxios = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/posts');
    setState(res.data);
    //console.log(res.data);
  }


  useEffect(() => {
    fetchAxios()
  }, []);


  return (
    <div>
      <h2 className='text-primary'>Fetch Api from https://jsonplaceholder.typicode.com/posts Example</h2>
      {
        state.map((post) => {
          return (<h5 key={post.id} style={{ color: 'red' }}>{post.title}</h5>)
        })
      }
    </div>
  )
}

export default ApiData