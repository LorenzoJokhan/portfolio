export const Projects = ({ className }: { className?: string }) => {
  const projects = [
    {
      title: "Lessenplan",
      cover: "/lessenplan-2.png",
      description:
        "A platform for teachers and students to manage their lesson plans and schedules. Built with React, Node.js, and MySQL. Integrating the the existing wordpress eco-system into the new application, this project came with a number of interesting challenges.",
    },
    {
      title: "Lessenplan mobiele app",
      cover: "/lessenplan-1.png",
      description:
        "Een mobiele app waarmee leraren hun lesrooster kunnen inzien en details van gymactiviteiten kunnen inzien. Geschreven in react-native met expo.",
    },
    {
      title: "Omleidingennet",
      cover: "/omleidingennet-1.png",
      description:
        "A web application that provides real-time traffic information and alternative routes for drivers. Built with Next.js, TailwindCSS, and GraphQL. Within this application is a way to draw the roads on a map which is rendered with leaflet. Every drawn line is enriched with the valhalla API refining the draw line to a route. These drawn routes are then saved in the database. Whenever a route enters the specific area within a company, then a mail will be send to the desired person of interest",
    },
  ];

  return (
    <section
      id="technologies"
      className={"w-full py-5 gap-4 rounded-md text-white " + className}
    >
      <section>
        <h1 className="text-3xl mb-8">My projects?</h1>
      </section>

      <section className="grid max-lg:grid-cols-1 grid-cols-2 gap-4 mb-4">
        {projects.map(({ title, description, cover }, index) => (
          <section
            className="relative w-full h-[400px] bg-black shadow group"
            key={`project-${index}`}
          >
            <div
              id="imgBox"
              className="absolute top-0 left-0 w-full h-full transition-all duration-500"
            >
              <img
                className="w-full h-full object-cover transition duration-500 group-hover:opacity-0"
                src={cover}
              />
            </div>

            <div
              id="content"
              className="absolute shadow-2xl bottom-0 left-1/10 w-4/5 h-1/5 bg-white overflow-hidden transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:h-full p-4"
            >
              <div className="flex flex-col h-full justify-between gap-4">
                <section>
                  <h3 className="text-black text-center font-bold mb-8">
                    {title}
                  </h3>
                  <p className="text-black text-center">{description}</p>
                </section>

                <a
                  className="text-black py-2 px-4 bg-amber-500 rounded-md self-end "
                  href="#"
                >
                  Read more
                </a>
              </div>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};
