import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function TestCloud(){

    const [response, setResponse] = useState([])

    function handleClick(){
        //axios.get("http://localhost:8080/v1/items/")
        axios.get("http://demoapp-db-dev.up.railway.app/v1/items/")
        
        .then((resp) =>setResponse(resp.data))
    }

    return(
        <div>
            <button className='apiCall' onClick={handleClick}> Call API </button>
            {
                response[0].itemName
            }
        </div>
    )

    

}
