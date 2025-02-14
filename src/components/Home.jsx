import Navbar from "./Navbar";
import "./HomeStyles.css";
import { useAuth } from "../context/customHooks";

const Home = () => {
  const { components, handleBack, currentPage, handleNext } = useAuth();
  const CurrentComponent = components[currentPage];
  const isLastComponent = currentPage === components.length - 1;

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div
          className={`${
            isLastComponent ? "md:min-h-screen md:mt-0" : " md:mt-8"
          } border w-[90%] md:w-[70%] lg:w-[45%] mx-auto border-[#197686] py-4 md:py-4 px-4 md:px-12 mt-4  mb-4 rounded-[24px]`}>
          <CurrentComponent onNext={handleNext} onBack={handleBack} />
        </div>
      </div>
    </>
  );
};

export default Home;
