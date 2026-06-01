import { materialsData } from "./MainMaterialsSectionData";
import { useDragScroll } from "../../../hooks/useDragScroll";

export default function MainMaterialsSection() {
  const { ref, onPointerDown, onPointerMove, onPointerUp, onPointerCancel} = useDragScroll();

  return (
    <section id="materials" >
      <div className="flex justify-around mt-32 items-end mb-6">
        <div>
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Materiality
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            Engineered <br />{" "}
            <span className="text-primary text-[#A48A70]">Tactility</span>
          </h2>
        </div>

        <p className="hidden md:block font-body text-sm text-muted-foreground max-w-xs leading-relaxed text-[#737373]">
          Every surface, every joint, every finish is a deliberate act of craft.
        </p>
      </div>

      <div className="flex gap-4 overflow-hidden cursor-grab active:cursor-grabbing select-none mt-10>">
        <div
          className="
           flex gap-4 overflow-x-auto scroll-smooth"
          ref={ref}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          {materialsData.map((card) => (
            <div className="min-w-[500px] m-4" key={card.title}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full aspect-[16/9] object-cover"
              />
              <h3>{card.title}</h3>
              <p>{card.spec}</p>
              <p>{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
