import { GrLinkNext } from "react-icons/gr";
import { useAuth } from "../context/customHooks";
import icon from "../assets/hugeicons_ticket-01.png";
const Navbar = () => {
  const { components, currentPage } = useAuth();
  const isLastComponent = currentPage === components.length - 1;
  return (
    <>
      <header
        className={` ${
          isLastComponent
            ? "md:absolute left-[50%] mt-[15px] transform md:-translate-x-1/2 z-5 backdrop-blur-xs backdrop-[#05252C]"
            : ""
        } text-white flex justify-between items-center border border-[#197686] lg:w-[70%] w-[90%] mx-auto mt-8  md:px-2 py-3 px-3 rounded-[12px]`}>
        <div className="flex items-center gap-2">
          <img
            src={icon}
            alt="Icon"
            className="border border-[#0E464F] p-1 rounded-md bg-[#052F35]"
          />
          <h1
            className="text-[#0E464F] text-2xl"
            style={{
              textShadow: "1px 1px 1px #FFFFFF, -1px -1px 1px #FFFFFF",
            }}>
            tics
          </h1>
        </div>
        <nav className="md:block hidden">
          <ul className="flex gap-4 text-[14px]">
            <li>Events</li>
            <li className="text-[#B3B3B3]">My Tickets</li>
            <li className="text-[#B3B3B3]">About Project</li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 bg-white p-0 text-[#0A0C11] py-2 px-4 rounded-md">
          <button className="text-[14px] tracking-tight">MY TICKETS</button>
          <GrLinkNext />
        </div>
      </header>
    </>
  );
};

export default Navbar;
