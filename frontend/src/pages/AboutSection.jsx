import {
  GraduationCap,
  Dumbbell,
  Brain,
  FileText,
  Download,
} from "lucide-react";

import thesis from "../assets/thesis.pdf";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4 md:px-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Background</h3>
              <p className="text-lg">
                I am a Computer Engineering student at The German University in
                Cairo (GUC), currently in my 5th and final year, majoring in
                Computer Science. I have completed my Bachelor's degree in
                Computer Science, building on a strong academic foundation that
                began with an IGCSE high school curriculum. Over the past four
                years of university, I have gained extensive hands-on
                programming skills in both software engineering and computer
                engineering.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Passion & Drive</h3>
              <p className="text-lg">
                I am deeply passionate about learning new technologies in
                software engineering and AI. I am driven by the process of
                gaining hands-on experience and implementing real-world projects
                in these two fields, all while completing my collegiate studies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-primary" />
                  Gym & Fitness
                </span>
                <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-primary" />
                  Padel Tennis
                </span>
                <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  AI Research
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Education and Thesis */}
          <div className="md:w-1/3 flex flex-col gap-8">
            {/* Education Block */}
            <div className="relative w-full group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl transform rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Main content box */}
              <div className="relative w-full bg-gradient-to-br from-background to-background/80 rounded-xl border border-primary/30 flex flex-col items-center justify-center p-6 space-y-4 shadow-xl">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center">Education</h3>
                <p className="text-center">B.Sc. in Computer Engineering</p>
                <p className="text-center text-primary">
                  German University in Cairo
                </p>
                <p className="text-sm text-center">Class of 2026</p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full group-hover:scale-125 group-hover:bg-primary/40 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full group-hover:scale-125 group-hover:bg-primary/50 transition-all duration-700 delay-100"></div>
            </div>

            {/* Thesis Block */}
            <div className="relative w-full group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl transform rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Main content box */}
              <div className="relative w-full bg-gradient-to-br from-background to-background/80 rounded-xl border border-primary/30 flex flex-col items-center justify-center p-6 space-y-4 shadow-xl">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  Bachelor's Thesis
                </h3>
                <p className="text-center text-primary">
                  Fine-Tuning Embedding Models for Cyberbullying Detection
                </p>
                <a
                  href={thesis} // Update this path to your actual PDF file
                  download="Omar_Farahat_Bachelor's_Thesis.pdf" // This will be the downloaded filename
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Thesis PDF
                </a>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full group-hover:scale-125 group-hover:bg-primary/40 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full group-hover:scale-125 group-hover:bg-primary/50 transition-all duration-700 delay-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
