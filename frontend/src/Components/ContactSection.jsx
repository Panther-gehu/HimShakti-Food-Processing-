function ContactSection() {
  const whatsappLink =
    "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20want%20to%20know%20more%20about%20your%20products.";

  return (
    <section
      id="contact"
      className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-5xl font-bold text-green-700 dark:text-green-400 mb-6">
        Get In Touch
      </h2>

      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        Interested in our products? Contact us directly on WhatsApp for
        inquiries, product details, bulk orders, and business partnerships.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300">
          Contact on WhatsApp
        </button>
      </a>
    </section>
  );
}

export default ContactSection;
