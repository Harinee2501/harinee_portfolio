import { ArrowRight } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "1st place- Envithon SNUC",
    description:
      "Developed an AI-driven crop disease prediction system using TensorFlow (VGG16) and OpenCV.",
    image: "public/achievements/env.jpeg",
    tags: ["Winner", "Hackathon"],
  },
  {
    id: 2,
    title: "Track Winner- Spectrum, VITC",
    description:
      "Winner of the Open Innovation track for developing OnTrail, an offline mobile app that guides hikers and provides SOS support in remote areas.",
    image: "public/achievements/vit.jpeg",
    tags: ["Open Innovation", "Hackathon"],
  },
  {
    id: 3,
    title: "Top 40 Finalist among 750+ teams- Ideas to Impact, IITM and Wipro",
    description:
      "Proposed a mobile demolition waste separation unit utilizing semantic segmentation for efficient on-site construction waste sorting, promoting a circular economy. This project has been selected for the finals and will be funded for further development",
    image: "public/achievements/i2impact.png",
    tags: ["Challenge", "Finalist", "Research"],
  },
  {
    id: 4,
    title: "Top 15 among 100+ teams- Anna University Hackathon",
    description:
      "Reached the finals with a tool to identify fake internships and job postings in LinkedIn, protecting students from scams and tackling misinformation effectively.",
    image: "public/achievements/annauniv.png",
    tags: ["Hackathon", "AI"],
  },
  {
    id: 5,
    title: "Mentee- Codess.Cafe",
    description:
      "Selected from 2500+ applicants for a competitive program focused on enhancing technical proficiency and soft skills for industry readiness.",
    image: "public/achievements/codess.png",
    tags: ["Mentorship","Codess.Cafe"],
  },
  {
    id: 6,
    title: "Mentee- Microsoft's Code without Barriers",
    description:
      "Selected for an exclusive, merit-based program by Microsoft aimed at empowering women in technology through hands-on training in AI and cloud technologies, alongside leadership and professional development workshops.",
    image: "public/achievements/cwb1.jpg",
    tags: ["Mentorship", "CWB'25"],
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Achievements</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A snapshot of milestones and recognitions from my academic journey.
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
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
