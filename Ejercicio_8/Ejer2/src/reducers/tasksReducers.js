export const initialTasks = [
  { id: 't1', text: 'Comprar leche', author: 'Ana', completed: false },
  { id: 't2', text: 'Enviar informe', author: 'Luis', completed: false }
];

export function tasksReducer(state, action) {
  switch(action.type) {
    case 'ADD': {
      return [...state, action.payload];
    }
    case 'TOGGLE': {
      return state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
    }
    case 'REMOVE': {
      return state.filter(t => t.id !== action.payload);
    }
    default:
      return state;
  }
}
