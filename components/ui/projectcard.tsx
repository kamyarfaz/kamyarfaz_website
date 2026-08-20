import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FC } from "react";
import YearMarker from "./yearmarker";
import Link from "next/link";

interface OpenSourceProject {
  title: string;
  year: string;
  link: string | null;
  description: string;
}

interface ProjectCardProps {
  project: OpenSourceProject;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const isLinked = Boolean(project.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      aria-disabled="true"
      className={`group relative flex flex-col h-full p-6 rounded-2xl border bg-white transition-all duration-300 outline-none border-gray-100 cursor-default`}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isLinked ? "bg-[#f3f3f3] group-hover:bg-black" : "bg-[#f3f3f3]"
          }`}
        >
          <GitHubIcon
            fontSize="small"
            className={`transition-colors duration-300 ${
              isLinked
                ? "text-[#202020] group-hover:text-white"
                : "text-[#c4c4c8]"
            }`}
          />
        </div>
        {isLinked && (
          <Link href={project.link as string}>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="text-[#a1a4aa] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-black transition-all duration-300"
            />
          </Link>
        )}
      </div>

      <h3 className="text-lg font-bold text-[#202020] mb-3 leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-[#404040] leading-relaxed">
        {project.description}
      </p>
    </motion.div>
  );
};

export default ProjectCard;
