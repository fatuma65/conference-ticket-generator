/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TicketContext } from "./customHooks";

const TicketProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const savedTicket = JSON.parse(localStorage.getItem("selectedTicket"));
    if (savedTicket) {
      setSelectedTicket(savedTicket.type);
      setTicketCount(savedTicket.count);
      setTicket(savedTicket);
    }
  }, []);

  const handleTicketSelection = (type) => {
    setSelectedTicket(type);

    const ticketDetails = { type, count: ticketCount };
    localStorage.setItem("selectedTicket", JSON.stringify(ticketDetails));
  };

  const handleCountChange = (e) => {
    const count = parseInt(e.target.value);
    setTicketCount(count);
    setSelectedTicket(count);

    if (selectedTicket) {
      const ticketDetails = { type: selectedTicket, count };
      localStorage.setItem("selectedTicket", JSON.stringify(ticketDetails));
      setSelectedTicket(ticketDetails);
    }
  };

  const value = {
    selectedTicket,
    handleTicketSelection,
    ticketCount,
    handleCountChange,
    ticket,
    setSelectedTicket,
    setTicketCount,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};

export default TicketProvider;
