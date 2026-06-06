import lamp from "../../../assets/lamp-image.png";

export default function MainTitleSection() {
  return (
    <>
      <section className="flex justify-evenly items-center m-10" id="shipping" >
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
            Introducing
          </p>

          <h1 className="font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] leading-[0.9] tracking-tight font-playfair text-5xl">
            Aura
            <span className="block text-[#A48A70] font-playfair">—1</span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-sm">
            A sculptural vessel of atmospheric intelligence. Light, reimagined
            as an art form.
          </p>

          <button className="!bg-black text-white text-sm tracking-widest uppercase px-10 py-4 hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4">
            PURCHASE - $890
          </button>

          <div className="flex gap-12 pt-2">
            <div>
              <p className="font-body text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                Height
              </p>
              <p className="font-body text-sm text-foreground mt-1">48 cm</p>
            </div>
            <div>
              <p className="font-body text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                Lumens
              </p>
              <p className="font-body text-sm text-foreground mt-1">2,400 lm</p>
            </div>
            <div>
              <p className="font-body text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                Weight
              </p>
              <p className="font-body text-sm text-foreground mt-1">1.8 kg</p>
            </div>
          </div>
        </div>

        <img src={lamp} alt="lamp" />
      </section>
    </>
  );
}
