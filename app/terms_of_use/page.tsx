"use client";

import React, { useEffect, useState } from "react";
import RootLayout from "@/app/layout";
import NavbarComponent from "../front-navbar";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function TermsOfUse() {
  const { systemTheme, theme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [theme, systemTheme]);

  return (
    <>
      <RootLayout>
        <NavbarComponent />
        <div
          style={{marginTop: "2rem"}}
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
              Terms of Use
            </motion.h1>

            <motion.p
              style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to DesignDeck! These Terms of Use govern your use of our
              website and services. Please read these terms carefully before
              using our services. By accessing or using our services, you agree
              to comply with and be bound by these terms. If you do not agree
              with any part of these terms, you must not use our services.
            </motion.p>

            <Section title="1. Acceptance of Terms" darkMode={darkMode}>
              By accessing or using our services, you confirm that you accept
              these Terms of Use and that you agree to comply with them. If you
              do not agree to these terms, you must not access or use our
              services.
            </Section>

            <Section title="2. User Responsibilities" darkMode={darkMode}>
              You are responsible for your use of the services and for any
              content you create or share while using our services. You agree to
              use the services only for lawful purposes and in a manner that
              does not infringe the rights of, restrict, or inhibit anyone
              else&apos;s use and enjoyment of the services.
            </Section>

            <Section title="3. Intellectual Property" darkMode={darkMode}>
              All content on DesignDeck, including text, graphics, logos, and
              images, is the property of DesignDeck or its licensors and is
              protected by copyright, trademark, and other intellectual property
              laws.
            </Section>

            <Section title="4. Limitation of Liability" darkMode={darkMode}>
              In no event shall DesignDeck be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              from your access to or use of our services.
            </Section>

            <Section title="5. Changes to Terms" darkMode={darkMode}>
              We reserve the right to modify these Terms of Use at any time. Any
              changes will be effective immediately upon posting.
            </Section>

            <Section title="6. Governing Law" darkMode={darkMode}>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of [Your State/Country], without regard
              to its conflict of law provisions.
            </Section>

            <Section title="7. Contact Information" darkMode={darkMode}>
              For any questions about these Terms of Use, please contact us at
              [Your Email Address].
            </Section>
          </div>
        </div>
      </RootLayout>
    </>
  );
}

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
