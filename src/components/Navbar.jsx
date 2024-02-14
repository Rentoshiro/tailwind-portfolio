import { links } from "../data";

function Navbar() {
  return (
    <nav className="bg-slate-400">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-slate-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize tracking-wide text-lg hover:text-slate-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
