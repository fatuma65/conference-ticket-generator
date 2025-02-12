/* eslint-disable react/prop-types */
import SelectInfo from "./SelectInfo";
import ShowProgress from "./ShowProgress";
import { useAuth } from "../context/index";
import UserForm from "./UserForm";

const AttendeeForm = ({ onNext, onBack }) => {
  const {
    formData,
    handleAvatarChange,
    handleFormChange,
    isUploading,
    setErrors,
    validateForm,
    errors,
    fileInputRef,
    currentPage,
    totalSteps,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    console.log(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted successfully");
      onNext();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <>
      <SelectInfo
        title={"Attendee Form"}
        steps={`${currentPage + 1}/${totalSteps}`}
      />
      <ShowProgress currentPage={currentPage} totalSteps={totalSteps} />

      <div className="bg-[#08252B] w-full px-6 py-6 mt-6 rounded-[24px] border border-[#07373F]">
        <div className="bg-[#052228] border border-[#07373F] md:py-4 text-white py-6 px-4 rounded-[24px]">
          <UserForm
            formData={formData}
            handleAvatarChange={handleAvatarChange}
            handleSubmit={handleSubmit}
            handleKeyPress={handleKeyPress}
            fileInputRef={fileInputRef}
            errors={errors}
            isUploading={isUploading}
            onBack={onBack}
            handleFormChange={handleFormChange}
          />
        </div>
      </div>
    </>
  );
};

export default AttendeeForm;
