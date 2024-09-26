import { User } from './user.interface';
import { Cart } from './cart.interface';
import { Product } from './products.interface';

export interface ContextProps {
  cart: Cart;
  products: Product[];
  user?: User;
  setCart: (cart: Cart) => void;
  setProducts: (products: Product[]) => void;
  setUser: (user: User | undefined) => void;
}
