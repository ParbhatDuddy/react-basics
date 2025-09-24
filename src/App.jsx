import React, { useState } from "react";
import Card from "./components/Card";
import Children from "./components/Children";
import List from "./components/List";
import Controlled from "./components/Controlled";
function App() {
  const [wvalue, setValue] = useState(0)   //value can be of any type ."",{},[],numbers
  const [inputValue, setInputValue] = useState("")
  // console.log('inputValue: ',inputValue)
  return (
    <>
      <h1 className="font-bold p-[15px] bg-purple-400">Hello : {wvalue}</h1>
      <button onClick={() => setValue((wvalue) => wvalue + 1)} >Increment+</button>
      <button onClick={() => setValue((wvalue) => wvalue - 1)} >Decrement-</button>
      <button onClick={() => setValue(0)} >Reset</button>

      <input type="text" value={inputValue} name="Name" onChange={(e) => setInputValue(e.target.value)} placeholder="Enter Your Name" />
      <p>{inputValue}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card title="Card 1" name="depak" />
        <Card title="Card 2" name="depak1" />
        <Card title="Card 3" name="depak2" />
        <Card title="Card 4" name="depak3" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Children >
          <h1>Hello i am first</h1>
          <h1>Hello i am second</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at sapiente facilis nihil, rerum fuga reiciendis iste. Temporibus velit inventore debitis amet perspiciatis? Harum nemo fugiat perferendis nihil saepe libero!</p>
        </Children>
      </div>
      <List/>
      <Controlled/>

    </>
  )
}

export { App }
// export default App;