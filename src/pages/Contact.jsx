import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

try {
      console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

setStatus("Message sent successfully!");
      setStatusType("success");

setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      setStatus(
        `Failed to send message: ${
          error?.text || error?.message || "Please check your EmailJS setup."
        }`
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

return (
    <section className="section contact-premium-section">
      <div className="container">
        <div className="contact-hero-box fade-up">
          <span className="contact-badge">Get in Touch</span>
          <h1 className="contact-title">Contact Animeverse</h1>
          <p className="contact-subtitle">
            Have a question, suggestion, or feedback? Send us a message and
            we’ll get back to you as soon as possible.
          </p>
        </div>

<div className="contact-form-box fade-up">
          <form className="premium-contact-form" onSubmit={handleSubmit}>
            <div className="contact-input-grid">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

<input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

<input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

<textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

<button
              type="submit"
              className="btn contact-submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

{status && (
              <p className={`contact-status ${statusType}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
