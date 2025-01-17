import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
import toast, { Toaster } from 'react-hot-toast';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  position: string;
  email: string;
  phone: string;
}

function Modal({ isOpen, onClose }: ModalProps) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    setFormData({ name: "", position: "", email: "", phone: "" });
    toast.success("Submission successful! Please check your email for the company profile document.",{ duration: 3000 });
    try {
      const response = await fetch("https://api.satrianusa.group/api/send-file", {
        method: "POST", // Specify the request method as POST
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData),
      });
      
    } catch (error) {
      console.log("Error submitting form data:", error);
    }
  };

  const closeModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
      <div
        className="relative w-4/5 p-8 bg-white rounded-lg md:w-1/2 modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700 focus:outline-none"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>
          <h1 className="text-[#0E4F94] font-bold text-4xl mb-10">
            Request Company Profile
          </h1>
          <form className="w-full mx-auto space-y-5" onSubmit={handleSubmit}>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                {Translator.t("fullname", lang)}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {Translator.t("jobtitle", lang)}
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {Translator.t("email", lang)}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {Translator.t("phone", lang)}
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="flex justify-end space-x-5">
              <button
                className="text-[#0E4F94] border border-[#0E4F94] py-3 px-5 md:py-2 md:px-4 rounded-3xl"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-[#0E4F94] py-3 px-5 md:py-2 md:px-4 rounded-3xl hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
