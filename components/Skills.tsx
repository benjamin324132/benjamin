import { skills } from "@/config/skills";

const Skills = () => {
  return (
    <section className="flex flex-col max-w-4xl mx-auto pb-20 px-2 md:px-0">
      <h2 className="text-5xl font-bold text-center">Skills</h2>
      <h2 className=" text-center text-sm text-zinc-400">
        Some of the tools I have been working on
      </h2>
      <div className="flex flex-wrap gap-2 md:gap-4 mt-10">
        {skills.map((skill) => (
          <div key={skill} className=" px-2 py-1 md:px-4 md:py-2 bg-black rounded-lg">
            <span className="text-white whitespace-nowrap">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
