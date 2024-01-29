import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="pb-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white">
                BLUEACE'S
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="pages" />
              <Footer.LinkGroup col>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Blueace's Blog" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
            <Footer.Icon href="https://www.twitter.com/" icon={BsTwitter} />
            <Footer.Icon href="https://www.github.com/" icon={BsGithub} />
            <Footer.Icon href="https://www.dribble.com/" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footerr;
