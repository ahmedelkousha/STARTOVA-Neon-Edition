import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination, EffectFade } from "swiper/modules";
import ContactForm from "@/components/ContactForm";
import "swiper/css/effect-fade";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SlideContent from "@/components/SlideContent";
import ServicesSlider from "@/components/ServicesSlider";
import { Button } from "@/components/ui/button";

const Index = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const navigateTo = useCallback((index: number) => {
    swiperRef.current?.slideTo(index);
  }, []);

  const glowBtn =
    "shadow-[0_0_20px_hsl(220_90%_56%/0.3)] hover:shadow-[0_0_30px_hsl(220_90%_56%/0.5)]";
  
  const footerVideoRef = useRef<HTMLVideoElement>(null);

  const FOOTER_SLIDE_INDEX = 9; // 0-based, Footer is the 10th slide

  const handleSlideChange = (swiper: SwiperType) => {
    const video = footerVideoRef.current;
    if (!video) return;
    if (swiper.activeIndex === FOOTER_SLIDE_INDEX) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

    return (
      <div className="h-screen w-screen overflow-hidden">
        <Header onNavigate={navigateTo} />
        <ContactModal open={modalOpen} onOpenChange={setModalOpen} />

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          direction="vertical"
          mousewheel={{
            forceToAxis: true,
            thresholdDelta: 10,
            thresholdTime: 300,
          }}
          keyboard
          speed={1000}
          touchRatio={1}
          threshold={0}
          pagination={{ clickable: true }}
          allowTouchMove={true}
          touchStartPreventDefault={false}
          // Fade effect
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          modules={[Mousewheel, Keyboard, Pagination, EffectFade]}
          className="h-full w-full">
          {/* 1 - Hero */}
          <SwiperSlide>
            <SlideContent
              image="/images/hero.webp"
              gradientDirection="left"
              textAlign="left"
              objectAlign="center">
              <h1 className="text-[1.7rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4 uppercase">
                We Build Systems That
                <br />
                <span className="text-primary">Grow Businesses</span>
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed">
                From technology to media, from strategy to execution —
                <br className="hidden sm:block" />
                we design integrated growth solutions for brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => setModalOpen(true)}
                  className={`bg-primary text-primary-foreground ${glowBtn}`}>
                  Book a Strategy Session
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigateTo(4)}
                  className="border-primary/50 text-primary hover:bg-primary/10">
                  Explore Our Services
                </Button>
              </div>
            </SlideContent>
          </SwiperSlide>

          {/* 2 - Vision */}
          <SwiperSlide>
            <SlideContent
              image="/images/vision.webp"
              gradientDirection="right"
              textAlign="right"
              objectAlign="left">
              <h2 className="text-sm uppercase tracking-widest text-primary mb-3">
                Our Vision
              </h2>
              <h2 className="font-display text-[1.7rem] lg:text-4xl font-bold text-foreground mt-3 uppercase">
                Where Ambition Meets{" "}
                <span className="text-primary">Structure</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-lg">
                To become a leading Business Growth Firm that transforms
                ambitious ideas into scalable, structured, and sustainable
                businesses.
              </p>
            </SlideContent>
          </SwiperSlide>

          {/* 3 - Mission */}
          <SwiperSlide>
            <SlideContent
              image="/images/mission.webp"
              gradientDirection="left"
              textAlign="left"
              objectAlign="right">
              <h2 className="text-sm uppercase tracking-widest text-primary mb-3">
                Our Mission
              </h2>
              <h2 className="font-display text-[1.7rem] lg:text-4xl font-bold text-foreground mt-3 uppercase">
                Empowering <span className="text-primary">Growth</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-lg">
                We empower founders and businesses with the tools, technology,
                and strategic clarity needed to launch, grow, and dominate their
                market.
              </p>
            </SlideContent>
          </SwiperSlide>

          {/* 4 - About */}
          <SwiperSlide>
            <SlideContent
              image="/images/about.webp"
              gradientDirection="right"
              textAlign="right"
              objectAlign="left">
              <h2 className="text-sm uppercase tracking-widest text-primary mb-3">
                About Us
              </h2>
              <h2 className="font-display text-[1.7rem] lg:text-4xl font-bold text-foreground mt-3 uppercase">
                not a traditional{" "}
                <span className="text-primary">marketing agency</span>
              </h2>
              <p className="text-base text-foreground/80 mb-4 mt-4">
                We are a Business Development–driven firm that combines:
              </p>
              <ul className="space-y-1.5 text-foreground/80 mb-6">
                {[
                  "Technology",
                  "Strategy",
                  "Media",
                  "Training",
                  "Brand Activation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-circle-check-big text-primary shrink-0">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/60 italic">
                Because growth without structure is temporary.
              </p>
            </SlideContent>
          </SwiperSlide>

          {/* 5 - Services (fullscreen horizontal slider) */}
          <SwiperSlide>
            <div className="w-full h-full">
              <ServicesSlider />
            </div>
          </SwiperSlide>

          {/* 6 - Ecosystem */}
          <SwiperSlide>
            <SlideContent
              image="/images/ecosystem.webp"
              gradientDirection="right"
              textAlign="right"
              objectAlign="left">
              <h2 className="text-primary font-display text-sm tracking-widest uppercase">
                The Ecosystem
              </h2>
              <h2 className="font-display text-[1.7rem] lg:text-4xl font-bold text-foreground mt-3 uppercase">
                How Everything <span className="text-primary">Connects</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                No service stands alone.
              </p>
              <ul className="mt-8 space-y-1.5 text-foreground/80 mb-6">
                {[
                  "Technology feeds marketing.",
                  "Marketing feeds visibility.",
                  "Visibility feeds authority.",
                  "Authority feeds revenue.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-circle-check-big text-primary shrink-0">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-foreground/70 text-lg italic">
                We design ecosystems — not isolated services.
              </p>
            </SlideContent>
          </SwiperSlide>

          {/* 7 - Who We Work With */}
          <SwiperSlide>
            <SlideContent
              image="/images/audience.webp"
              gradientDirection="left"
              textAlign="left"
              objectAlign="right">
              <h2 className="text-primary font-display text-sm tracking-widest uppercase">
                OUR CLIENTS
              </h2>
              <h2 className="font-display text-[1.7rem] lg:text-4xl font-bold text-foreground mt-3 uppercase">
                WHO WE <span className="text-primary">WORK WITH</span>
              </h2>
              <ul className="mt-8 space-y-3 text-lg text-foreground/90">
                {[
                  "Founders launching in the U.S.",
                  "Small & mid-size businesses",
                  "Service-based businesses",
                  "Insurance agencies",
                  "Retail & hospitality brands",
                  "Community-driven entrepreneurs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-circle-check-big text-primary shrink-0">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </SlideContent>
          </SwiperSlide>

          {/* 8 - Why Choose Us */}
          <SwiperSlide>
            <SlideContent
              image="/images/whychooseus.webp"
              gradientDirection="right"
              textAlign="right"
              objectAlign="left">
              <h2 className="text-primary font-display text-sm tracking-widest uppercase">
                WHY US
              </h2>
              <h2 className="font-display text-[1.7rem] lg:text-4xl font-bold text-foreground mt-3 uppercase">
                WHY CHOOSE STAR<span className="text-primary">TOVA</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Business Development Mindset",
                    desc: "We think like growth partners, not vendors.",
                  },
                  {
                    title: "Integrated Growth Systems",
                    desc: "Every service connects to drive compounding results.",
                  },
                  {
                    title: "Technology-Driven Execution",
                    desc: "We leverage automation, AI, and modern platforms.",
                  },
                  {
                    title: "Long-Term Scalable Strategies",
                    desc: "We build foundations, not quick fixes.",
                  },
                ].map((p) => (
                  <div key={p.title}>
                    <h3 className="text-lg flex items-center gap-2 mt-8 font-bold text-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-circle-check-big text-primary shrink-0">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>{" "}
                      {p.title}
                    </h3>
                    <p className="text-sm text-foreground/70">{p.desc}</p>
                  </div>
                ))}
              </div>
            </SlideContent>
          </SwiperSlide>

          {/* 9 - CTA + Form */}
          <SwiperSlide>
            <div className="w-screen flex gap-8 items-center p-8 h-screen justify-center">
              <div className="w-screen h-auto sm:w-[45%] m-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-6">
                  Ready to stop buying random services and start building{" "}
                  <span className="text-primary">structured growth?</span>
                </h2>
                <span>Whether you need:</span>

                <ul className="space-y-1.5 text-foreground/80 mb-8 mt-4">
                  {[
                    "A website",
                    "A mobile app",
                    "Social media management",
                    "Professional media production",
                    "A launch event",
                    "Strategic guidance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-circle-check-big text-primary shrink-0">
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>{" "}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg text-foreground/70 mb-8">
                  We build every service with one goal:
                  <br />
                  <span className="text-xl font-bold text-primary">
                    Your Business Growth.
                  </span>
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setModalOpen(true)}
                    className={`bg-primary text-primary-foreground ${glowBtn}`}>
                    Book Your Strategy Call
                  </Button>

                  <Button
                    variant="outline"
                    className="border-accent/50 text-accent hover:bg-accent/10"
                    onClick={() =>
                      window.open("https://wa.me/1234567890", "_blank")
                    }>
                    Start Building Today
                  </Button>
                </div>
              </div>

              {/* RIGHT: WHATSAPP FORM */}
              <div className="hidden sm:grid w-[45%] h-auto">
                <ContactForm />
              </div>
            </div>
          </SwiperSlide>

          {/* 10 - Footer */}
          <SwiperSlide>
            <div className="w-full h-full flex items-end bg-background">
              <Footer videoRef={footerVideoRef} onNavigate={navigateTo} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Index;
