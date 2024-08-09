// import logo from './logo.svg';
import './App.css';
import Input from './components/input'
import Desc from './components/desc'
import { useState } from "react"


function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  function handleChange(event) {
    if (event.target.name === "Title") {
      setTitle(event.target.value)

    }
    else if (event.target.name === "Desc") {
      setDesc(event.target.value)
    }
  }


  const saveTitle = title

  const saveDesc = desc


  function handleClick() {
    console.log(title)
    console.log(title)

    setTitle("")
    setDesc("")
  }



  return (
    <>
      <Input label="Title" handleChange={handleChange} value={title} />
      <Input label="Desc" handleChange={handleChange} value={desc} />
      <button onClick={handleClick}> Submit</button>
      <Desc title={saveTitle} desc={saveDesc} />
    </>
  )
}

export default App;
