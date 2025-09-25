import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Fetch = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    const submit = () => {
        //submit 
        navigate('/fetch')
    }
    // console.log('data', data)
    return (
        <div>
            This is home
            <Link to='/fetch'>
                <button>Fetch axios</button>
            </Link>
                <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Fetch