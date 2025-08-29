import { create } from "zustand";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const useContactFormStore = create((set, get) => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
  acceptedTerms: false,

  setField: (field, value) =>
    set(() => ({
      [field]: value,
    })),

  resetForm: () =>
    set({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
      acceptedTerms: false,
    }),
  submitForm: async () => {
    const { firstName, lastName, email, phone, serviceType, message } = get();
    console.log(
      "data received",
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      message
    );

    try {
      const response = await axiosInstance.post("/contact/create", {
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email,
        phone,
        ServiceType: serviceType,
        message,
      });

      return response.data;
    } catch (error) {
      console.error(" Error submitting form:", error);
      throw error;
    }
  },
}));

export default useContactFormStore;
