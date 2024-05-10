import heroImg from "../assets/hero.svg";
import { FaGithubSquare } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-slate-400 py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Renat</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide ">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/Rentoshiro"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-900 hover:text-slate-700" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" alt="hero-img" />
        </article>
      </div>
    </div>
  );
}

export default Hero;
