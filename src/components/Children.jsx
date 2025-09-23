import React from 'react'

const Children = (props) => {
    return (
        <div className='font-semibold border border-red-500 m-4 p-4'>{props.children}</div>
    )
}

export default Children