export const IntroductionPage = ({ className }: { className?: string }) => {
  return (
    <>
      <h1 className="text-3xl mb-4">Who am i?</h1>
      <section
        id="about"
        className={"flex flex-col gap-6 bg-card rounded-2xl p-8 " + className}
      >
        <p>
          From the moment I wrote my first line of code, I knew that creating
          digital experiences was more than just a skill—it was my passion. As a
          web and app developer, I love turning ideas into functional, seamless,
          and visually compelling interfaces. For me, development is not just
          about writing code; it’s about crafting intuitive and engaging user
          experiences that make technology feel effortless.
        </p>

        <p>
          I specialize in designing and developing clean, interactive, and
          user-friendly interfaces that not only look great but also enhance
          usability. I believe that a well-thought-out UI should feel natural,
          guiding users smoothly through an app or website without unnecessary
          complexity. My goal is to bridge the gap between functionality and
          aesthetics, ensuring that every interaction feels intuitive and
          enjoyable.
        </p>

        <p>
          Whether it's a dynamic web application, a sleek mobile app, or an
          interactive UI element, I approach each project with creativity and a
          keen eye for detail. I am constantly learning and pushing the
          boundaries of what's possible, always striving to make digital
          experiences more immersive and accessible.
        </p>

        <p>
          For me, development is an art as much as it is a science, and I love
          every step of the process—from concept to deployment. There’s nothing
          more satisfying than seeing an idea come to life and knowing that
          users will enjoy interacting with it as much as I enjoyed building it.
        </p>
      </section>
    </>
  );
};
