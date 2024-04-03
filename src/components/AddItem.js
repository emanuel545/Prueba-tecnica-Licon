import React, { useState } from 'react';
import { useGlobalActions } from './store';


function AddItem() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const { addTodo } = useGlobalActions();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;

    addTodo({
      title,
      completed,
    });

    // Resetear el formulario después de agregar la nueva tarjeta
    setTitle('');
    setCompleted(false);
  };
  return (
    <form className='addItems' onSubmit={handleSubmit}>
      <input
        className='input-addItem'
        type="text"
        placeholder="Ingrese el Titulo de la Tarjeta"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className='completed-options'>
        <label className='text-completed-label'>
        Completado:
        </label>
        <select value={completed} onChange={(e) => setCompleted(e.target.value)}>
          <option value={true}>Sí</option>
          <option value={false}>No</option>
        </select>
    
      </div>
      <button className='button-new-item' type="submit">Agregar</button>
    </form>
  );
}

export default AddItem;