import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MicroUpdates } from "@/components/MicroUpdates";
import { BlogIndex } from "@/components/BlogIndex";
import { Projects } from "@/components/Projects";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MicroUpdates />
      <BlogIndex />
      <Projects />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
