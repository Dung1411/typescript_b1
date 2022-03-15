import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/Showinfo'

function App() {
  const [count, setCount] = useState(0);
  const [myName, setMyname] = useState("Le thi dung");
  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState({ name: "Dung", age: 24});
  const [products, setProducts] = useState([
    {id:1, name: "Product A"},
    {id:2, name: "Product B"},
    {id:3, name: "Product C"},
  ])
  return (
    <div className="App">
      Count: {count}
      <hr />
      Full Name: {myName}
      <hr />
      Status: {status ? "true" : "false"}
      <hr />
      Info: {info.name} - {info.age}
      <hr />
      Product: {products.map(item => <div>{item.name}</div>)}
      <hr />
      Component: Showinfo
      <ShowInfo name="dung" age= {20}/>
    </div>
  )
}

export default App
