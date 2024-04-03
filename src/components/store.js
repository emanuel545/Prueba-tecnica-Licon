import create from 'zustand';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const useGlobalState = create(set => ({
  todos: [],
  fetchTodos: async () => {
    try {
      const response = await fetch(apiUrl);
      const todos = await response.json();
      set({ todos });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  },
  addTodo: todo => set(state => {
    const lastId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id : 0;
    const newTodo = { ...todo, id: lastId + 1 };
    return { todos: [...state.todos, newTodo] };
  }),
}));

const useGlobalActions = () => useGlobalState(state => state);

export { useGlobalState, useGlobalActions };