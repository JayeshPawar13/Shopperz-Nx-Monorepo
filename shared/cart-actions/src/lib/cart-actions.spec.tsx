import { render } from '@testing-library/react';

import CartActions from './cart-actions';

describe('CartActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartActions />);
    expect(baseElement).toBeTruthy();
  });
});
