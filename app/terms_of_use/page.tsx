import { Metadata } from "next";
import RootLayout from "@/app/layout"; 
import Link from "next/link"; 

export const metadata: Metadata = {
  title: "Terms of Use - DesignDeck",
  description: "Read the terms of use for DesignDeck.",
};

export default function TermsOfUse() {
  return (
    <RootLayout>
      <div style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "2rem auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "1rem",
          borderBottom: "2px solid #4CAF50",
          paddingBottom: "0.5rem",
          textAlign : "center"
        }}>
          Terms of Use
        </h1>
        
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          Welcome to DesignDeck! These Terms of Use govern your use of our website and services. Please read these terms carefully before using our services. By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          1. Acceptance of Terms
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          By accessing or using our services, you confirm that you accept these Terms of Use and that you agree to comply with them. If you do not agree to these terms, you must not access or use our services.
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          2. User Responsibilities
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          You are responsible for your use of the services and for any content you create or share while using our services. You agree to use the services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the services. This includes not engaging in any conduct that is unlawful, harmful, or objectionable.
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          3. Intellectual Property
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          All content on DesignDeck, including text, graphics, logos, images, and software, is the property of DesignDeck or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission. Any unauthorized use of the content may violate copyright, trademark, and other laws.
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          4. Limitation of Liability
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          In no event shall DesignDeck be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or use of our services. This includes any damages resulting from any errors or omissions in the content, loss of data, or any unauthorized access to or use of our servers and/or any personal information stored therein. Your use of our services is at your own risk.
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          5. Changes to Terms
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting the revised terms on our website. Your continued use of the services following any changes constitutes your acceptance of the new terms. We encourage you to review these terms periodically for updates.
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          6. Governing Law
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          These Terms of Use shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Any legal action or proceeding arising out of or related to these terms shall be brought exclusively in the courts located within [Your Jurisdiction].
        </p>

        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#4CAF50",
        }}>
          7. Contact Information
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          For any questions about these Terms of Use, please contact us at [Your Email Address]. We value your feedback and are here to assist you with any concerns.
        </p>

        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          Thank you for using DesignDeck! We appreciate your trust and commitment to our services.
        </p>

        <br></br>
        <Link href="/" >
          <button className="ml-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            Home
          </button>
        </Link>
      </div>
    </RootLayout>
  );
}
