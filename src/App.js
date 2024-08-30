
import './App.css';
import { useState } from 'react';
import items from './data';
 
import Menu from './Components/Menu';

function App() {

  const menuItems = useState(items)[0];
  
 
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
 
        <Menu items ={menuItems}/>
      </section>
    </main>
  );
}

export default App;
