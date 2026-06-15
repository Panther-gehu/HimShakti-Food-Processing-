function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="w-full flex flex-col items-center text-center px-6">

        <h3 className="text-xl font-bold text-green-400 mb-2">
          🌿 HimShakti Food Processing
        </h3>

        <p className="max-w-2xl text-gray-300 leading-relaxed mb-6 text-base">
          Bringing authentic and healthy food products from Uttarakhand
          to customers across India. We are committed to quality,
          tradition, and sustainable food processing.
        </p>

        <div className="space-y-1 text-sm text-gray-300 mb-3">
          <p>📍 Uttarakhand, India</p>
          <p>📞 +91 7355779801</p>
          <p>📧 info@himshakti.com</p>
        </div>

        <div className="w-48 h-px bg-gray-700 mb-4"></div>

        <p className="text-gray-400 text-sm">
          © 2026 HimShakti Food Processing. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;