"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import Footer from "@/components/ui/footer";
import NavbarComponent from "../front-navbar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    // Simple form validation
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate successful form submission without sending data to backend
    setSuccess(true);
    setButtonText("Message Sent!"); // Change button text on success
    setName("");
    setEmail("");
    setMessage("");

    // Reset the button text after 3 seconds
    setTimeout(() => {
      setButtonText("Send Message");
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <NavbarComponent />
      <div className="min-h-screen bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black font-sans flex flex-col items-center justify-center px-8 py-20">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-xl mb-6 max-w-3xl text-center font-light leading-relaxed">
          We value your feedback and inquiries. Please fill out the form below
          to get in touch with our team, and we will get back to you as soon as
          possible!
        </p>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col w-full max-w-md gap-6 mb-12 p-6 bg-white shadow-lg rounded-lg"
          style={{
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
          <Input
            clearable
            label="Name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="transition-all duration-300 ease-in-out border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <Input
            clearable
            label="Email"
            placeholder="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="transition-all duration-300 ease-in-out border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <Textarea
            clearable
            label="Message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="transition-all duration-300 ease-in-out border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            rows={4}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            type="submit"
            color="primary"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg px-6 py-3 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {buttonText} {/* Display dynamic button text */}
          </Button>
          {/* {success && (
            <p className="text-green-500 mt-4">Your message has been sent successfully!</p>
          )} */}
        </form>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
