import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";

const Contact = () => { 
  const { cycleTheme, theme } = useTheme();
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2w1qti",  // Replace with your EmailJS Service ID
        "template_2cfz0ne",  // Replace with your EmailJS Template ID
        form.current,
        "v7T92uVEvVo5wTP20"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
     // id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gray-700"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className={`w-32 h-1 bg-${theme.name}-300 mx-auto mt-4`}></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className={`mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border-2 border-${theme.name}-300`}>
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4 ">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-${theme.name}-300`}
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-${theme.name}-300`}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-${theme.name}-300`}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className={`w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-${theme.name}-300`}
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className={`w-full bg-${theme.name}-300  py-3 text-white font-semibold rounded-md hover:opacity-90 transition`}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;