import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

// Declare the text once outside the component
const fullText =
  "I’m a software engineer with expertise in crafting responsive web applications and designing user-friendly interfaces that prioritize accessibility and seamless user experiences.";

const TypingText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 25; // Adjust speed (milliseconds per character)

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)); // Extract up to the current index
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId); // Stop once the entire text is shown
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <Text
      fontSize="18px"
      fontWeight="bold"
      color="#8892B0"
      maxWidth="650px"
      mt={5}
      fontFamily="Roboto Mono"
      minHeight={["200px", "200px", "100px"]}
    >
      {displayedText}
    </Text>
  );
};

export default TypingText;
