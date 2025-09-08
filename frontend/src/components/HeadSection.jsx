import { ArrowBigDown, ScrollIcon } from "lucide-react";
import primary from "../assets/primary.jpg";
import resume from "../assets/resume.pdf";

const HeadSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 md:ml-20"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span>Hello, I'm </span>
            <br />
            <span className="text-primary text-glow">Omar Farahat</span>
          </h1>
          <br />

          <h2 className="text-xl md:text-2xl text-primary font-semibold">
            Senior Computer Engineering Student
          </h2>

          <p className="text-lg max-w-2xl mx-auto md:mx-0">
            Passionate about creating innovative software solutions and AI
            technologies that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href={resume}
              download="Omar_Farahat_Resume"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-foreground transition-color duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Container - Rectangular with Animations */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-80 md:w-80 md:h-96 group">
            {/* Main Image Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl transform group-hover:scale-105 transition-transform duration-700"></div>

            {/* Image Frame */}
            <div className="relative w-full h-full border-2 border-primary/30 rounded-xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
              {/* Placeholder for your image - Replace with your actual image */}
              <img
                src={primary}
                alt="Omar Farahat"
                className="w-full h-full object-cover"
              />

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Floating Elements (Decorative) */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full group-hover:scale-125 group-hover:bg-primary/40 transition-all duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/30 rounded-full group-hover:scale-125 group-hover:bg-primary/50 transition-all duration-700 delay-100"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-primary/40 rounded-full group-hover:scale-150 group-hover:bg-primary/60 transition-all duration-600 delay-200"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-2xl">
          <ArrowBigDown />
        </a>
      </div>
    </section>
  );
};

export default HeadSection;
