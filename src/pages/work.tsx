import { useSlidable } from "../hooks/slidable-hook";

export const Work = ({ className }: { className?: string }) => {
  const workExperiences = [
    {
      title: "Fullstack Engineer",
      company: "Savvy.codes",
      date: "2022 - Present",
      description:
        "Worked on different projects and technologies, from frontend to backend. Built scalable and maintainable web applications using React, Node.js, Remix.run, Postgresql and MySQL. Collaborated with cross-functional teams to define, design, and ship new feature. Optimized code for maximum speed and scalability.",
    },

    {
      title: "Fullstack Developer",
      company: "Headfirst group",
      date: "September 2020 - September 2022",
      description:
        "Developed and maintained web applications, ensuring seamless integration between frontend and backend systems. Designed and implemented RESTful APIs and database schemas. Collaborated with team members to troubleshoot and resolve technical issues. Participated in code reviews to ensure code quality and best practices.",
    },
    {
      title: "Fullstack Developer",
      company: "Jobcatcher between staffing",
      date: "Januari 2020 - September 2022",
      description:
        "Developed and maintained web applications, ensuring seamless integration between frontend and backend systems. Designed and implemented RESTful APIs and database schemas. Collaborated with team members to troubleshoot and resolve technical issues. Participated in code reviews to ensure code quality and best practices.",
    },

    {
      title: "Fullstack Developer",
      company: "Het CAK",
      date: "Januari 2019 - September 2019",
      description:
        "Developed and maintained web applications, ensuring seamless integration between frontend and backend systems. Designed and implemented RESTful APIs and database schemas. Collaborated with team members to troubleshoot and resolve technical issues. Participated in code reviews to ensure code quality and best practices.",
    },
  ];

  useSlidable();

  return (
    <section
      id="experiences"
      className={"flex flex-col rounded-2xl " + className}
    >
      <h1 className="text-3xl mb-8">My work experiences?</h1>
      <section className="flex flex-col gap-8">
        {workExperiences.map(({ title, company, date, description }) => (
          <section key={title} className="slidable bg-card p-8 rounded-md">
            <h2 className="text-2xl mb-2">
              {title} at {company}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <p>{description}</p>
          </section>
        ))}
      </section>
    </section>
  );
};
