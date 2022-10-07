import React,{} from 'react';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Nav from './Components/Nav';



const App = () => {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Nav/>
         <Content/>
    </div>
  );
}

export default App;

