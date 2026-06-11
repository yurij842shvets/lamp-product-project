import { materialsData } from "./MainMaterialsSectionData";
import { useDragScroll } from "../../../hooks/useDragScroll";

export default function MainMaterialsSection() {
  const { ref, onPointerDown, onPointerMove, onPointerUp, onPointerCancel } =
    useDragScroll();

  return (
    <section id="materials">
      <div className="flex justify-between px-5 min-[450px]:px-35 mt-32 pb-20 items-end mb-10 border-b border-[#E5E5E5]">
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

      <div className="flex gap-4 overflow-hidden cursor-grab active:cursor-grabbing select-none mt-10 pb-30 border-b border-[#E5E5E5]">
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
            <div className="w-[85vw] max-w-[500px] shrink-0 m-4">
              <div key={card.title}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto"
                />
                <h3>{card.title}</h3>
                <p>{card.spec}</p>
                <p>{card.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
