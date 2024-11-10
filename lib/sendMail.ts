import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
});

export const sendOtp = async (email: string, verificationCode: string) => {
    const emailText = `
      Dear Customer,
      
      Please use this verification code for resetting your password. Here's your code':
  
      RCode: ${verificationCode}
      
      Thank you for choosing our service. We are happy to help you.
  
      Best regards,
      Design Deck
    `;
  
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset Verification Code",
        text: emailText,
      });
    } catch (error: any) {

        console.log(error);
      
      if (error.code === "ECONNREFUSED") {
        throw new Error(
          "Failed to connect to email server. Please try again later.",
        );
      } else {
        throw new Error(
          `Failed to send verification email: ${error.message}`,
        );
      }
    }
  
  }
