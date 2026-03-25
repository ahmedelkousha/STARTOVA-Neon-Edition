import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/config/nav";

interface FooterProps {
  onNavigate: (index: number) => void;
  videoRef: React.RefObject<HTMLVideoElement> 
}

const Footer = ({ onNavigate, videoRef }: FooterProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-screen">
      {/* VIDEO SECTION */}
      <div className="w-full h-[50vh] sm:h-[60vh] relative overflow-hidden">
        <video
        ref={videoRef}
          src="/videos/cta.mp4"
          muted
          playsInline
          preload="none"
          className="w-full h-full  object-fill"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end pb-10 justify-center text-center px-6">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Let’s Build Something That{" "}
              <span className="text-primary">Scales</span>
            </h2>
            <button
              onClick={() => onNavigate(8)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-card border-t border-border/30 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BRAND */}
          <div>
            <span
              onClick={() => onNavigate(0)}
              className="flex flex-col items-start text-[1.875rem]/6 font-light tracking-widest text-foreground cursor-pointer select-none">
              <span>
                STAR<span className="text-primary">TOVA</span>
              </span>
              <span className="text-[0.74rem] italic">MARKETING AGENCY</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Building systems that grow businesses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            {/* Header (clickable on mobile) */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between md:cursor-default">
              <h4 className="text-sm font-semibold text-foreground">
                Quick Links
              </h4>

              {/* Arrow (mobile only) */}
              <span className="md:hidden text-muted-foreground">
                {open ? "−" : "+"}
              </span>
            </button>

            {/* Links */}
            <ul
              className={`
                overflow-hidden transition-all duration-300
                ${open ? "max-h-96 mt-3" : "max-h-0"}
                md:max-h-full md:mt-3
                space-y-2 text-sm text-muted-foreground
              `}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.index)}
                    className="hover:text-primary transition-colors text-left w-full">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} STARTOVA. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default Footer;
