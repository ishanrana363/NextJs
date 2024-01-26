
'use client'
import React, {useEffect, useState} from 'react';
const Page = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        (async ()=>{
            let response = await fetch('https://dummyjson.com/products')
            let json = await response.json()
            setData(json["products"])
        }) ()
    },[])
    return (
        <div>
            {
                data.map((item,i)=>{
                    return(
                        <div key={i} >
                            <h1>{ item["title"] }</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Page;