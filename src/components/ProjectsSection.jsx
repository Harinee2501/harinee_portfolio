import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Crop Disease Predictor",
    description:
      "An ML model-based app to predict cotton crop diseases with YOLOv8 and CNN.",
    image: "/projects/project4.png",
    tags: ["YOLOv8", "CNN", "TensorFlow"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Internship Portal Checker",
    description:
      "A chatbot to verify internship scams using scraping and RAG pipeline.",
    image: "/projects/project5.png",
    tags: ["Python", "RAG", "LangChain"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
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

          {/* Scroll Button */}
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
