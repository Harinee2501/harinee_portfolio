import { ArrowRight, ExternalLink, Github } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Google Cloud Certified",
    description: "Completed Google Cloud certification for cloud engineering fundamentals.",
    image: "/achievements/cloud-cert.png",
    tags: ["Google Cloud", "Certification"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Winner - Hackathon 2024",
    description: "Secured 1st place in a national-level AI hackathon solving real-world problems.",
    image: "/achievements/hackathon.png",
    tags: ["AI", "Hackathon"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Research Publication",
    description: "Published a paper on cotton plant disease prediction using YOLOv8 and CNN.",
    image: "/achievements/research.png",
    tags: ["YOLOv8", "CNN", "Research"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Event Organizer - DevFest",
    description: "Organized DevFest Chennai 2024 with 1000+ attendees and 20+ speakers.",
    image: "/achievements/devfest.png",
    tags: ["Leadership", "Event Management"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Top Contributor - GitHub",
    description: "Recognized as a top contributor in an open-source ML repository.",
    image: "/achievements/github.png",
    tags: ["Open Source", "GitHub"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Internship - Microsoft",
    description: "Completed a summer internship at Microsoft working on AI research tools.",
    image: "/achievements/microsoft.png",
    tags: ["Internship", "AI Tools"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Achievements </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A snapshot of milestones and recognitions from my academic and
          professional journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
