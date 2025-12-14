import { useContext } from 'react';

import { CartContext } from '../store/shopping-cart-context';

export default function Cart({ onUpdateItemQuantity }) {
  const { items } = useContext(CartContext);

  return (
    <CartContext.Consumer>
      {/* Should pass a function as a child between the opening and closing Consumer component tags.
      And that function will be executed by React.
      And then that function will automatically receive the context value which I'm consuming here as a parameter(여기서는 cartCtx).
      And this function should return the actual JSX code that should be output by that component.
      So this function is essentially an extra wrapper that's required by that Consumer component to make that consumed context avaliable in that component's JSX code.
      하지만 이 방식은 읽기 어렵고 복잡해서 기본 접근법으로는 적절하지 않음. 권장하지 않음.
      그냥 오래된 React 코드를 읽을 때 이해할 수 있도록 수업 시간에 언급하는 것뿐.
       */}
      {cartCtx => {
        const totalPrice = cartCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

        return (
          <div id="cart">
            {cartCtx.length === 0 && <p>No items in cart!</p>}
            {cartCtx.length > 0 && (
              <ul id="cart-items">
                {cartCtx.map(item => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
