/* eslint-disable react/prop-types */
import BarCode from "./BarCode";
import bgImage from "../assets/bg.png";
import { useTicket } from "../context/customHooks";

const Ticket = ({ user }) => {
  const { ticket } = useTicket();

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen py-2 "
        id="ticket">
        <div className="relative w-full max-w-[320px] h-[650px] overflow-hidden rounded-3xl">
          <img
            src={bgImage}
            alt="Techember Fest background"
            className="absolute w-full h-full object-fit p-1 sm:p-2"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent  opacity-50 sm:opacity-60 rounded-3xl"></div>

          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 text-white">
            <div className="text-center">
              <h1
                className="text-3xl sm:text-4xl font-medium mb-1 sm:mb-2"
                style={{ fontFamily: "Road Rage" }}>
                Techember Fest &quot;25
              </h1>
              <p className="text-xs sm:text-sm">
                📍 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="text-xs sm:text-sm">📅 March 15, 2025 | 7:00 PM</p>
            </div>

            <div className="rounded-xl p-3 sm:p-4 space-y-4" id="ticket">
              <img
                src={user?.avatar}
                alt="User Avatar"
                className="w-[120px] h-[90px] sm:w-[180px] sm:h-[120px] mx-auto rounded-md border-3 border-[#24A0B5]"
              />

              <div className="bg-[#08343C] py-4 w-full px-4 rounded-md">
                <div className="before:content-[''] mr-6 before:absolute before:w-[2px] w-full mx-auto before:h-full before:bg-[#12464E] relative before:left-[90px] before:top-0">
                  <div className="flex flex-wrap justify-between border-b-2 border-b-[#12464E] pb-2">
                    <div className="w-1/2 pr-1 sm:pr-2">
                      <p className="font-light text-[10px] sm:text-[11px] text-[#ddd]">
                        Full Name
                      </p>
                      <h4 className="py-1 sm:py-2 text-[11px] sm:text-[12px]">
                        {user?.name}
                      </h4>
                    </div>
                    <div className="w-1/2 pl-1 sm:pl-2">
                      <p className="font-light text-[10px] sm:text-[11px] text-[#ddd]">
                        Email
                      </p>
                      <h4 className="py-1 sm:py-2 text-[11px] sm:text-[12px] overflow-hidden break-words text-ellipsis">
                        {user?.email}
                      </h4>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3 border-b-2 border-b-[#12464E] pb-2 mt-2">
                    <div className="w-1/2">
                      <p className="font-light text-[10px] sm:text-[11px] text-[#ddd]">
                        Ticket Type:
                      </p>
                      <h4 className="py-1 sm:py-2 text-[11px] sm:text-[12px]">
                        {ticket?.type.split(" ")[1]}
                      </h4>
                    </div>
                    <div className="w-1/2">
                      <p className="font-light text-[10px] sm:text-[11px] text-[#ddd]">
                        Ticket for:
                      </p>
                      <h4 className="py-1 sm:py-2 text-[11px] sm:text-[12px]">
                        {ticket?.count}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="font-light text-[10px] sm:text-[11px]">
                    Special Request?
                  </p>
                  <p className="text-[11px] sm:text-[12px] mt-1 sm:mt-2">
                    &quot;Nil ? Or the user&apos;s sad story they write here
                    (Max of three rows)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <BarCode user={user?.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
