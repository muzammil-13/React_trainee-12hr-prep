import React from 'react'
import './App.css'
import UserInfo from './components/UserInfo';
import ItemList from './components/ItemList';

function App() {
  const items=['Money','Travel Bag','Brush', 'Dress', 'Brush']
  
  return (
    <div className="App">
      <UserInfo name="Muzammil Ibrahim" age={23}/>
      <ItemList items={items}/>
    </div>
  )
}

export default App
