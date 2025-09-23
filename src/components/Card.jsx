import React from 'react'

// const Card = (props) => {
const Card = ({title,name}) => {
    // console.log("props",props)
    console.log("title,name",title,name)
    return (
        <div className='font-semibold border border-black p-4'>
            <img src="vite.svg" alt="" />
            <p>{title } </p>
            <p>Name:{name } </p>
        </div>
    )
}

export default Card