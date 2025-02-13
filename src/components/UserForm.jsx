/* eslint-disable react/prop-types */
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
const UserForm = ({
  formData,
  handleAvatarChange,
  handleSubmit,
  handleFormChange,
  handleKeyPress,
  isUploading,
  fileInputRef,
  errors,
  onBack,
}) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        onKeyDown={handleKeyPress}
        className="text-white text-[14px]">
        <div role="region" aria-label="Profile Photo Upload Section">
          <p className="text-[14px] md:mt-2" id="upload-instructions">
            Upload Profile Photo
          </p>

          <div className="bg-[#02191D] mt-4">
            <div
              className={`bg-[#0E464F] w-full md:w-[45%] rounded-[24px] h-[150px] cursor-pointer px-8 lg:py-8 py-12 mx-auto flex flex-col items-center justify-center relative`}
              aria-label="Upload profile photo"
              tabIndex="0"
              onKeyDown={(e) =>
                e.key === "Enter" && fileInputRef.current?.click()
              }
              aria-describedby="upload-instructions upload-error">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/jpeg, image/png"
                name="avatar"
                onChange={handleAvatarChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                disabled={isUploading}
                aria-label="Choose profile photo"
                aria-required="true"
                aria-invalid={!!errors.avatar}
              />

              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt="Profile preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <MdOutlineCloudUpload className="text-2xl text-white" />
                  <p className="text-[12px] text-center mt-4">
                    {isUploading
                      ? "Uploading..."
                      : "Drag & drop or click to upload"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {errors.avatar && (
            <p
              id="upload-error"
              className="text-red-500 text-[12px] text-left mt-2"
              role="alert">
              {errors.avatar}
            </p>
          )}
        </div>
        <hr
          className="w-[100%] border-2 border-[#07373F] mt-8"
          role="separator"
        />

        <div className="flex flex-col mt-4 bg-none">
          <label htmlFor="name" className="py-2">
            Enter your name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            id="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            className="bg-none text-white outline-none border border-[#07373F] p-2 rounded-[12px] focus:ring-2 focus:ring-[#24A0B5] focus:border-transparent"
          />

          {errors.name && (
            <span
              id="name-error"
              className="text-red-500 text-[12px] text-left mt-2"
              role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="py-2">
            Enter your email
          </label>
          <div className="border border-[#07373F] px-4 flex items-center gap-2 rounded-[12px] focus-within:ring-2 focus-within:ring-[#24A0B5]">
            <FaEnvelope aria-hidden="true" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleFormChange}
              placeholder="hello@avioflagos.io"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              className="bg-none w-full h-[100%] outline-none text-white p-3"
            />
          </div>
          {errors.email && (
            <span
              id="email-error"
              className="text-red-500 text-[12px] text-left mt-2"
              role="alert">
              {errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="project" className="py-2">
            About the project
          </label>
          <textarea
            name="project"
            id="project"
            value={formData.project}
            onChange={handleFormChange}
            placeholder="Textarea"
            rows={5}
            required
            aria-required="true"
            aria-invalid={!!errors.project}
            aria-describedby="project-error"
            className="bg-none border border-[#07373F] p-2 rounded-[12px] outline-none resize-none focus:ring-2 focus:ring-[#24A0B5] focus:border-transparent"></textarea>
          {errors.project && (
            <span
              id="project-error"
              className="text-red-500 text-[12px] text-left mt-2"
              role="alert">
              {errors.project}
            </span>
          )}
        </div>

        <div className="md:flex text-white w-full text-[12px] gap-4 mt-4">
          <button
            type="button"
            onClick={onBack}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && onBack()}
            className="border border-[#24A0B5] md:w-[50%] w-full p-3 rounded-md cursor-pointer focus:ring-2 focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#041E23] transition-colors">
            Back
          </button>
          <button
            type="submit"
            className="bg-[#24A0B5] md:w-[50%] w-full p-3 md:mt-0 mt-3 rounded-md cursor-pointer focus:ring-2 focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#1B7F8F] transition-colors">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
