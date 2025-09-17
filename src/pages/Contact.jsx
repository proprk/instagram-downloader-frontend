import react from "react";

const Contact = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        Have questions, feedback, or takedown requests? Reach us at:
      </p>
      <p className="mb-2">
        📧 Email:{" "}
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 underline"
        >
          your-email@example.com
        </a>
      </p>
      <p className="mb-2">We usually respond within 2–3 business days.</p>
    </div>
    );
}

export default Contact;