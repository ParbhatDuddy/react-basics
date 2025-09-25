import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchAxios = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        const res = axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setData(res.data))
    }, [])
    console.log(data)
    return (
        <div>FetchAxios</div>
    )
}

export default FetchAxios