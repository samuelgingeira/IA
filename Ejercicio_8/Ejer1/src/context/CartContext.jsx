import React, { createContext, useReducer, useMemo, useCallback } from 'react';
import { cartReducer, initialCartState } from '../reducers/cartReducer';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = useCallback((product) => dispatch({ type: 'ADD_ITEM', payload: product }), []);
  const increment = useCallback((id) => dispatch({ type: 'INCREMENT', payload: id }), []);
  const decrement = useCallback((id) => dispatch({ type: 'DECREMENT', payload: id }), []);
  const remove = useCallback((id) => dispatch({ type: 'REMOVE', payload: id }), []);
  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const total = useMemo(() => {
    return Object.values(state.items).reduce((sum, it) => sum + it.price * it.quantity, 0);
  }, [state.items]);

  const value = useMemo(() => ({
    items: state.items,
    addItem, increment, decrement, remove, clear, total
  }), [state.items, addItem, increment, decrement, remove, clear, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
