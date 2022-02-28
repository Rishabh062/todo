import React from 'react';
import Todo from './Components/Todo';

const App = () => {
  return( 
    <>
  <div className='container'>
    <h3 className='title'>Todo App</h3>
  </div>
  <div className='todo'><Todo/></div>
  
  </>);
};

export default App;

