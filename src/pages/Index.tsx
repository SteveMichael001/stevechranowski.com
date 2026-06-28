import { MotionConfig } from "motion/react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { YouTubeFeed } from "@/components/YouTubeFeed";
import { BlogIndex } from "@/components/BlogIndex";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Marquee />
        <About />
        <BlogIndex />
        <Projects />
        <YouTubeFeed />
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
