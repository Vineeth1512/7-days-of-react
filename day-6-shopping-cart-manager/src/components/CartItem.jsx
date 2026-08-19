import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const itemTotal = item.price * item.quantity;

  return (
    <div className="border-b border-gray-200 py-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Product */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>

          <p className="text-gray-500">Price: ${item.price}</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-3">
          <span className="font-medium">Quantity:</span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="rounded bg-blue-500 px-3 py-1 text-white"
          >
            +
          </button>
          <span className="font-bold">{item.quantity}</span>

          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="rounded bg-blue-500 px-3 py-1 text-white"
            disabled={item.quantity === 1}
          >
            -
          </button>
        </div>

        {/* Item Total */}
        <div>
          <p className="font-semibold">Total: ${itemTotal}</p>
        </div>

        {/* Remove */}
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
