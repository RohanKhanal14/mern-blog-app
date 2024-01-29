import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation().pathname;
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white">
          BLUEACE'S
        </span>{" "}
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={CiSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden " pill color="gray">
        <CiSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={currentUser.rest.profilePic}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.rest.username}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.rest.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/dashboard?tab=profile">Profile</Link>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone={"purpleToBlue"} pill>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={location === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={location === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={location === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
