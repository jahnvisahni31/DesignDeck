"use client";

import React, { useEffect, useState } from "react";
import RootLayout from "@/app/layout";
import NavbarComponent from "../front-navbar";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const { systemTheme, theme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [theme, systemTheme]);

  return (
    <RootLayout>
      <NavbarComponent />
      <div
        style={{ marginTop: "2rem" }}
        className={`min-h-screen ${
          darkMode
            ? "bg-black text-white"
            : "bg-gradient-to-r from-gray-100 via-white to-gray-300 text-black"
        } py-8`}
      >
        <div
          style={{
            marginTop: "2rem",
            padding: "2rem",
            maxWidth: "800px",
            margin: "2rem auto",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            backgroundColor: darkMode ? "#2E3440" : "#F9FAFB",
            color: darkMode ? "#D8DEE9" : "#111827",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              borderBottom: `2px solid ${darkMode ? "#88C0D0" : "#3B82F6"}`,
              paddingBottom: "0.5rem",
              textAlign: "center",
              color: darkMode ? "#88C0D0" : "#3B82F6",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Effective Date: [Insert Date]
          </motion.p>

          <Section title="Information We Collect" darkMode={darkMode}>
            We collect various types of information to enhance your experience on our platform. The data we collect helps improve our services, provide personalized experiences, and ensure smooth functionality. The information includes:
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li><strong>Personal Information:</strong> Your name, email address, username, and IP address.</li>
              <li><strong>Usage Data:</strong> Information about your browser type, pages visited, time spent on pages, and other interactions.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Used to track user behavior and improve performance.</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information" darkMode={darkMode}>
            Your data is utilized to improve your experience, keep the site functional, and ensure smooth operation. Some of the ways we use your information are:
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Providing real-time collaboration through LiveBlocks API.</li>
              <li>Sending important notifications and updates to keep you informed.</li>
              <li>Monitoring website traffic and overall site performance.</li>
              <li>Ensuring the security and integrity of our platform by preventing and detecting potential security threats.</li>
            </ul>
          </Section>

          <Section title="Sharing Your Information" darkMode={darkMode}>
            We do not sell or rent your personal data. However, we may share your information with trusted third parties, such as LiveBlocks API or legal authorities, if required by law.
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Third-party services involved in the site's functionality may have limited access to your information.</li>
              <li>Legal compliance requires us to disclose your data when necessary.</li>
            </ul>
          </Section>

          <Section title="Cookies and Tracking Technologies" darkMode={darkMode}>
            Cookies are used to personalize your browsing experience. By using our services, you agree to the use of cookies, but you can manage or disable them in your browser settings:
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Cookies help us understand how you interact with our services.</li>
              <li>Disabling cookies may affect your experience on our platform.</li>
            </ul>
          </Section>

          <Section title="Data Security" darkMode={darkMode}>
            We take extensive measures to secure your data, but no method of data transmission is entirely secure. We aim to protect your information from unauthorized access or breaches.
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>We use encryption and security protocols to safeguard your data.</li>
              <li>Despite our efforts, there is no guaranteed method of ensuring absolute security.</li>
            </ul>
          </Section>

          <Section title="External Links" darkMode={darkMode}>
            Our site may include links to third-party websites. We are not responsible for the privacy practices of these external sites, and we encourage you to review their policies before providing personal data.
          </Section>

          <Section title="User Rights" darkMode={darkMode}>
            You have several rights regarding the personal data we collect. You can request access to, correction of, or deletion of your information. Contact us if you wish to exercise these rights.
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Right to Access: Request a copy of your personal data.</li>
              <li>Right to Correction: Update any incorrect or incomplete data.</li>
              <li>Right to Deletion: Request the removal of your personal data from our systems.</li>
            </ul>
          </Section>

          <Section title="International Users" darkMode={darkMode}>
            Our services are accessible globally, and by using them, you agree to the transfer and processing of your data internationally. Please ensure that you understand your local laws regarding data privacy.
          </Section>
        </div>
      </div>
    </RootLayout>
  );
};

function Section({ title, children, darkMode }) {
  return (
    <>
      <motion.h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: darkMode ? "#88C0D0" : "#3B82F6",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p
        style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {children}
      </motion.p>
    </>
  );
}

export default PrivacyPolicy;
