import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const products =[
    {name:'Photoshop', price:'$100'},
    {name:'Illustrator', price:'$80'},
    {name:'PDF Reader', price:'$90'},
    {name:'PDF Paint', price:'$90'}
  ]
  var style={
    color: 'blue',
    backgroundColor: 'yellow'
  }
  var person={
    name:"Dr. Mahfuz",
    job: "Singer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first React Paragraph</p>
        <h1 style={{color:'red'}}>Hi Im Abir </h1>
        <h2 style={style}>My age is {20+5}</h2>
        <h2>{person.name+"  "+ person.job}</h2>
        <Person name="Nayok Rubel"></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[0]}></Product>
        <Product product={products[3]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>


      </header>
    </div>
  );
}
function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
  <div>
    <h3>Dynamic Users{users.length}</h3>
    <ul>
      {
        users.map(user=><li>{user.name}</li>)
      }
    </ul>
  </div>
  )
}
function Counter(){
  const[count,setCount] =useState(10);
  const handleIncrease =()=>setCount(count+1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}> Increase</button>
      <button onClick={()=>setCount(count-1)}> Decrease</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid black',
    orderRadius:'5px',
    margin:'10px',
    padding:'20px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} =props.product;
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button>Buy Now</button>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid blue',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name:{props.name}</h1>
      <h3>Hero of the Year</h3>
    </div>
  )
}
export default App;
