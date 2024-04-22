import { formatCurrency } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import DeleteCartItem from './DeleteCartItem';
import { getCurrentQuantityById } from '../cart/CartSlice';
import UpdateCartItemQuantity from './UpdateCartItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold text-green-700">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateCartItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteCartItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
