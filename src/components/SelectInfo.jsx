/* eslint-disable react/prop-types */

const SelectInfo = ({ title, steps, otherStyles }) => {
  return (
    <>
      <div
        className={`flex justify-between md:items-center md:flex-row flex-col text-white font-light ${otherStyles}`}>
        <h1 className="text-[22px]">{title}</h1>
        <p className="text-[12px]">Step {steps}</p>
      </div>
    </>
  );
};

export default SelectInfo;
