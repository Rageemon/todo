import logo from './logo.svg';
import './App.css';
import Input from './components/input'
import Desc from './components/desc'


function App() {
  return (
    <>
      <Input label="Enter Title" />
      <Input label="Enter Desc" />
      <Desc title="none" desc="none"/>
    </>
  )
}

export default App;
