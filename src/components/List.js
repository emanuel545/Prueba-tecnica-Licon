import React, { useState } from 'react';
import Card from './card';

function List({ todos }) {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  return (
    <div className="list">
      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => handleFilterChange('completed')}>Completed</button>
        <button className={filter === 'incomplete' ? 'active' : ''} onClick={() => handleFilterChange('incomplete')}>Incomplete</button>
      </div>
      {filteredTodos.map(todo => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default List;