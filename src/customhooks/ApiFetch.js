import React, { useEffect, useState } from 'react'

const ApiFetch = (url) => {

    const [state,setState] = useState([]);

    useEffect(()=>{
        
        fetch(url,{method:'GET'})
            .then((response)=>response.json()) 
            .then((data) => setState(data))   

    },[]);

   // return [state];

}

export default ApiFetch