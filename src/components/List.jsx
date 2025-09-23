import React from 'react'
const List = () => {
    const listArray = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 }
    ];
    return (
        <div>
            {/* {listArray.map((list, index) => {
                return <h1 key={list.id}>Name: {list.name} ,Age: {list.age}</h1>
            })} */}
            {listArray.map((list, index) => (
                <div>
                    <h1 key={list.id}>Name: {list.name} </h1>
                    <p>Age:{list.age}</p>
                </div>

            ))}
        </div>
    )
}

export default List