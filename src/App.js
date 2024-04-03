import React, { useEffect } from 'react';
import { useGlobalState, useGlobalActions } from './components/store';
import List from './components/List';
import AddItem from './components/AddItem';

function App() {
  const { todos } = useGlobalState();
  const { fetchTodos } = useGlobalActions();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="App">
      <h1 className="text-title">Prueba Técnica Licon</h1>
      <section className='list-items-todos'>
      <div className='flex-columns'>
      <h1 className="text-subtitle">Lista</h1>
        <List todos={todos} />
      </div>
      <div className='flex-columns'>
      <h1 className="text-subtitle">Añadir </h1>
        <AddItem />
      </div>
      </section>
    </div>
    
  );
}

export default App;   
