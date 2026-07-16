import { useState } from "react";
import { generateProductDescription } from "../api/aiApi";

function AIGenerator() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const generateDescription = async () => {
  try {
    setLoading(true);
    const response = await generateProductDescription({
      product_name: productName,
      weight: "1 kg",
      price: "₹180",
      short_description: "Traditional Uttarakhand food product",
      tone: "Professional",
    });

    setDescription(response.result);
  } catch (error) {
    alert("Failed to generate AI description. Please try again.");
    setDescription("");
    console.error(error);
  }
  finally {
  setLoading(false);
}
};

  return (
    <section className="pt-52 pb-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center md:translate-x-68">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-6">
          AI Product Description Generator
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Generate detailed product descriptions for traditional
          Uttarakhand food products using smart content generation.
        </p>

       <div className="flex flex-col md:flex-row justify-center items-center gap-5 max-w-4xl mx-auto">

          <input
            type="text"
            placeholder="Try: Mandua Flour, Rajma, Honey..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full max-w-md px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <button
  onClick={generateDescription}
  disabled={loading}
  className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-green-800 transition disabled:opacity-60"
>
  {loading ? "Generating..." : "Generate Description"}
</button>

        </div>
<div className="h-20"></div>

{description && (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-l-4 border-green-700 text-left whitespace-pre-line">
    <pre className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 font-sans whitespace-pre-wrap">
      {description}
    </pre>
  </div>
)}
      </div>
    </section>
  );
}

export default AIGenerator;