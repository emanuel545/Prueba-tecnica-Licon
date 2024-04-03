import React, { useState } from 'react';

function Card({ todo }) {
  const { id, title, completed } = todo;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`card ${completed ? 'completed' : 'incomplete'}`}>
      <div className="content">
        <h3>ID: {id}</h3>
        {isOpen && (
          <>
            <h4>Title: {title}</h4>
            <p>Completed: {completed ? 'Yes' : 'No'}</p>
          </>
        )}
      </div>
      <div className="button-container">
        <ToggleButton isOpen={isOpen} onClick={toggleCard} />
      </div>
    </div>
  );
}

function ToggleButton({ isOpen, onClick }) {
  return (
    <button className='button-open-close' onClick={onClick}>
      {isOpen ? 'Cerrar' : 'Abrir'}
    </button>
  );
}

export default Card;