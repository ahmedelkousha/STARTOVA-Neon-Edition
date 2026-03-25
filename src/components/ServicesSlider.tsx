import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { NavigationOptions } from "swiper/types";

const services = [
  {
    title: "Our Services",
    subtitle: "Integrated Solutions",
    intro: true,
    content: (
      <div>
        <p className="text-lg sm:text-xl text-foreground/80 mb-6 leading-relaxed">
          Every service is designed to work together as one growth system. We
          don't sell isolated deliverables — we build connected ecosystems that
          drive compounding results.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Technology Solutions",
            "Social Media Strategy",
            "Training & Mentorship",
            "Event Management",
            "Media Production",
          ].map((s) => (
            <div
              key={s}
              className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-sm text-foreground/80 text-center">
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Technology Solutions",
    subtitle: "Build the Infrastructure of Your Growth",
    tagline: "Technology is not an expense — it is your growth engine.",
    content: (
      <div className="space-y-2 sm:space-y-5 text-xs sm:text-[0.98rem] text-foreground/80">
        <div>
          <h4 className="text-primary font-semibold mb-2">
            🔹 Website Development
          </h4>
          <p className="mb-1">We build high-converting websites that:</p>
          <ul className="space-y-1 ml-4">
            {[
              "Clearly position your brand",
              "Generate qualified leads",
              "Support long-term growth",
              "Integrate with CRM & automation systems",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-semibold mb-2">
            🔹 Mobile Applications
          </h4>
          <ul className="space-y-1 ml-4">
            {[
              "Improve customer engagement",
              "Increase retention",
              "Create recurring revenue models",
              "Strengthen brand authority",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-semibold mb-2">
            🔹 AI Automation & Smart Systems
          </h4>
          <ul className="space-y-1 ml-4">
            {[
              "Customer follow-ups",
              "Lead nurturing",
              "Internal workflows",
              "Chatbots & AI assistants",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-foreground/60 italic text-xs sm:text-sm border-l-2 border-primary/40 pl-3">
          Automation reduces cost, increases efficiency, and multiplies growth
          capacity.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Strategy",
    subtitle: "Turn Visibility into Revenue",
    tagline: "Being present online is not enough. You need structure.",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-foreground/80">
        <p>We provide:</p>
        <ul className="space-y-1.5 ml-4">
          {[
            "Content strategy",
            "Brand positioning",
            "Paid campaigns",
            "Lead funnels",
            "Community building",
            "Performance analytics",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {b}
            </li>
          ))}
        </ul>
        <p className="text-foreground/60 italic text-xs sm:text-sm border-l-2 border-primary/40 pl-3">
          Social media is not about likes — it is about authority, trust, and
          consistent lead generation.
        </p>
      </div>
    ),
  },
  {
    title: "Training & Business Mentorship",
    subtitle: "Clarity Before Expansion",
    tagline: "Growth without clarity leads to chaos.",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-foreground/80">
        <p>We provide:</p>
        <ul className="space-y-1.5 ml-4">
          {[
            "Business growth workshops",
            "Founder mentoring",
            "Team performance training",
            "Strategic planning sessions",
            "Revenue model development",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {b}
            </li>
          ))}
        </ul>
        <p className="text-foreground/60 italic text-xs sm:text-sm border-l-2 border-primary/40 pl-3">
          Our training ensures your systems, team, and strategy are aligned
          before scaling.
        </p>
      </div>
    ),
  },
  {
    title: "Event Management & Conferences",
    subtitle: "From Brand to Experience",
    tagline: "An event is not decoration — it is market entry strategy.",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-foreground/80">
        <p>We organize:</p>
        <ul className="space-y-1.5 ml-4">
          {[
            "Business launch events",
            "Corporate conferences",
            "Community networking events",
            "Product unveilings",
            "Brand activation campaigns",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {b}
            </li>
          ))}
        </ul>
        <p className="text-foreground/60 italic text-xs sm:text-sm border-l-2 border-primary/40 pl-3">
          Events create momentum, visibility, and strategic positioning.
        </p>
      </div>
    ),
  },
  {
    title: "Media Production",
    subtitle: "Visual Authority",
    tagline:
      "Strong visuals increase perceived value — and perceived value increases revenue.",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-foreground/80">
        <p>We offer:</p>
        <ul className="space-y-1.5 ml-4">
          {[
            "Professional photography",
            "Corporate videos",
            "Brand storytelling videos",
            "Reels & short-form content",
            "Motion graphics & animated videos",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {b}
            </li>
          ))}
        </ul>
        <p className="text-foreground/60 italic text-xs sm:text-sm border-l-2 border-primary/40 pl-3">
          Even a simple profile design is part of your brand architecture.
        </p>
      </div>
    ),
  },
];

const ServicesSlider = () => {
  return (
    <div className="services-swiper relative w-full h-full">
      <Swiper
        onSwiper={(swiper) => {
          const prev = document.querySelector(".child-prev") as HTMLElement;
          const next = document.querySelector(".child-next") as HTMLElement;
          prev.style.opacity = swiper.isBeginning ? "0.3" : "1";
          next.style.opacity = swiper.isEnd ? "0.3" : "1";
        }}
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".child-next", prevEl: ".child-prev" }}
        pagination={{ clickable: true }}
        nested={true}
        watchSlidesProgress={true}
        spaceBetween={0}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = ".child-prev";
          navigation.nextEl = ".child-next";
        }}
        onSlideChange={(swiper) => {
          const prev = document.querySelector(".child-prev") as HTMLElement;
          const next = document.querySelector(".child-next") as HTMLElement;

          if (prev && next) {
            prev.style.opacity = swiper.isBeginning ? "0.3" : "1";
            next.style.opacity = swiper.isEnd ? "0.3" : "1";
          }
        }}
        className="w-full h-full relative">
        {/* Background image */}
        <img
          src="/images/services.webp"
          alt=""
          className="absolute inset-0 bg-image w-full h-full object-cover object-right blur-[0px] md:blur-none"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.82), rgba(0,0,0,0.55), rgba(0,0,0,0.2))",
          }}
        />
        {services.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-start pl-6 sm:pl-12 lg:pl-24 pr-4">
                <div className="max-w-xl w-full relative bg-black/60 p-3 rounded-lg">
                  {s.intro ? (
                    <>
                      <h2 className="text-sm uppercase tracking-widest text-primary mb-3">
                        {s.title}
                      </h2>
                      <p className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4 uppercase">
                        {s.subtitle}
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-sm uppercase tracking-widest text-primary mb-2">
                        {s.title}
                      </h2>
                      <p className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {s.subtitle}
                      </p>
                      {s.tagline && (
                        <p className="text-foreground/60 mb-4 text-xs sm:text-base">
                          {s.tagline}
                        </p>
                      )}
                    </>
                  )}
                  <div className="max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar">
                    {s.content}
                  </div>
                  {/* Slide indicator */}
                  <div className="mt-4 text-xs text-foreground/40 relative">
                    {i + 1} / {services.length}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Arrows */}
      <div className="absolute sm:top-[90%] top-[79%] left-[50%] z-20 -translate-x-[50%] -translate-y-[50%] w-full sm:w-[50vw] px-1">
        <div className="relative flex flex-row justify-between">
          <button className="child-prev bg-white/10 hover:bg-white/20 backdrop-blur px-2 py-3 rounded-lg text-white transition">
            <ArrowLeft width={18} />
          </button>
          <button className="child-next bg-white/10 hover:bg-white/20 backdrop-blur px-2 py-3 rounded-lg text-white transition">
            <ArrowRight width={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
