import { ReactNode } from "react";

interface SlideContentProps {
  image: string;
  gradientDirection?: "left" | "right" | "center";
  children: ReactNode;
  textAlign?: "left" | "right" | "center";
  objectAlign?: "left" | "right" | "center";
}

const gradients = {
  left: "linear-gradient(to right, rgba(0,0,0,0.78), rgba(0,0,0,0.45), rgba(0,0,0,0.12))",
  right: "linear-gradient(to left, rgba(0,0,0,0.78), rgba(0,0,0,0.45), rgba(0,0,0,0.12))",
  center: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.65), rgba(0,0,0,0.55))",
};

const alignClass = {
  left: "items-start text-left pr-4 pl-6 sm:pl-12 lg:pl-24",
  right: "lg:items-end items-start text-left pl-4 lg:pl-24 pr-6 sm:pr-12 lg:pr-24",
  center: "items-center text-center px-6",
};
const objectDirection = {
  "left": "object-cover lg:object-center object-left",
  "right": "object-cover lg:object-center object-right",
  "center": "object-cover lg:object-center object-center",
};

const SlideContent = ({ image, gradientDirection = "left", children, textAlign = "left", objectAlign="center" }: SlideContentProps) => (
  <div className="relative w-full h-full overflow-hidden">
    {/* BG image with Ken Burns */}
    <img
      src={image}
      alt=""
      className={`bg-image absolute inset-0 w-full h-full ${objectDirection[objectAlign]} blur-[0px] md:blur-none`}
      loading="lazy"
    />
    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{ background: gradients[gradientDirection] }}
    />
    {/* Content */}
    <div className={`slide-text relative z-10 h-full flex flex-col justify-center ${alignClass[textAlign]} pt-0`}>
      <div className="max-w-2xl bg-black/60 lg:bg-transparent p-3 rounded-lg">
        {children}
      </div>
    </div>
  </div>
);

export default SlideContent;
