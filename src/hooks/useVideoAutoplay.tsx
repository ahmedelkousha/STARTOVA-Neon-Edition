import { useEffect, useRef } from "react";

/**
 * useVideoAutoplay
 * Plays a video when it enters the viewport and pauses when it leaves.
 *
 * @param threshold  – 0-1, how much of the video must be visible before playing (default 0.4)
 * @param rootMargin – IntersectionObserver margin (default "0px")
 */
export function useVideoAutoplay(
  threshold = 0.5,
  rootMargin = "0px 0px -10% 0px", // shrinks the bottom edge inward — video must scroll further before triggering
) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video never plays on its own before the observer fires
    video.pause();
    video.currentTime = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked by browser — mute and retry
            video.muted = true;
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return videoRef;
}