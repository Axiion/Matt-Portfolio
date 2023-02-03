import Head from "next/head";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  FaFacebook,
  FaSpotify,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiDart } from "react-icons/di";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import avatar from "../public/avatarnew.png";
import avatarsmall from "../public/avatarsmall.png";
import exp from "../public/exp.gif";
import dev from "../public/dev.gif";
import contact from "../public/contact.gif";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matt's Portfolio Website</title>
        <meta
          name="description"
          content="Hey, it's Matt, and this is my portfolio website!"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className="bg-white overflow-x-hidden overflow-y-hidden">
        <section className="min-h-screen">
          <nav
            className="px- py-5 mb-5 justify-end text-sm
          md:text-md
          "
          >
            <ul
              className="bg-white w-full left-0
            md:flex space-x-6 md:items-center z-[-1] md:z-auto
            md:static absolute md:text-md md:w-aut
            md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0"
            >
              <li className="text-xl px-8 py-2 font-roboto w-full">MattJTA</li>
              <a href="#">
                <li
                  className="px-5 py-2 rounded-md shadow-md
              hover:bg-[#00FFC6] hover:text-white duration-300 cursor-pointer"
                >
                  Home
                </li>
              </a>
              <a href="#aboutme">
                <li
                  className="px-5 rounded-md shadow-md py-2
              hover:bg-[#00FFC6] hover:text-white duration-300 cursor-pointer"
                >
                  About
                </li>
              </a>
              <a href="#experience">
                <li
                  className="px-5 rounded-md shadow-md py-2
              hover:bg-[#00FFC6] hover:text-white duration-300 cursor-pointer"
                >
                  Experiences
                </li>
              </a>
              <a href="#education">
                <li
                  className="px-5 rounded-md shadow-md py-2
              hover:bg-[#00FFC6] hover:text-white duration-300 cursor-pointer"
                >
                  Education
                </li>
              </a>
              <a
                href="../ANG_MatthewJeremy_Resume.pdf"
                download="ANG_MatthewJeremy_Resume.pdf"
              >
                <li
                  className="bg-[#00FFC6] text-white px-5 py-2 rounded-md shadow-md
              hover:bg-red-500 duration-300 "
                >
                  Resume
                </li>
              </a>
              <li className="pr-10 py-2">
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
            </ul>
            <button
              className="text-3xl block md:hidden ml-5 rounded focus:outline-none
              hover:bg-gray-200 group"
            >
              <RxHamburgerMenu />
              <div
                className="absolute top-0 -left-full opacity-0 h-auto w-6/12 bg-white border transform
              group-focus:left-0 group-focus:opacity-100 transition-all duration-300"
                id="navbutton"
              >
                <ul className="flex flex-col w-full text-base cursor-pointer">
                  <a href="#">
                    <li className="hover:bg-[#00FFC6] hover:text-white duration-300 py-4 px-6 w-full">
                      Home
                    </li>
                  </a>
                  <a href="#aboutme">
                    <li className="hover:bg-[#00FFC6] hover:text-white duration-300 py-4 px-6 w-full">
                      About
                    </li>
                  </a>
                  <a href="#experience">
                    <li className="hover:bg-[#00FFC6] hover:text-white duration-300 py-4 px-6 w-full">
                      Experiences
                    </li>
                  </a>
                  <a href="#education">
                    <li className="hover:bg-[#00FFC6] hover:text-white duration-300 py-4 px-6 w-full">
                      Education
                    </li>
                  </a>
                  <a
                    href="../ANG_MatthewJeremy_Resume.pdf"
                    download="ANG_MatthewJeremy_Resume.pdf"
                  >
                    <li
                      className="bg-[#00FFC6] text-white
                    hover:bg-red-500 duration-300 py-4 px-6 w-full"
                    >
                      Resume
                    </li>
                  </a>
                </ul>
              </div>
            </button>
          </nav>
          <div
            className="flex flex-col
          md:grid grid-cols-3 place-items-center mx-auto
          lg:grid grid-cols-3 place-items-center mx-auto"
          >
            <div
              className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full overflow-hidden 
              h-40 w-40 items-center
              md:hidden"
              id="id"
            >
              <Image src={avatarsmall} layout="fill" objectFit="cover" />
            </div>
            <div className="text-center p-5">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                    },
                  },
                }}
              >
                <h2
                  className="text-2xl py-1 text-teal-500 font-medium text 
                md:text-3xl py-2 max-w-6xl mx-auto
                lg:text-4xl py-2 max-w-6xl mx-auto"
                >
                  Hey, it's Matt.
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                  },
                },
              }}
            >
              <div
                className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full overflow-hidden 
              h-60 w-60 mt-20 hidden items-center
              md:h-96 md:w-96 md:block
              "
              >
                <Image src={avatar} layout="fill" objectFit="cover" />
              </div>
            </motion.div>
            <div className="text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h2
                  className="text-md font-medium leading-8 
              md:text-3xl px-12 leading-8 py-2"
                >
                  4th year Computer Science student.
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  },
                }}
              >
                <p
                  className="text-md leading-8 mt-2
              md:text-xl px-12 py-5 leading-8"
                >
                  An aspiring software engineer and full-stack developer.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>

        <section class="sect" id="aboutme">
          <div className="bg-[#00FFC6]">
            <h3
              className="text-center font-medium py-12 text-3xl 
            md:text-3xl max-w-4xl mx-auto px-10 
            lg:text-4xl max-w-6xl mx-auto px-10"
            >
              About Me
            </h3>
            <p
              className="text-center text-md py-10 leading-8 font-regular text-gray-800 
            md:text-md max-w-4xl mx-auto px-10 
            lg:text-xl max-w-6xl mx-auto px-10"
            >
              Hello! Welcome to my portfolio website! I am Matthew Jeremy T.
              Ang, but you can call me Matt. I'm currently a 4th year Computer
              Science student specializing in Core Computer Science course in
              the University of Santo Tomas. I have loved everything about
              computers ever since-- from building them to programming them. At
              first, I planned on taking up the Game Development specialization,
              but after considering it, I decided to take the Core CS
              specialization due to the many job opportunities I can go for
              after graduating. I was and still am fascinated by how computers
              work due to the rapid advent of technology.
            </p>
            <p
              className="text-center text-md py-10 leading-8 font-regular text-gray-800 
            md:text-md py-15 max-w-4xl mx-auto px-10
            lg:text-xl py-20 max-w-6xl mx-auto px-10"
            >
              Although I may still be a greenhorn when it comes to the world of
              programming, I am willing to learn anything and everything to help
              me become a better programmer.
            </p>
          </div>
        </section>

        <section id="experience">
          <div className="text-center">
            <h3 className="text-3xl font-medium py-20">
              Experiences & Socials
            </h3>
          </div>
          <div className="justify-center m-auto px-5 md:flex px-5 gap-5 lg:flex px-10 gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-full card hover:shadow-xl">
              <div className="grid place-items-center w-full">
                <Image src={exp} height={100} width={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Experience</h3>
              <h4 className="py-10 text-teal-600 text-xl font-medium">
                Skills that I have cultivated during my journey in programming.
              </h4>
              <div className="grid grid-cols-2 place-items-center text-5xl gap-16 py-4 text-gray-800 w-full">
                <FaJava />
                <FaHtml5 />
                <FaCss3Alt />
                <FaJsSquare />
                <FaPython />
                <DiDart />
                <FaReact />
                <SiMysql />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-full card hover:shadow-xl">
              <div className="grid place-items-center w-full">
                <Image src={dev} height={100} width={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Projects</h3>
              <h4 className="py-10 text-teal-600 text-xl font-medium">
                Some small to big scale projects I have worked on-- both solo
                and in a group.
              </h4>
              <div className="text-md gap-5 text-gray-800 w-full">
                <a
                  href="https://github.com/JamielleVelasquez/Ka-Entengs-Farm-to-Table-Restaurant-Website.git"
                  target="_blank"
                >
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    Backend Developer for the Full-Stack Website Concept for
                    Ka-Enteng’s Farm to Table Restaurant
                  </p>
                </a>
                <a href="https://ohnippon.com" target="_blank">
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    Backend Developer for OhNippon! Full-Stack Website
                  </p>
                </a>
                <a
                  href="https://github.com/JamielleVelasquez/SVM-RF-Heat-Disease-Prediction.git"
                  target="_blank"
                >
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    Backend Developer in Improving Support Vector Machine for
                    Heart Disease Prediction Using Synthetic Minority
                    Oversampling Technique (SMOTE) and Majority Voting Through
                    Random Forest Algorithm
                  </p>
                </a>
                <a href="https://github.com/enouuu/CompilerDesignBrew">
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    Brew - A Compiler Design Project
                  </p>
                </a>
                <a
                  href="https://github.com/Axiion/axie_all_in_one.git"
                  target="_blank"
                >
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    An all-in-one app for the game Axie Infinity
                  </p>
                </a>
                <a
                  href="https://github.com/Axiion/thousand_paimon_quiz.git"
                  target="_blank"
                >
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    Quiz game app for the game Genshin Impact
                  </p>
                </a>
                <a
                  href="https://github.com/Axiion/AxieCounter.git"
                  target="_blank"
                >
                  <p className="py-2 font-medium hover:text-blue-600 cursor-pointer duration-300">
                    Energy counter app for the game Axie Infinity
                  </p>
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-full card hover:shadow-xl">
              <div className="grid place-items-center w-full">
                <Image src={contact} height={100} width={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Contact Me</h3>
              <h4 className="py-10 text-teal-600 text-xl font-medium">
                Feel free to contact me through my socials if you need any
                further information from me, or you think I am qualified for
                your project.
              </h4>
              <div className="grid grid-cols-2 place-items-center text-5xl gap-16 py-4 overflow-hidden text-gray-800 w-full">
                <div className="hover:text-[#4267B3] transition-color duration-200 cursor-pointer transform hover:scale-125">
                  <a href="https://www.facebook.com/mattjta" target="_blank">
                    <FaFacebook />
                  </a>
                </div>
                <div className="hover:text-[#55ACEE] transition-color duration-200 cursor-pointer transform hover:scale-125">
                  <a href="https://twitter.com/mattjta" target="_blank">
                    <FaTwitter />
                  </a>
                </div>
                <div
                  className="hover:text-white duration-300 cursor-pointer transform hover:scale-125
                hover:bg-gradient-to-t to-[#F58529] via-[#DD2A7B] from-[#515BD4] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg"
                >
                  <a
                    href="https://www.instagram.com/mattiuuuuu/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className="hover:text-[#1DB954] transition-color duration-200 cursor-pointer transform hover:scale-125">
                  <a
                    href="https://open.spotify.com/user/crystalraidz?si=069d07d61a67476b"
                    target="_blank"
                  >
                    <FaSpotify />
                  </a>
                </div>
                <div className="hover:text-[#161B22] transition-color duration-200 cursor-pointer transform hover:scale-125">
                  <a href="https://github.com/Axiion" target="_blank">
                    <FaGithub />
                  </a>
                </div>
                <div className="hover:text-[#0077B5] transition-color duration-200 cursor-pointer transform hover:scale-125">
                  <a
                    href="https://www.linkedin.com/in/mattjta/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="bg-[#00FFC6] p-10">
          <div className="text-center">
            <h3 className="text-3xl font-medium py-10">Education</h3>
          </div>
          <div className="bg-white p-5 rounded-md shadow-lg md:p-20">
            <ol className="relative border-l border-gray-800">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-[#00FFC6]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-600">
                  2019 - Present
                </time>
                <h3 className="text-lg font-semibold text-gray-800">
                  University of Santo Tomas - College of Information and
                  Computing Sciences - Computer Science
                </h3>
                <p className="mb-4 text-base font-normal text-gray-700">
                  1st Year S.Y. 2019-2020 - Dean's Lister
                  <br />
                  2nd Year S.Y. 2020-2021 - Dean's Lister
                  <br />
                  3rd Year S.Y. 2021-2022 - Dean's Lister
                  <br />
                  4th Year S.Y. 2022-2023 1st Semester - Dean's Lister
                  <br />
                  Executive Assistant to Chief of Staff
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-[#00FFC6]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-700">
                  2018 - 2019
                </time>
                <h3 className="text-lg font-semibold text-gray-800">
                  Senior High School - Hope Christian High School
                </h3>
                <p className="text-base font-normal text-gray-700">
                  Best in Social Sciences Award
                  <br />
                  6 Major Merits
                  <br />
                  2 Minor Merits
                  <br />
                  Chess Club member
                  <br />
                  Handbell Club member
                  <br />
                  Handmime Club member
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-[#00FFC6]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-700">
                  2011 - 2017
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  Primary to High School - Hope Christian High School
                </h3>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
