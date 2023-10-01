import { Link as ScrollLink } from "react-scroll";

const PageSlider = () => {
  return (
    <div className="fixed top-[50%] right-0 mr-2 z-50 translate-x-[-50%] translate-y-[-50%]">
      <div className="d-flex flex-column">
        <ScrollLink
          className="h-10 w-2 bg-gray-200/50 rounded-sm flex items-center justify-center mb-2 cursor-pointer"
          activeClass="bg-red-600/100"
          to="hero"
          spy={true}
          smooth={true}
          duration={1000}
        />
        <ScrollLink
          className="h-10 w-2 bg-gray-200/50 rounded-sm flex items-center justify-center mb-2 cursor-pointer"
          activeClass="bg-red-600/100"
          to="tech"
          spy={true}
          smooth={true}
          duration={1000}
        />
        <ScrollLink
          className="h-10 w-2 bg-gray-200/50 rounded-sm flex items-center justify-center mb-2 cursor-pointer"
          activeClass="bg-red-600/100"
          to="exp"
          spy={true}
          smooth={true}
          duration={1000}
        />
        <ScrollLink
          className="h-10 w-2 bg-gray-200/50 rounded-sm flex items-center justify-center mb-2 cursor-pointer"
          activeClass="bg-red-600/100"
          to="proj"
          spy={true}
          smooth={true}
          duration={1000}
        />
      </div>
    </div>
  );
};

export default PageSlider;
