import React from "react";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoGithub,
} from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <footer className="bg-black py-4  -z-10  w-full">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-gray-400">
            <p className="text-center">
              &copy; {new Date().getFullYear()}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linktr.ee/akash_prasad"
              >
                <u className="text-lg font-semibold">Akash Prasad</u>
              </a>
            </p>
            <p className="text-center">
              Personal BookShelf is your digital gateway to the world of
              literature and knowledge. Our online platform is designed to cater
              to book enthusiasts and anyone seeking to discover, organize, and
              engage with their favorite books.
            </p>
            <p className="text-center">
              <u>Contact me</u>
            </p>
            <div className="flex justify-center mb-2 text-4xl mt-4">
              <a href="mailto:akashprsd7@gmail.com">
                <BiLogoGmail />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-prasad7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <BiLogoLinkedinSquare />
              </a>
              <a
                href="https://twitter.com/Akash_Prasad7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <BiLogoTwitter />
              </a>
              <a
                href="https://github.com/AKASH-PRASAD7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <BiLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
