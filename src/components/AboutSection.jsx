import { Brain, Globe, ActivitySquare } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Intro */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Tech Enthusiast, AI Explorer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I absolutely love diving into tech! Whether it’s cracking tough DSA problems,
              optimizing solutions, or building something cool with AI/ML,
              I’m always up for a challenge.
            </p>

            <p className="text-muted-foreground">
              Hackathons? Count me in! There’s nothing more exciting than brainstorming,
              coding like crazy, and watching an idea come to life.
            </p>

            <p className="text-muted-foreground">
              As a Core Committee Member of the AI/ML division in my college’s coding club,
              I get to collaborate, learn, and help others explore the power of machine learning.
            </p>

            <div className="flex justify-center pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Skills Cards */}
          <div className="space-y-6">
            {/* Card 1: AI & ML */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building intelligent AI agents with a strong focus on
                    Generative AI, Natural Language Processing, and real-world
                    ML use cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Full Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Creating dynamic and user-centric web applications by
                    handling both frontend design and backend logic with
                    seamless integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: DSA with LeetCode Link */}
            <div className="gradient-border p-6 card-hover">
              <a
                href="https://leetcode.com/u/HarineeM_15/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-90 transition-opacity duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <ActivitySquare className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
                  <p className="text-muted-foreground">
                    Strengthening core programming skills by solving complex
                    problems with optimized algorithms and clean data
                    structures.
                  </p>
                  <p className="text-sm text-primary mt-2 underline">
                    View my LeetCode profile →
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
