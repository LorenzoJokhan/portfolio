export const TechStackGrid = ({ className }: { className?: string }) => {
  const techs = [
    {
      title: "HTML5",
      description: [
        "I focus on semantic markup, meaning wherever possible i use the correct html element for the job.",
      ],
    },
    {
      title: "CSS",
      description: [
        "Next to css, i can also use scss or less depending on the project",
      ],
    },
    {
      title: "TailwindCSS",
      description: [
        "Nowadays we do not have the time to write and manage thousands of css classes for layouts and effects. I use tailwind to easily setup alot of classes with defaults like a primary color and base font-size. This makes it easier to create a consistent ui accross the app",
      ],
    },

    {
      title: "Typescript",
      description: [
        "I use typescript for nearly all my projects, writing robust code that is easy to maintain and helps prevent bugs.",
      ],
    },
    {
      title: "React",
      description: [
        "From full applications to embeddings, react helps me to create software that is maintainable, scalable and reusable",
      ],
    },
    {
      title: "Node.js",
      description: [
        "For backends, i often use a node.js server, i often choose to create this with express, remix.run or next.js, but every project is different and i will choose the best tool for the job",
      ],
    },
    {
      title: "Databases",
      description: [
        "I have affinity with all kinds of databases, from Mysql to Postgresql and Graphql",
      ],
    },

    {
      title: "Git",
      description: [
        "I primarily use the git terminal, Github and gitlab for saving my code. Github has some wonderfull integrations for build actions and other script/hooks",
      ],
    },
  ];

  return (
    <>
      <h1 className="text-3xl mb-4">
        These are a few of the technologies i work the most with
      </h1>
      <section
        id="technologies"
        className={
          "w-full py-5 grid grid-cols-4 max-lg:grid-cols-1 gap-4 rounded-md  text-white " +
          className
        }
      >
        {techs.map(({ title, description }, index) => (
          <article
            className="relative flex items-center justify-center bg-card p-4 aspect-square group"
            key={`tech-${index}`}
          >
            <p className="transition-all group-hover:scale-200  duration-300">
              {title}
            </p>
            <div className="flex items-center text-center absolute bottom-0 left-0 h-0 w-full overflow-hidden group-hover:h-full bg-white text-black transition-all duration-200 delay-300">
              <div className="p-4">
                <ul>
                  {description.map((description) => (
                    <li>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
