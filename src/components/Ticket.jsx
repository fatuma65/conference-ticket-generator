/* eslint-disable react/prop-types */
import BarCode from "./BarCode";
import bgImage from "../assets/bg.png";

const Ticket = ({ user }) => {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen  py-8"
        id="ticket">
        <div className="relative w-[320px] h-[650px] overflow-hidden rounded-3xl">
          <img
            src={bgImage}
            alt="Techember Fest background"
            className="absolute bg-none w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bla opacity-50"></div>
          <div className="absolute inset-0 bg-none flex flex-col justify-between p-6 text-white">
            <div className="text-center">
              <h1
                className="text-5xl font-medium mb-2"
                style={{ fontFamily: "Road Rage" }}>
                Techember Fest &quot;25
              </h1>
              <p className="text-sm">📍 04 Rumens road, Ikoyi, Lagos</p>
              <p className="text-sm">📅 March 15, 2025 | 7:00 PM</p>
            </div>
            <div className="rounded-xl p-4 space-y-4">
              <img
                src={user?.avatar}
                alt="QR Code"
                className=" w-[180px] h-[120px] mx-auto rounded-md"
              />
              <div className="before:content-[''] mr-6 before:absolute before:w-[2px] w-full mx-auto before:h-full before:bg-[#12464E] relative before:left-[109px] before:top-0">
                <div className="flex justify-between border-b-2 border-b-[#12464E]">
                  <div className="w-[50%]">
                    <p className="font-light text-[11px] text-[#ddd] ">
                      Full Name
                    </p>
                    <h4 className="py-2 text-[12px]">{user?.name}</h4>
                  </div>

                  <div className="w-[50%] px-2">
                    <p className="font-light text-[11px] text-[#ddd] ">Email</p>
                    <h4 className="py-2 text-[12px] overflow-hidden break-words text-ellipsis">
                      {user?.email}
                    </h4>
                  </div>
                </div>
                <div className="flex gap-3 border-b-2 border-b-[#12464E] pb-2 mt-2">
                  <div className="w-[50%]">
                    <p className="font-light text-[11px] md:text-[13px] text-[#ddd] ">
                      Ticket Type:
                    </p>
                    <h4 className="py-2 text-[12px]">VVIP</h4>
                  </div>
                  <div className="w-[50%]">
                    <p className="font-light text-[11px] text-[#ddd] ">
                      Ticket for:
                    </p>
                    <h4 className="py-2 text-[12px]">1</h4>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-light text-[11px] ">Special Request?</p>
                <p className="text-[12px] mt-2">
                  Nil ? Or the users sad story they write in there gets this
                  whole space, Max of three rows
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center ">
              <BarCode user={user?.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
