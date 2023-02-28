import React, { useState } from 'react'
import axios from 'axios'

// get data by axios from api request
const ApiAxios = async (url) => {

    const [data, setData] = useState([]);

    const res = await axios.get(url);

    setData(res.data);

    return [data];

}

export default ApiAxios