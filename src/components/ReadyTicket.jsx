/* eslint-disable react/prop-types */
import SelectInfo from "./SelectInfo";
import ShowProgress from "./ShowProgress";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Ticket from "./Ticket";
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
      backgroundColor: "#12464E",
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

      <Ticket user={user} />

      <div className=" text-white md:flex md:flex-row flex-col mt-4 md:mt-8 text-[11px] md:text-[12px] gap-2 rounded-[16px] ">
        <button
          type="button"
          onClick={() => resetForm()}
          tabIndex="0"
          onKeyDown={(e) => e.key === "Enter" && resetForm()}
          className="bg-[#041E23] border border-[#197686] md:w-[50%] w-full cursor-pointer h-full rounded-md p-1.5  p-3 text-[#24A0B5] focus:ring-2 focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#041E23] transition-colors">
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
