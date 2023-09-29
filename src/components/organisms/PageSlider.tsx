import { Link as ScrollLink } from "react-scroll";

const PageSlider = () => {
  return (
    <div className="fixed top-[50%] right-0 mr-2 z-50 translate-x-[-50%] translate-y-[-50%]">
      <div className="d-flex flex-column">
        <ScrollLink
          className="h-10 w-2 bg-gray-200 rounded-full flex items-center justify-center mb-2 opacity-50 cursor-pointer"
          activeClass="bg-indigo-500 opacity-100"
          to="hero"
          spy={true}
          smooth={true}
          duration={1000}
        ></ScrollLink>
        <ScrollLink
          className="h-10 w-2 bg-gray-200 rounded-full flex items-center justify-center mb-2 opacity-50 cursor-pointer"
          activeClass="bg-indigo-500 opacity-100"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        ></ScrollLink>
        <ScrollLink
          className="h-10 w-2 bg-gray-200 rounded-full flex items-center justify-center mb-2 opacity-50 cursor-pointer"
          activeClass="bg-indigo-500 opacity-100"
          to="technologies"
          spy={true}
          smooth={true}
          duration={1000}
        ></ScrollLink>
        <ScrollLink
          className="h-10 w-2 bg-gray-200 rounded-full flex items-center justify-center mb-2 opacity-50 cursor-pointer"
          activeClass="bg-indigo-500 opacity-100"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        ></ScrollLink>
      </div>
    </div>
  );
};

export default PageSlider;
