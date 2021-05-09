import React, { useEffect } from 'react'
import Cookie from "js-cookie";
import { decode } from "string-encode-decode";
import data from '../../data/blog.json';

function Dashboard() {
    useEffect(()=>{
        if(Cookie.get('userId')){
            let result = data.user.filter(item => item.username.includes(decode(Cookie.get('userId'))));
            if(result.length < 1){
                window.location.href = '/admin'
            }
        }
    },[])
    return (
        <>

         Dashboard Page   
         <br/>
         {decode(Cookie.getJSON('userId'))}
        </>
    )
}

export default Dashboard
