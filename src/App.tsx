import { useState } from "react";
import "./App.css";
import { IntroductionPage } from "./pages/introduction";
import { Work } from "./pages/work";
import { Contact } from "./pages/contact";
import { TechStackGrid } from "./pages/tech-stack";
import { Projects } from "./pages/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  return (
    <main className="relative">
      <section className="container mx-auto flex  max-md:block p-10 gap-12">
        <section className="flex flex-col w-1/3 sticky  top-10 h-fit self-start  max-lg:static max-lg:w-full max-lg:mb-8">
          <img
            src="./images/profile.jpg"
            className="w-48 portfolio-profile-photo self-center"
            alt="Lorenzo Jokhan"
          />
          <h1 className="text-5xl mb-2 text-nowrap">Lorenzo Jokhan</h1>
          <h2 className="text-3xl mb-4 text-nowrap">Frontend engineer</h2>
          <p className="mb-8">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          <section className="flex flex-col mb-8">
            {["About", "Technologies", "Experiences", "Projects"].map(
              (label) => {
                const tab = label.toLowerCase();
                return (
                  <button
                    onClick={() => {
                      setCurrentTab(tab);
                      document.querySelector(`#${tab}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`group-hover:opacity-100 cursor-pointer ${
                      currentTab.includes(tab) ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <div
                      key={label}
                      className="flex items-center gap-2 w-full group"
                    >
                      <div
                        className={`h-0.5 w-4 gap-4 bg-amber-400 origin-left duration-300 group-hover:w-16 ${
                          currentTab.includes(tab) ? "w-16" : "w-4"
                        }`}
                      ></div>

                      {label}
                    </div>
                  </button>
                );
              }
            )}
          </section>

          <section className="flex gap-4 items-center">
            <a href="">
              <FontAwesomeIcon
                className="text-2xl hover:scale-150 transition-transform"
                icon={faLinkedin}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="text-2xl hover:scale-150 transition-transform"
                icon={faGithub}
              />
            </a>
          </section>
        </section>
        <section className="flex flex-col">
          <IntroductionPage className="mb-16" />
          <TechStackGrid className="mb-16" />
          <Work className="mb-16" />
          <Projects className="mb-16" />
          <Contact />
        </section>
      </section>
    </main>
  );
}

export default App;
