// export default function TypingText() {
//   return (
//     <div className="py-2 ">
//       <blockquote className="text-sm italic font-semibold text-white ">
//         <p>
//           "The aim of art is not to represent the outward appearance of things, but their inward
//           significance"
//         </p>
//       </blockquote>
//       <span className="block text-right font-semibold text-sm">-Pablo Picasso</span>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { artQuotes } from "../../constants";
// import { store } from "../../store";
// import { useSnapshot } from "valtio";

// export default function TypingText() {
//   const snap = useSnapshot(store);
//   const artQuotesLength = artQuotes.length;

//   const [randomNum] = useState(() => Math.floor(Math.random() * artQuotesLength));
//   // console.log(randomNum);
//   const { quote, name } = artQuotes[randomNum];

//   const [typedText, setTypedText] = useState("");
//   let i = 0;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTypedText(quote.substring(0, i));
//       i++;

//       if (i > quote.length) {
//         clearInterval(interval);
//       }
//     }, 10);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="py-2 ">
//       <blockquote className="text-sm text-center italic font-semibold text-white ">
//         <p>{`"${typedText}"`}</p>
//       </blockquote>
//       {typedText.length === quote.length && (
//         <span className="block text-right font-semibold text-sm">{`-${name}`}</span>
//       )}

//       {/* <blockquote className="text-sm italic font-semibold text-white ">
//         <p>
//           "The aim of art is not is not to represent the outward appearance of things, but their
//           inward significance"
//         </p>
//       </blockquote>
//       <span className="block text-right font-semibold text-sm">-Pablo Picasso</span> */}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { artQuotes } from "../../constants";
import { store } from "../../store";
import { useSnapshot } from "valtio";

export default function TypingText() {
  const snap = useSnapshot(store);
  const artQuotesLength = artQuotes.length;

  const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * artQuotesLength));
  const [typedText, setTypedText] = useState("");
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prevText) => {
        // Reset i and update randomNum when the quote has been fully typed
        if (i > artQuotes[randomNum].quote.length) {
          setRandomNum((prevNum) => {
            let newRandomNum;
            do {
              newRandomNum = Math.floor(Math.random() * artQuotesLength);
            } while (newRandomNum === prevNum); // Ensure new random number is different
            i = 0; // Reset i for new quote
            return newRandomNum;
          });
          return "";
        }
        i++;
        return artQuotes[randomNum].quote.substring(0, i);
      });
    }, 30 * 1000); // 30 seconds interval

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [randomNum, artQuotesLength]);

  return (
    <div className="py-2 ">
      <blockquote className="text-sm text-center italic font-semibold text-white ">
        <p>{`"${typedText}"`}</p>
      </blockquote>
      {typedText.length === artQuotes[randomNum].quote.length && (
        <span className="block text-right font-semibold text-sm">{`-${artQuotes[randomNum].name}`}</span>
      )}
    </div>
  );
}
