import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // State untuk animasi

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFadeIn(true); // Aktifkan animasi

    setTimeout(() => {
      setFadeIn(false); // Matikan animasi fade-in sebelum menghilang
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 300); // Tambah sedikit delay biar animasi keluar smooth
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Have a question or want to work with us? Fill out the form below and we'll be in touch.
      </p>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
          Send Message
        </button>
      </form>

      {/* Modal Berhasil Submit */}
      {isSubmitted && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-500">Success!</h3>
            <p>Thank you, {formData.name}! Your message has been sent.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
