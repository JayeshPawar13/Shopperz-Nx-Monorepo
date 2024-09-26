'use client';
import { Product } from '@shopperz/interfaces/products.interface';
import { Cart } from '@shopperz/interfaces/cart.interface';
import { User } from '@shopperz/interfaces/user.interface';

import { ContextProps } from '@shopperz/interfaces/context.interface';

import { createContext, ReactNode, useContext, useState } from 'react';

const defaultContextValues: ContextProps = {
  cart: {
    userId: '',
    items: [],
  },
  products: [],
  setCart: () => {},
  setProducts: () => {},
  setUser: () => {},
};

const AppContext = createContext<ContextProps>(defaultContextValues);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>(defaultContextValues.cart);
  const [products, setProducts] = useState<Product[]>(
    defaultContextValues.products
  );
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{ cart, setCart, products, setProducts, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
}
