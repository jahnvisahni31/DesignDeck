import Link from 'next/link';
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}>
      <div style={{
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        width: "100%",
        padding: "2rem",
      }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "1rem",
          borderBottom: "2px solid #4CAF50",
          paddingBottom: "0.5rem",
          textAlign: "center",
          color: "black"
        }}>
          Privacy Policy
        </h1>
        <p style={{
          lineHeight: "1.6",
          marginBottom: "1rem",
          textAlign: "center",
          color: "black",
        }}>
          Effective Date: [Insert Date]
        </p>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Information We Collect</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            We collect different types of information to improve our services and provide a better user experience.
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "black" }}>
            <li style={{ color: "black" }}>Personal Information: name, email address, username, IP address</li>
            <li style={{ color: "black" }}>Usage Data: browser type, pages viewed, time spent on pages, etc.</li>
            <li style={{ color: "black" }}>Cookies and Tracking Technologies: We use cookies to monitor activity and improve functionality.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> How We Use Your Information</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            The information we collect is used in various ways to enhance our services, including:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li style={{ color: "black" }}>Real-time collaboration using the LiveBlocks API</li>
            <li style={{ color: "black" }}>Sending notifications and updates</li>
            <li style={{ color: "black" }}>Monitoring website traffic and functionality</li>
            <li style={{ color: "black" }}>Detecting and preventing security incidents</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Sharing Your Information</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            We do not sell or rent your personal information. However, we may share your data with third-party services like LiveBlocks API for real-time collaboration, or as required by law.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Cookies and Tracking Technologies</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            We use cookies to personalize your experience. You can disable cookies in your browser settings, but this may affect site functionality.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Data Security</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            We take appropriate measures to protect your personal data from unauthorized access and disclosure. However, no method of internet transmission is completely secure.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> External Links</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            Our website may contain links to third-party sites. We are not responsible for their privacy practices, so we encourage you to review their privacy policies.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> User Rights</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            You may have rights regarding your personal data, including access, correction, and deletion. To exercise these rights, please contact us.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> International Users</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            If you are accessing DesignDeck from outside our server’s location, your data may be transferred to countries with different data protection laws.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Children’s Privacy</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            We do not knowingly collect data from children under 13. If we become aware of such data being collected without parental consent, we will delete it promptly.
          </p>
        </section>

        <section style={{ marginBottom: "1rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Changes to This Privacy Policy</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4CAF50",
          }}> Contact Us</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "black" }}>
            <strong>Email:</strong> Jahnvisahni98@gmail.com <br />
            <strong>Contact Page:</strong> <Link href="/contact" style={{ color: "#4CAF50", textDecoration: "underline" }}>Contact us</Link>
          </p>
        </section>
         <div style={{ textAlign: "left", marginTop: "2rem" }}>
          <Link href="/">
            <button style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}>
              Home
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;
