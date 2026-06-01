import { useState } from "react";
import { productsVariantsData } from "./MainCollectionSectionData";
import { productsColorsData } from "./MainCollectionSectionData";

export default function MainCollectionSection() {
  const [activeVariant, setActiveVariant] = useState<string>("day");
  const [selectedColor, setSelectedColor] = useState<string>("brass");

  const currentVariant = productsVariantsData.find(
    (variant) => variant.id === activeVariant,
  );

  return (
    <section id="collection">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
          The Photometric Grid
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
          Light in
          <br /> <span className="text-primary text-[#A48A70]">Context</span>
        </h2>
      </div>

      <div className="flex items-center justify-evenly">
        <div>
          <img
            className="w-[600px] h-[450px]"
            src={currentVariant?.image}
            alt={currentVariant?.label}
          />

          <div className="flex items-center gap-40">
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

        <div>
          <div>
            <h2 className="text-[17px] md:text-xl tracking-tight text-foreground font-playfair text-5xl">
              Aura—1
            </h2>
            <p className="hidden md:block font-body text-sm text-muted-foreground max-w-xs leading-relaxed text-[#737373] mb-12">
              {currentVariant?.description}
            </p>
            <p className="hidden md:block font-body text-sm text-muted-foreground max-w-xs leading-relaxed text-[#737373]">
              Price
            </p>
            <h2 className="text-[17px] md:text-xl tracking-tight text-foreground font-playfair text-5xl mb-12 ">
              $890
            </h2>
            <p className="hidden md:block font-body text-sm text-muted-foreground max-w-xs leading-relaxed text-[#737373]">
              Finish
            </p>
            <div className="flex gap-4">
              {productsColorsData.map((color) => (
                <div>
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`
        w-10 h-10 rounded-full border-2
        ${color.className}
        ${
          selectedColor === color.id
            ? "border-black scale-110"
            : "border-transparent"
        }
      `}
                  ></button>
                  <p> {color.id}</p>
                </div>
              ))}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}
