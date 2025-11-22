import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { YouTubeFeed } from "@/components/YouTubeFeed";
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
      <YouTubeFeed />
      <Footer />
    </div>
  );
};

export default Index;
