import CartListItems from '@shopperz-web/src/components/cartItemList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Cart',
    template: '',
  },
  description: 'View Your Cart',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function CartPage() {
  return <CartListItems />;
}
