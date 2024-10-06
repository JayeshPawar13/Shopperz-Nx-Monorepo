import { Cart } from './cart.interface';
import { Product } from './products.interface';
import { User } from './user.interface';

export type CollectionName = 'cart' | 'products' | 'shopping-app-user';
export type CollectionType<T extends CollectionName> = T extends 'cart'
  ? Cart
  : T extends 'products'
  ? Product
  : T extends 'shopping-app-user'
  ? User
  : never;
