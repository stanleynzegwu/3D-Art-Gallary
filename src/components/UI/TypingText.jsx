import { useState, useEffect } from "react";
import { artQuotes } from "../../constants";

export default function TypingText({ intervalDuration }) {
  const artQuotesLength = artQuotes.length;
  const randomNum = Math.floor(Math.random() * artQuotesLength);

  const { quote, name } = artQuotes[randomNum];

  const [typedText, setTypedText] = useState("");
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(quote.substring(0, i));
      i++;

      if (i > quote.length) {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-2">
      {/* <blockquote className="text-sm italic font-semibold text-white ">
        <p>{`"${typedText}"`}</p>
      </blockquote>
      <span className="block text-right font-semibold text-sm">{`-${name}`}</span> */}

      <blockquote className="text-sm italic font-semibold text-white ">
        <p>
          "The aim of art is not is not to represent the outward appearance of things, but their
          inward significance"
        </p>
      </blockquote>

      <span className="block text-right font-semibold text-sm">-Pablo Picasso</span>
    </div>
  );
}
