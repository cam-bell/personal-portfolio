import emailjs from "@emailjs/browser";

// EmailJS configuration - Make sure to set these environment variables in .env.local
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const RECIPIENT_EMAIL =
  process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || "cameronsobell@gmail.com";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<void> => {
  // Validate environment variables
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error(
      "EmailJS configuration is missing. Please check your environment variables."
    );
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: RECIPIENT_EMAIL,
      reply_to: formData.email, // This allows you to reply directly to the sender
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (result.status === 200) {
      console.log("Email sent successfully:", result);
    } else {
      throw new Error(`Email sending failed with status: ${result.status}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
