"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through an array of phrases with a typewriter effect.
 * Used for the Hero's rotating professional titles.
 */
export function useTypingEffect(phrases = [], { typingSpeed = 70, deletingSpeed = 40, pause = 1800 } = {}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    let timeout;
    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        const next = isDeleting
          ? currentPhrase.slice(0, text.length - 1)
          : currentPhrase.slice(0, text.length + 1);
        setText(next);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return text;
}
