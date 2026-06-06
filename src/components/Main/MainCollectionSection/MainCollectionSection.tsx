import { useState } from "react";
import {
  productsVariantsData,
  productsColorsData,
  productsParametersData,
} from "./MainCollectionSectionData";
import { useDispatch} from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import productImage from '../../../assets/lamp-image.png'

export default function MainCollectionSection() {
  const [activeVariant, setActiveVariant] = useState<string>("day");
  const [selectedColor, setSelectedColor] = useState<string>("brass");
  const labelClass =
    "hidden md:block font-body text-sm text-muted-foreground max-w-xs leading-relaxed text-[#737373]";

  const currentVariant = productsVariantsData.find(
    (variant) => variant.id === activeVariant,
  );

  const dispatch = useDispatch()

  return (
    <section id="collection" className="mt-40">
      <div>
        <div className="px-40 py-10 border-b border-[#E5E5E5] mb-15">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
            The Photometric Grid
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            Light in
            <br /> <span className="text-primary text-[#A48A70]">Context</span>
          </h2>
        </div>

        <div className="flex items-start justify-evenly">
          <div className="flex flex-col gap-y-16">
            <div>
              <img
                className="w-[600px] h-[450px]"
                src={currentVariant?.image}
                alt={currentVariant?.label}
              />

              <div className="flex items-center justify-center gap-40">
                {productsVariantsData.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariant(variant.id)}
                    className={`py-3 font-body text-xs tracking-[0.1em] uppercase transition-all duration-300 border-b-[1.5px] ${activeVariant === variant.id ? "text-foreground border-foreground" : "text-muted-foreground border-transparent hover:text-foreground"}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-3xl tracking-tight text-foreground font-playfair">
                Aura —1
              </h2>
              <p className={labelClass}>{currentVariant?.description}</p>
              <p className={labelClass}>Price</p>
              <h2 className="text-3xl tracking-tight text-foreground font-playfair mb-12 ">
                $890
              </h2>
              <p className={labelClass}>Finish</p>
              <div className="flex gap-4">
                {productsColorsData.map((color) => (
                  <div>
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`w-10 h-10 rounded-full border-2 ${color.className} ${selectedColor === color.id ? "border-black scale-110" : "border-transparent"}`}
                    ></button>
                    <p>{color.id}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-10 mt-8">
                {productsParametersData.map((parameter) => (
                  <div key={parameter.label}>
                    <p className="text-[#737373]">{parameter.label}</p>
                    <p>{parameter.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => dispatch(addToCart({
              productId: 'aura',
              title: 'Aura —1',
              price: 899,
              image: productImage,
              colorId: selectedColor
            }))} className="mt-4 w-[400px] !bg-black text-white text-sm tracking-widest uppercase px-10 py-4 hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4">
              ADD TO CART - $890
            </button>

            <p className="text-[#737373] mt-15 text-center">
              Free shipping worldwide · 2-year warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
