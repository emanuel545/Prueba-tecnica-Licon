import React from 'react';
import Card from './card';

function List({ todos }) {
  return (
    <div className="list">
      {todos.map(todo => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default List;