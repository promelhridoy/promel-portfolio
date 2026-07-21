"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/** Screenshot grid with a click-to-enlarge lightbox. */
export function ProjectGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Screenshots</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <button
            key={src + index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-video overflow-hidden rounded-xl shadow-soft"
            aria-label={`View screenshot ${index + 1} of ${title} full size`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot preview`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/10"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-soft"
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
