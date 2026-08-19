import { useDispatch, useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import { addItem, clearCart } from "./redux/cartSlice";

function App() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleAddItem = () => {
    dispatch(
      addItem({
        id: 3,
        name: "Keyboard",
        quantity: 1,
        price: 100,
      }),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <h1 className="mb-8 text-center text-4xl font-bold">
          🛒 Shopping Cart
        </h1>

        {/* Products */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">Products</h2>

          <div className="flex items-center justify-between border-b py-4">
            <div>
              <h3 className="text-lg font-semibold">Keyboard</h3>

              <p className="text-gray-500">$100</p>
            </div>

            <button
              onClick={handleAddItem}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Cart */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">Cart Items</h2>

          {items.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-xl font-semibold text-gray-500">
                🛒 Cart is Empty
              </p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* Total */}
              <div className="mt-6 flex justify-between border-t pt-6">
                <h2 className="text-2xl font-bold">Total Amount</h2>

                <p className="text-2xl font-bold text-blue-600">
                  ${totalAmount}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="rounded-lg bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
                >
                  Clear Cart
                </button>

                <button
                  onClick={() => alert("Checkout coming soon!")}
                  className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
