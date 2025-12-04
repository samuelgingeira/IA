export const initialCartState = {
  items: {} 
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const p = action.payload; 
      const existing = state.items[p.id];
      const quantity = existing ? existing.quantity + 1 : 1;
      return {
        ...state,
        items: {
          ...state.items,
          [p.id]: { ...p, quantity }
        }
      };
    }

    case 'INCREMENT': {
      const id = action.payload;
      const existing = state.items[id];
      if (!existing) return state;
      return {
        ...state,
        items: { ...state.items, [id]: { ...existing, quantity: existing.quantity + 1 } }
      };
    }

    case 'DECREMENT': {
      const id = action.payload;
      const existing = state.items[id];
      if (!existing) return state;
      const newQty = existing.quantity - 1;
      const newItems = { ...state.items };
      if (newQty <= 0) {
        delete newItems[id];
      } else {
        newItems[id] = { ...existing, quantity: newQty };
      }
      return { ...state, items: newItems };
    }

    case 'REMOVE': {
      const id = action.payload;
      const newItems = { ...state.items };
      delete newItems[id];
      return { ...state, items: newItems };
    }

    case 'CLEAR': {
      return initialCartState;
    }

    default:
      return state;
  }
}
