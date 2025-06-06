import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Fundora",
    description: "Fundora is a full-stack web application designed to help users manage project-based fund tracking, record expenses and incomes, upload receipts, and generate PDF/CSV reports — all in a visually intuitive dashboard.",
    image: "/projects/project1.png",
    tags: ["React", "Express", "Node", "MongoDB"],
    demoUrl: "https://fundora-seven.vercel.app",
    githubUrl: "https://github.com/Harinee2501/Fundora",
  },
  {
    id: 2,
    title: "LlamaSleuth",
    description:
      "A RAG-powered web intelligence tool that scrapes and analyzes online content for insights, summarization, and credibility assessment through a Streamlit interface.",
    image: "/projects/project2.png",
    tags: ["Python", "RAG", "LangChain", "Ollama"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harinee2501/LlamaSleuth",
  },
  {
    id: 3,
    title: "SimuNex",
    description:
      "SimuNex is an AI-driven IoT simulation platform that helps users identify components, receive project suggestions, and test hardware simulations in real-time.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harinee2501/SimuNex",
  },
  {
    id: 4,
    title: "RepoVortex",
    description:
      "An ML model-based app to predict cotton crop diseases with YOLOv8 and CNN.",
    image: "/projects/project4.png",
    tags: ["YOLOv8", "CNN", "TensorFlow"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harinee2501/RepoVortex",
  },
  {
    id: 5,
    title: "Space Optimizer",
    description:
      "A chatbot to verify internship scams using scraping and RAG pipeline.",
    image: "/projects/project5.png",
    tags: ["Python", "RAG", "LangChain"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harinee2501/Space_Optimizer",
  },
];

export const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
          >
            {projects.map((project, key) => (
              <div
                key={key}
                className="min-w-[300px] max-w-[300px] snap-start bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/80 transition-all z-10"
          >
            <ArrowRight size={20} className="rotate-180" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/80 transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Harinee2501"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
