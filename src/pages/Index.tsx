import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MicroUpdates } from "@/components/MicroUpdates";
import { BlogIndex } from "@/components/BlogIndex";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <BlogIndex />
      <Projects />
      <MicroUpdates />
      <Footer />
    </div>
  );
};

export default Index;
