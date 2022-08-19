import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import AllRoute from './pages/AllRoute';

function App() {

 

  const [color,setcolor] = useState("white")

  function colorfun(){
    if(window.scrollY >= 50 && window.scrollY < 1000){
      setcolor('first')
    }else if(window.scrollY >= 1000 && window.scrollY < 1800){
      setcolor('second')
    }else if(window.scrollY >= 1800 && window.scrollY < 2000){
      setcolor('third')
    }  
     else if(window.scrollY < 50){
      setcolor('white')
    }
  }

   window.addEventListener('scroll', colorfun)


  
  return (
    <div className={`App ${color}`} >
        <AllRoute/>
    </div>
  );
}

export default App;
