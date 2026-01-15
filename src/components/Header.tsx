import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (anchor: string) => {
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* SC Logo */}
        <div className="font-mono text-2xl font-bold tracking-tight">
          SC
        </div>

        {/* Hamburger Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('#about')}
              className="justify-start text-lg"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('#writing')}
              className="justify-start text-lg"
            >
              Blog
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('#projects')}
              className="justify-start text-lg"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('#updates')}
              className="justify-start text-lg"
            >
              Updates
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
