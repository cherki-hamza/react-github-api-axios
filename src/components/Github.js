import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RepoItem } from './RepoItem';

const Github = () => {

    //                      https://api.github.com/users/cherki-hamza/repos
    // const singleUser = `https://api.github.com/users/cherki-hamza`
    // const repos = `https://api.github.com/users/cherki-hamza/repos?per_page=5`
    // https://api.github.com/users/cherki-hamza/repos?page=1&per_page=10&sort=updated

    const [user, setUser] = useState('cherki-hamza');
    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState('cherki-hamza');
    const ui = [];

    const [display, setDisplay] = useState('none');

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (e.key === 'Enter') {
            setSearch(e.target.value);

            try {
                let url = `https://api.github.com/users/${search}/repos`;
                let res = await axios.get(url);
                let ressult = res.data;

                // Work with the response...

                setRepos(ressult);
                setDisplay('block');
                console.log(search);

                console.log(res.data, typeof (res.data));
            } catch (err) {
                if (err.response) {
                    // The client was given an error response (5xx, 4xx)
                    console.log(`Oops response not found ${err.response.data.message}`);
                    //console.log(`Status:  ${err.response.status}`);
                    //console.log(`Headers${err.response.headers}`);
                } else {
                    // Anything else
                    console.log(`Oops auther error`);
                }
            }



        }
    }

    useEffect(() => {


    }, [repos])

    /*   useEffect(() => {
  
          const GetRepos = async () => {
  
              const url = `https://api.github.com/users/${user}/repos`
  
  
              const res = await axios.get(url);
  
              setRepos(res.data);
  
              console.log(repos);
  
              //return repos;
  
          }
  
          GetRepos();
  
      }, []); */


    return (
        <div className='d-flex justify-content-center'>

            <form onSubmit={handelSubmit}>
                <div className='form-group'>
                    <h2 className='text-danger my-5'>Tape Enter or enter your github username for get all your repos </h2>
                </div>
                <div className='form-group'>

                    <input onKeyUp={handelSubmit}
                        style={{ width: '600px' }}
                        name="text"
                        className="form-control"
                        type="text"
                        placeholder="Type github user and press ENTER"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />

                </div>

                <div style={{ display: display }} className='form-group'>

                    {
                        repos.map((repo, index) => {
                            ui.push(<RepoItem key={index} repo={repo} />)
                            return (
                                <div key={index} className="list-group">
                                    {ui}
                                </div>
                            )
                        })
                    }
                </div>

            </form>

        </div>
    )
}

export default Github