import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../store/cartSlice";
import type { RootState } from "../../store/store";

export default function Cart() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cart = useSelector((state: RootState) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!isOpen) return null;

  return (
    <section>
      <div
        className="fixed inset-0 z-40 bg-black/10 backdrop-blur-md"
        onClick={() => dispatch(closeCart())}
      />

      <div className="fixed top-0 right-0 z-50 h-screen w-full md:w-[38rem] bg-white border-l flex flex-col">
        <header className="flex items-center justify-between px-8 py-6 border-b">
          <h2 className="text-sm tracking-wide">Your Cart</h2>
          <button
            className="text-sm text-gray-500 hover:text-black"
            onClick={() => dispatch(closeCart())}
          >
            ✕
          </button>
        </header>

        <main className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          {cart.length === 0 ? (
            <h2>Your cart is empty</h2>
          ) : (
            <div className="flex-1 overflow-y-auto">
              {cart.map((i) => (
                <div
                  className="flex items-center gap-4 px-6 py-6 border-b border-[#E5E5E5]"
                  key={`${i.productId}-${i.colorId}`}
                >
                  <img
                    src={i.image}
                    alt={i.title}
                    className="w-16 h-16 object-cover bg-gray-200"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm">{i.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{i.colorId}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        className="w-6 h-6 border border-gray-400 flex items-center justify-center text-sm"
                        onClick={() =>
                          dispatch(
                            decreaseQuantity({
                              productId: i.productId,
                              colorId: i.colorId,
                            }),
                          )
                        }
                      >
                        -
                      </button>
                      <span className="text-sm">{i.quantity}</span>
                      <button
                        className="w-6 h-6 border border-gray-400 flex items-center justify-center text-sm"
                        onClick={() =>
                          dispatch(
                            increaseQuantity({
                              productId: i.productId,
                              colorId: i.colorId,
                            }),
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm">${i.price * i.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        <footer className="border-t border-[#E5E5E5] px-6 py-5 bg-[#F5F5F5] mt-auto">
          <div className="flex justify-between text-sm mb-4">
            <p className="text-gray-500">Subtotal</p>
            <h3>${total}</h3>
          </div>

          <button className="w-full bg-black text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition">
            CHECK OUT
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Shipping and taxes calculated at checkout
          </p>
        </footer>
      </div>
    </section>
  );
}
