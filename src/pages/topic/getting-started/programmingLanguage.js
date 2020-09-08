import React from "react";
import TopLanguages from "./topLanguages";

function ProgrammingLanguage() {
  return (
    <div>
      <h3 id="programming-language">Programming Language</h3>
      <p>
        To communicate with people, we need to use a common language (e.g.,
        English) so that we can understand each other. Similarly, When we want
        to "talk" to computers, we need programming languages.
      </p>
      <p>
        Just like human languages, there are various programming languages as
        well. You might have heard some of them: C, C++, Java, JavaScript,
        Python, Go, etc. And here is the diagram of{" "}
        <a
          href="https://www.tiobe.com/tiobe-index/"
          target="_blank"
          rel="noreferrer"
        >
          TIOBE Index for September 2020
        </a>
        :
      </p>
      <TopLanguages />
    </div>
  );
}

export default ProgrammingLanguage;
