import { footerData } from "./FooterData";

export default function Footer() {
  return (
    <>
      <section id="footer" className="mt-40 border-t border-[#E5E5E5] pt-10">
        <div className="flex items-start justify-evenly">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3
                className={`font-playfair ${index === 0 ? "text-black text-3xl" : "text-[#737373]"}`}
              >
                {section.title}
              </h3>

              {section.description && (
                <p className="whitespace-pre-line text-[#737373]">
                  {section.description}
                </p>
              )}

              {section.items && (
                <ul className="flex flex-col items-center">
                  {section.items.map((item, itemIndex) => (
                    <a href={item.url} key={itemIndex}>
                      {item.label}
                    </a>
                  ))}
                </ul>
              )}

              {section.email && (
                <div>
                  <a href={`mailto:${section.email}`}>{section.email}</a>
                  <p className="text-[#737373]">{section.workingHours}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-40 py-20 mt-10 text-[#737373] border-t border-[#E5E5E5]">
          <p>© 2026 Lumen Archive. All rights reserved.</p>

          <div className="flex gap-5">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>
        </div>
      </section>
    </>
  );
}
