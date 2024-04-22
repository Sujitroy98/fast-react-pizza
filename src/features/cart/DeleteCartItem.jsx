import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './CartSlice';

function DeleteCartItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteCartItem;
