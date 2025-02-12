/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import TicketSelection from "../components/TicketSelection";
import Ready from "../components/ReadyTicket";
import { UserContext } from "./index";
import AttendeeForm from "../components/AttendeeForm";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    avatar: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const components = [TicketSelection, AttendeeForm, Ready];
  const totalSteps = 3;

  // Load saved user details from localStorage on mount
  useEffect(() => {
    const savedDetails = localStorage.getItem("userDetails");
    if (savedDetails) {
      const parsedDetails = JSON.parse(savedDetails);
      setFormData(parsedDetails);
      setUser(parsedDetails);
    }
  }, []);

  // Handle form input changes
  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };
      localStorage.setItem("userDetails", JSON.stringify(updatedFormData));
      setUser(updatedFormData);
      return updatedFormData;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }, []);

  // Validate form fields
  const validateForm = useCallback((data) => {
    const formErrors = {};

    if (!data.name.trim()) {
      formErrors.name = "Name is required";
    } else if (data.name.length < 5) {
      formErrors.name = "Name must be at least 5 characters long";
    }

    if (!data.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      formErrors.email = "Email must be a valid email address";
    }

    if (!data.project.trim()) {
      formErrors.project = "Project is required";
    } else if (data.project.length < 5) {
      formErrors.project = "Project must be at least 5 characters long";
    }

    if (!data.avatar) {
      formErrors.avatar = "Please upload a profile photo";
    }

    return formErrors;
  }, []);

  // Handle avatar upload
  const handleAvatarChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file || !(file.type === "image/jpeg" || file.type === "image/png")) {
      setErrors((prev) => ({
        ...prev,
        avatar: "Please select a valid image file (JPEG or PNG)",
      }));
      return;
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const cloudPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    setIsUploading(true);
    setErrors((prev) => ({ ...prev, avatar: "" }));

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", cloudPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: uploadData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setFormData((prev) => ({ ...prev, avatar: data.secure_url }));
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        avatar: "Failed to upload image. Please try again.",
      }));
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      project: "",
      avatar: null,
    });
    setUser(null);
    localStorage.removeItem("userDetails");
    setCurrentPage(0);
  };
  // Navigate to the next page
  const handleNext = useCallback(() => {
    if (currentPage < totalSteps - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage]);

  // Navigate to the previous page
  const handleBack = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const value = {
    formData,
    handleAvatarChange,
    handleFormChange,
    user,
    setUser,
    isUploading,
    errors,
    handleBack,
    handleNext,
    currentPage,
    components,
    validateForm,
    setErrors,
    fileInputRef,
    resetForm,
    totalSteps,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default AuthProvider;
