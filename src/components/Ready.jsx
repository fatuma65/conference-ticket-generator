/* eslint-disable react/prop-types */
import SelectInfo from "./SelectInfo";
import ShowProgress from "./ShowProgress";
import { GrLocationPin } from "react-icons/gr";
import BarCode from "./BarCode";
import { FcCalendar } from "react-icons/fc";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./TicketReadyStyles.css";
import { useAuth } from "../context";

const Ready = () => {
  const { user, resetForm, currentPage, totalSteps } = useAuth();

  const downloadTicket = () => {
    // Get the ticket element by its ID
    const ticketElement = document.getElementById("ticket");

    if (!ticketElement) {
      console.error("Ticket element not found!");
      return;
    }

    // Capture the ticket element as an image using html2canvas
    html2canvas(ticketElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#12464E'
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a new PDF with jsPDF
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

      // Save the PDF
      pdf.save("ticket.pdf");
    });
  };
  return (
    <>
      <SelectInfo title={"Ready"} steps={`${currentPage + 1}/${totalSteps}`} />
      <ShowProgress currentPage={currentPage} totalSteps={totalSteps} />

      <div className="text-white mx-auto md:text-center py-4 md:py-8">
        <h6 className="text-[16px] md:text-[18px] font-semibold">
          Your Ticket is Booked!
        </h6>
        <p className="text-[11px] md:text-[12px] text-[#FAFAFA]">
          You can download or check your email for a copy
        </p>
      </div>
      <div
        className="flex flex-col items-center justify-center p-2"
        id="ticket">
        <div className="relative py-6 px-4 w-full max-w-[450px] border-2 rounded-[16px] border-[#24A0B5]">
          <div className="py-6 px-6 text-white border-2 rounded-[16px] border-[#24A0B5] bg-[#12464E] flex flex-col justify-center items-center mx-auto w-full">
            <div className="flex flex-col mx-auto text-center justify-center items-center">
              <h1
                className="text-3xl md:text-5xl"
                style={{ fontFamily: "Road Rage" }}>
                Techember Fest &quot;25
              </h1>
              <div className="flex items-center gap-1 py-1 text-sm md:text-[14px]">
                <GrLocationPin />
                <p>04 Rumens road, Ikoyi, Lagos</p>
              </div>
              <div className="flex items-center gap-1 text-sm md:text-[14px]">
                <FcCalendar />
                <p>March 15, 2025 | 7:00 PM</p>
              </div>
            </div>

            <img
              src={user?.avatar}
              alt="User Avatar"
              className="border-4 rounded-md border-[#24A0B5] mt-4 w-[180px] h-[150px] object-cover"
            />

            <div className="  flex flex-col bg-[#08343C] border border-[#133D44] rounded-[16px] py-4 px-4 mt-4 w-full">
              <div className="before:content-[''] mr-6 before:absolute before:w-[2px] w-full mx-auto before:h-full before:bg-[#12464E] relative before:left-[149px] before:top-0">
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
                <p className="font-light text-[12px] md:text-[13px]">
                  Special Request?
                </p>
                <p className="text-[14px]">
                  Nil ? Or the users sad story they write in there gets this
                  whole space, Max of three rows
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <BarCode user={user?.email} />
          </div>
        </div>
      </div>

      <div className=" text-white md:flex md:flex-row flex-col mt-4 md:mt-8 text-[11px] md:text-[12px] gap-2 rounded-[16px] ">
        <button
          type="button"
          onClick={() => resetForm()}
          tabIndex="0"
          onKeyDown={(e) => e.key === "Enter" && resetForm()}
          className="bg-[#041E23] border border-[#197686] md:w-[50%] w-full cursor-pointer h-full rounded-md p-1.5  p-3 text-[#24A0B5] ">
          Book Another Ticket
        </button>
        <button
          onClick={downloadTicket}
          tabIndex="0"
          onKeyDown={(e) => e.key === "Enter" && downloadTicket()}
          className="bg-[#24A0B5] md:w-[50%] w-full h-full rounded-md p-1.5 p-3 cursor-pointer md:mt-0 mt-3 focus:ring-2 focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#1B7F8F] transition-colors">
          Download Ticket
        </button>
      </div>
    </>
  );
};

export default Ready;
