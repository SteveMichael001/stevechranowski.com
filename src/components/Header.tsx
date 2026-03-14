import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Button asChild variant="ghost" className="min-h-11 justify-start text-lg">
              <a href="/#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </Button>
            <Button asChild variant="ghost" className="min-h-11 justify-start text-lg">
              <a href="/#writing" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
            </Button>
            <Button asChild variant="ghost" className="min-h-11 justify-start text-lg">
              <a href="/#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </Button>
            <Button asChild variant="ghost" className="min-h-11 justify-start text-lg">
              <a href="/#updates" onClick={() => setIsMenuOpen(false)}>
                Updates
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="justify-start text-lg min-h-11"
            >
              <Link to="/resume" onClick={() => setIsMenuOpen(false)}>
                Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
