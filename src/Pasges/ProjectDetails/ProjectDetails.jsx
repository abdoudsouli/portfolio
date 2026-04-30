import { useParams, useNavigate } from "react-router-dom";
import pr1 from "../../assets/project/pr1.png";
import pr2 from "../../assets/project/pr3.png";

const projects = [
  {
    id: 1,
    title: "E-commerce App",
    desc: "Online store platform",
    details:
      "This project is a full-featured e-commerce application with authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    img: pr1,
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Portfolio",
    desc: "Personal website",
    details:
      "A modern portfolio to showcase my work with smooth animations and responsive design.",
    tech: ["React", "Tailwind"],
    img: pr2,
    live: "#",
    github: "#",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center mt-20">Project not found</div>;
  }

  return (
    <div className="">
  
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-lg group">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {project.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {project.desc}
          </p>

          <p className="text-gray-800 mb-6 leading-relaxed">
            {project.details}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-black text-white rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={project.live}
              target="_blank"
              className="px-5 py-2 bg-black text-white rounded-xl hover:opacity-80 transition"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              className="px-5 py-2 border border-black rounded-xl hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}