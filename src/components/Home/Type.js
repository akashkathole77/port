import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "MLOps Engineer",
          "Data Scientist",
          "Data is the foundation of AI, but it takes a skilled data scientist to unlock its true potential.",
          "The beauty of AI and MLops lies not just in the technology, but in the way it empowers us to make better decisions and create a better future",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
