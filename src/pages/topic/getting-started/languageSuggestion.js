import React from "react";

export default function LanguageSuggestion() {
  return (
    <>
      <p>
        If you are completely new to programming, here are some suggestions to
        choose which programming language to learn:
      </p>
      <ul>
        <li>
          There are 3 programming languages that are taught most in introductory
          programming courses at university: C, Java and Python (coincidentally
          match the top 3 languages among TIOBE Programming Community Index).
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
              universities start to use Python in their introductory programming
              courses.{" "}
              <q cite="https://wiki.python.org/moin/BeginnersGuide/Overview">
                Python uses an elegant syntax, making the programs you write
                easier to read. And it is an easy-to-use language that makes it
                simple to get your program working.
              </q>
            </li>
          </ul>
        </li>
        <li>
          After you have some experience with some programming, and now you want
          to learn a new programming language for some external reasons (e.g.,
          assignments of a course you are taking need to be written in a new
          language, or you need to figure out some code pieces' functionality in
          other languages), then I'd recommend referring to the programming
          language's official documentation rather than taking another
          programming language course. Generally there will be some tutorials to
          help you grasp the language quickly. Here at Learn CS, each tag will
          include links to the official websites and documentations.
        </li>
        {/* <li>
          If you have strong interest in specific fields, then you need to
          master the language are "dominating" in those fields. Here are some
          examples:
          <ul>
            <li>
              <em>macOS, iOS, watchOS, tvOS</em>: <strong>Swift</strong>,
              Objective-C. Swift is still young, but it is promising and is
              taking the place of Objective-C, and more and more companies are
              switching from Objective-C to Swift. It would help to learn
              Objective-C as well, so that you can understand some of the legacy
              code written in Objective-C.
            </li>
            <li>
              <em>Android</em>: <strong>Kotlin, Java</strong>. Google announced{" "}
              <q cite="https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/">
                first-class support for Kotlin at 2017 Google I/O Confluence
              </q>
              , and two years later at 2019 Google I/O Confluence, announced
              that{" "}
              <q cite="https://android-developers.googleblog.com/2019/05/google-io-2019-empowering-developers-to-build-experiences-on-Android-Play.html">
                Android development will become increasingly Kotlin-first
              </q>
              . I'd suggest learning both Java and Kotlin for Android
              development, and here is an{" "}
              <a
                href="https://hackernoon.com/kotlin-vs-java-android-development-qh6z329j"
                target="_blank"
                rel="noreferrer"
              >
                article
              </a>{" "}
              from Hacker Noon comparing Kotlin and Java.
            </li>
          </ul>
        </li> */}
      </ul>
    </>
  );
}
