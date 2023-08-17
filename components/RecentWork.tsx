import { projects } from "@/config/projects";
import Link from "next/link";

const RecentWork = () => {
  return (
    <section className="flex flex-col max-w-4xl mx-auto py-28">
      <h3 className=" pl-4 md:pl-0 text-sm text-zinc-400 pb-10">RECENT WORK</h3>
      {projects.map((project) => (
        <div
          key={project.name}
          className="project relative py-12 px-4 md:px-0 border-t group transition  duration-300"
        >
          <div className="flex justify-between w-full">
            <h1 className=" text-2xl md:text-5xl font-medium">
              {project.name}
            </h1>
            <h1 className=" text-sm md:text-lg text-neutral-400">
              {project.stack}
            </h1>
          </div>
          <div className="overlay bg-white pl-1 md:pl-0">
            <h3 className="text-lg font-semibold italic">
              {project.description}
            </h3>
            <p className=" mt-1 text-xs md:text-lg">
              {project.fullDescription}
            </p>
            <Link href={project.live} target="_blanck">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-2 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecentWork;
