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
        Python, Go, etc. Different programming languages have different pros and
        cons, and programmers have different preferences.
      </p>
      <TopLanguages />
    </div>
  );
}

export default ProgrammingLanguage;
