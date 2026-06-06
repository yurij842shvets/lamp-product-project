import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart, toggleCart } from "../../store/cartSlice";
import type { RootState } from "../../store/store";

export default function Cart() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cart = useSelector((state: RootState) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (!isOpen) return null;

  return (
    <section>
      <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-md" onClick={() => dispatch(closeCart())}/>

      <div className="fixed top-0 right-0 z-50 h-screen w-[38rem] bg-white border-l">
        <header className="flex items-center justify-between px-8 py-6 border-b">
          <h2>Your Cart</h2>
          <button onClick={() => dispatch(closeCart())}>✕</button>
        </header>

        <main>{/* товари */}</main>
      </div>
    </section>
  );
}
