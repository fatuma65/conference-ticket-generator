/* eslint-disable react/prop-types */

const ProgressBar = ({ progress, color, height }) => {
  return (
    <>
      <div
        className="w-[100%] bg-[#0E464F] rounded-md mt-2"
        style={{ height: `${height}` }}
      >
        <div
          className="h-[100%] rounded-md"
          style={{ width: `${progress}%`, backgroundColor: `${color}` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
