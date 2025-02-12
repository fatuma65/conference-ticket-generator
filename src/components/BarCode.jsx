/* eslint-disable react/prop-types */
import Barcode from "react-barcode";

const BarCode = ({ user }) => {
  return (
    <>
      <Barcode
        value={user}
        background="none"
        lineColor="#fff"
        format="CODE128"
        fontOptions="bold"
      />
    </>
  );
};

export default BarCode;
