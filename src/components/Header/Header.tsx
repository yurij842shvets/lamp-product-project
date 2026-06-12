import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { openCart } from "../../store/cartSlice";
import type { RootState } from "../../store/store";
import { useState } from "react";

export default function Header() {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state: RootState) => state.cart.items);

  const itemsQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="fixed h-[75px] top-0 left-0 right-0 z-50 flex items-center justify-around bg-white">
        <h1 className="text-lg md:text-xl tracking-tight text-foreground font-playfair text-5xl">
          Lumen Archive
        </h1>
        <nav className="hidden min-[491px]:flex gap-6">
          <a
            href="#collection"
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 text-[#737373]"
          >
            Collection
          </a>
          <a
            href="#materials"
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 text-[#737373]"
          >
            Materials
          </a>
          <a
            href="#footer"
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 text-[#737373]"
          >
            About
          </a>
        </nav>

        <button className="text-[#737373]" onClick={() => dispatch(openCart())}>
          Cart ({itemsQuantity})
        </button>

        <button
          className="min-[491px]:hidden text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>

        <div
          className={`
    fixed inset-0 z-[55] bg-black/30
    transition-opacity duration-300
    ${
      isMenuOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`
     fixed top-0 left-0 right-0 z-[60]
    bg-white flex flex-col px-6 py-6
    max-h-[70vh] overflow-y-auto border-b
    transition-transform duration-300 ease-out
    ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
  `}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-playfair text-xl">Lumen Archive</h1>

            <div className="flex items-center gap-6">
              <button
                className="text-[#737373]"
                onClick={() => dispatch(openCart())}
              >
                Cart
              </button>

              <button className="text-2xl" onClick={() => setIsMenuOpen(false)}>
                ✕
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 text-lg tracking-wide text-[#737373]">
            <a href="#collection" onClick={() => setIsMenuOpen(false)}>
              Collection
            </a>
            <a href="#materials" onClick={() => setIsMenuOpen(false)}>
              Materials
            </a>
            <a href="#shipping" onClick={() => setIsMenuOpen(false)}>
              Shipping
            </a>
            <a href="#returns" onClick={() => setIsMenuOpen(false)}>
              Returns
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
