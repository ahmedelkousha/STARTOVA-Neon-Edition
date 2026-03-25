import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/config/nav";

interface HeaderProps {
  onNavigate: (index: number) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (index: number) => {
    onNavigate(index);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span onClick={()=>handleNav(0)} className="flex flex-col justify-center items-center relative text-[1.875rem]/6 font-light tracking-widest text-foreground cursor-pointer select-none pt-2">
          <span>
            STAR<span className="text-primary">TOVA</span>
          </span>
          <span className="relative text-[0.70rem] italic font-normal">
           MARKETING AGENCY
          </span>
        </span>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.index)}
              className="px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors rounded-md">
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border/30">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.index)}
                className="text-left px-3 py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors rounded-md">
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
