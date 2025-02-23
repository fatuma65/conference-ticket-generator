import { useAuth, useTicket } from "../context/customHooks";
import SelectInfo from "./SelectInfo";
import ShowProgress from "./ShowProgress";
import { ticketTypes, numberOfTickets } from "../constants/tickets";

// eslint-disable-next-line react/prop-types
const TicketSelection = ({ onNext }) => {
  const { currentPage, totalSteps } = useAuth();
  const {
    ticketCount,
    handleCountChange,
    selectedTicket,
    handleTicketSelection,
  } = useTicket();
  return (
    <>
      <SelectInfo
        title={"Ticket Selection"}
        steps={`${currentPage + 1}/${totalSteps}`}
      />
      <ShowProgress currentPage={currentPage} totalSteps={totalSteps} />
      <div className="bg-[#08252B] w-full mt-8 py-2 px-2 rounded-[16px]">
        <div className="bg-linear-to-l from-[#02191D] from-[30%]  text-white to-[#197686] md:px-0 px-8  py-6 mx-auto text-center border border-[#197686] rounded-[16px]">
          <h1
            className="text-5xl font-medium"
            style={{ fontFamily: "Road Rage" }}>
            Techember Fest &quot;25
          </h1>
          <p className="text-[12px] mt-2">
            Join us for an unforgettable experience at <br /> [Event Name]!
            Secure your spot now.
          </p>
          <div className="md:flex items-center gap-2 justify-center text-[12px] mt-2">
            <div className="flex items-center justify-center">
              📍
              <p>[Event Location]</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="md:block hidden">||</p>
              <p> March 15 , 2025 | 7:00PM</p>
            </div>
          </div>
        </div>

        <hr className="w-[100%] border-2 border-[#07373F] mt-8" />

        <div className=" mt-6 text-white">
          <p className="md:text-[14px] text-[16px]">Select Ticket Type:</p>

          <div className="bg-[#052228] border border-[#197686] grid md:grid-cols-3 grid-cols-1 gap-2 mt-2 py-4 px-4 rounded-[24px]">
            {ticketTypes.map((type) => (
              <div
                key={type}
                onClick={() => handleTicketSelection(type)}
                className={`${
                  selectedTicket === type ? "bg-[#12464E]" : ""
                } hover:bg-[#2C545B] border-2 border-[#197686] flex flex-col py-4 px-3 rounded-[8px] cursor-pointer`}>
                <h4 className="font-semibold">
                  {type.includes("$") ? type.split(" ")[0] : type}
                </h4>
                <h6 className="md:text-[12px] text-[14px] regular mt-3 md:text-nowrap">
                  {type.includes("VIP") ? type.split(" ")[1] : "REGULAR"} ACCESS
                </h6>
                <p className="text-[12px]">20 left!</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-6 text-white">
          <label htmlFor="tickets" className="text-[14px]">
            Number of tickets
          </label>
          <div className=" border border-[#07373F] bg-none rounded-[12px] p-3 mt-3 w-full">
            <select
              name="ticket"
              id="ticket"
              value={ticketCount}
              onChange={handleCountChange}
              className="  text-[13px] outline-none w-full h-full bg-[#08252B] cursor-pointer text-white">
              {numberOfTickets.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className=" text-white md:flex md:flex-row flex-col mt-6 text-[12px] gap-2 rounded-[16px]">
          <button className="bg-[#041E23] border border-[#197686] md:w-[50%] w-full cursor-pointer h-full rounded-md  p-3 text-[#24A0B5]">
            Cancel
          </button>
          <button
            onClick={onNext}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && onNext()}
            className="bg-[#24A0B5] md:w-[50%] w-full h-full rounded-md  p-3 md:mt-0 mt-3 cursor-pointer  focus:ring-2 focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#1B7F8F] transition-colors">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TicketSelection;
