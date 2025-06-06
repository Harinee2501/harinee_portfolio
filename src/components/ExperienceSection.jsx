import { Briefcase, Code2 } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Card 1 */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Artificial Intelligence Intern – AICTE</h4>
                <ul className="text-muted-foreground text-sm list-disc list-inside space-y-2">
                  <li>
                    Developed an NLP-powered sustainability chatbot achieving 87% accuracy in query resolution, reducing manual support workload by 30%.
                  </li>
                  <li>
                    Optimized model performance through fine-tuning and real-time data integration to exceed 90% accuracy, while scaling infrastructure for enterprise deployment.
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">Nov 2024 – Dec 2024</p>
              </div>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Artificial Intelligence Intern – Tripify India</h4>
                <ul className="text-muted-foreground text-sm list-disc list-inside space-y-2">
                  <li>
                    Designing and deploying AI-driven marketing agents using NLP and ML to automate SEO workflows, content optimization, and campaign analytics, improving operational efficiency.
                  </li>
                  <li>
                    Developing scalable automation systems for enhanced lead generation and customer targeting, while researching advanced solutions like LLMs and RAG to boost marketing performance.
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">June 2025 – Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
