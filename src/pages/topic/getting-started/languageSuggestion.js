import React from "react";

export default function LanguageSuggestion() {
  return (
    <>
      <p>Some suggestions to choose which programming language to learn:</p>
      <ul>
        <li>
          If you are going to learn your first programming language, then there
          are 3 programming languages that are taught most in introductory
          programming courses at university: C, Java and Python (coincidentally
          match the top 3 among TIOBE Programming Community Index).
          <ul>
            <li>
              Compared with Java and Python, C is relatively a lower level
              programming language. It is "simple": it does not include many
              built-in data structures, nor is it an object-oriented programming
              (OOP) language. However, it has the concept of <em>pointer</em>,
              which means programmers can directly manage the memory, but also
              brings much confusion to beginners. C plays an important role when
              dealing with the underlying part of computer, like computer system
              or operating system.
            </li>
            <li>
              Java is one of the most widely-used programming languages around
              the world. It provides abundant APIs (application programming
              interface) and strong community support. It is an object-oriented
              programming language, which helps you to grasp the idea of OOP
              when learning Java. Java's basic syntax is almost the same as C's,
              and once you gain the knowledge of Java/C, it is easy to transfer
              your knowledge to other C-family programming languages like C++
              and Go.
            </li>
            <li>
              Python has been gaining ongoing popularity recently, and many
              universities start to use Python in the introductory programming
              courses.{" "}
              <q cite="https://wiki.python.org/moin/BeginnersGuide/Overview">
                Python uses an elegant syntax, making the programs you write
                easier to read. And it is an easy-to-use language that makes it
                simple to get your program working.
              </q>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
