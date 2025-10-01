import React, { useState, useEffect } from "react";
import { artQuotes } from "../../constants";

export default function TypingText() {
  const artQuotesLength = artQuotes.length;

  const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * artQuotesLength));
  const [charIndex, setCharIndex] = useState(0);

  const currentQuote = artQuotes[randomNum].quote;
  const typedText = currentQuote.substring(0, charIndex);
  const isFinished = charIndex === currentQuote.length;

  useEffect(() => {
    if (charIndex < currentQuote.length) {
      const typingInterval = setInterval(() => {
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearInterval(typingInterval);
    } else {
      const timeout = setTimeout(() => {
        let newNum;
        do {
          newNum = Math.floor(Math.random() * artQuotesLength);
        } while (newNum === randomNum);

        setRandomNum(newNum);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, randomNum, artQuotesLength, currentQuote.length]);

  return (
    <div className="py-2">
      {/* Quote */}
      <blockquote className="text-center italic font-semibold text-sm text-gray-200 leading-relaxed">
        <p>{typedText && `"${typedText}"`}</p>
      </blockquote>

      {/* Author (only show after typing finishes) */}
      {isFinished && (
        <footer
          className="block italic text-right font-semibold text-xs text-gray-400 transition-all duration-700 ease-in-out opacity-100 translate-y-0"
          style={{ minHeight: "1.25rem" }}
        >
          -{artQuotes[randomNum].name}
        </footer>
      )}
    </div>
  );
}
