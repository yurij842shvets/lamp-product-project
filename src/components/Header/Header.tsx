export default function Header() {
  return (
    <>
      <section className="flex items-center justify-around" id="returns">
        <h1 className="text-lg md:text-xl tracking-tight text-foreground font-playfair text-5xl">
          Lumen Archive
        </h1>
        <nav className="flex justify-around items-end gap-4">
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

        <button className="text-[#737373]">Cart (0)</button>
      </section>
    </>
  );
}
