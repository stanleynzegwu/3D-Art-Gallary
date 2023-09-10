import { useState, useEffect } from "react";
import { artQuotes } from "../../constants";
import { store } from "../../store";
import { useSnapshot } from "valtio";

export default function TypingText() {
  // const snap = useSnapshot(store);
  const artQuotesLength = artQuotes.length;

  const [randomNum] = useState(() => Math.floor(Math.random() * artQuotesLength));
  // console.log(randomNum);
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
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-2 ">
      {/* <blockquote className="text-sm text-center italic font-semibold text-white ">
        <p>{`"${typedText}"`}</p>
      </blockquote>
      {typedText.length === quote.length && (
        <span className="block text-right font-semibold text-sm">{`-${name}`}</span>
      )} */}

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
