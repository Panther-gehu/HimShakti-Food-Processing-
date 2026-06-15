function ContactSection() {
  const whatsappLink =
    "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20want%20to%20know%20more%20about%20your%20products.";

  return (
   <section  id="contact"  className="contact-section min-h-[70vh] flex flex-col justify-center">
      <h2 className="text-5xl font-bold text-green-700 mb-6">
        Get In Touch
      </h2>

      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Interested in our products? Contact us directly on WhatsApp for
        inquiries, product details, and orders.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <button className="whatsapp-btn">
          Contact on WhatsApp
        </button>
      </a>

    </section>
  );
}

export default ContactSection;