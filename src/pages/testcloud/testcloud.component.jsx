import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function TestCloud(){

    const [response, setResponse] = useState([])

    function handleClick(){
        axios.get("http://localhost:8080/v1/items/")
        .then((resp) =>setResponse(resp.data))
    }

    return(
        <div>
            <button className='apiCall' onClick={handleClick}> Call API </button>
            {
                response[0].itemId,
                response[0].itemName,
                response[0].itemCategory,
                response[0].itemDescription
                //response[0].itemPrice
            }
        </div>
    )

    

}
