import "./Header.css";

export default function Header() {
  return (
    <>
      <section className="header-wrapper">
        <h1>Lumen Archive</h1>
        <nav>
          <a href="">Collection</a>
          <a href="#materials">Materials</a>
          <a href="">About</a>
        </nav>

        <button>Cart (0)</button>
      </section>
    </>
  );
}
