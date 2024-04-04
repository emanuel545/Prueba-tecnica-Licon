import React, { useState } from 'react';
import Card from './card';

function List({ todos }) {

  const allButtonText = 'All';
  const completedButtonText = 'Completed';
  const incompleteButtonText = 'Incomplete';

  const [filter, setFilter] = useState(allButtonText);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const isActive = (buttonFilter) => filter === buttonFilter ? 'active' : '';

  return (
    <div className="list">
      <div className="filter-buttons">
        <button className={isActive(allButtonText)} onClick={() => handleFilterChange(allButtonText)}>{allButtonText}</button>
        <button className={isActive(completedButtonText)} onClick={() => handleFilterChange(completedButtonText)}>{completedButtonText}</button>
        <button className={isActive(incompleteButtonText)} onClick={() => handleFilterChange(incompleteButtonText)}>{incompleteButtonText}</button>
      </div>
      {todos
        .filter(todo => {
          if (filter === allButtonText) {
            return true;
          } else if (filter === completedButtonText) {
            return todo.completed;
          } else {
            return !todo.completed;
          }
        })
        .map(todo => (
          <Card key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default List;
