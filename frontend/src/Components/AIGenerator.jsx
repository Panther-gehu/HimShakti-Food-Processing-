import { useState } from "react";

function AIGenerator() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  const generateDescription = () => {
    const product = productName.toLowerCase().trim();

    if (product === "mandua flour") {
      setDescription(
        "Mandua Flour is a nutritious millet-based flour sourced from the hills of Uttarakhand. Rich in fiber, calcium, and essential nutrients, it is ideal for healthy and traditional recipes."
      );
    } else if (product === "jhangora") {
      setDescription(
        "Jhangora is a traditional Himalayan millet known for its light texture and high nutritional value. It is commonly used in healthy meals and desserts."
      );
    } else if (product === "red rice") {
      setDescription(
        "Red Rice is a premium variety of rice packed with antioxidants and natural nutrients. It offers a unique flavor and supports a healthy lifestyle."
      );
    } else if (
      product === "pahadi rajma" ||
      product === "rajma"
    ) {
      setDescription(
        "Pahadi Rajma is a famous Himalayan kidney bean variety grown in Uttarakhand. Known for its rich taste, soft texture, and high protein content, it is a healthy and delicious choice for traditional Indian meals."
      );
    } else if (
      product === "natural amla candy" ||
      product === "amla candy" ||
      product === "amla"
    ) {
      setDescription(
        "Natural Amla Candy is a healthy snack made from fresh Indian gooseberries. Rich in Vitamin C and antioxidants, it supports immunity while offering a sweet and tangy flavor."
      );
    } else if (
      product === "himalayan honey" ||
      product === "honey"
    ) {
      setDescription(
        "Himalayan Honey is pure natural honey collected from the pristine regions of Uttarakhand. It is rich in nutrients, has a delightful taste, and serves as a natural alternative to refined sugar."
      );
    } else {
      setDescription(
        "Product not found. Please enter Mandua Flour, Jhangora, Red Rice, Pahadi Rajma, Natural Amla Candy, or Himalayan Honey."
      );
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
            className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-green-800 transition"
          >
            Generate Description
          </button>

        </div>
<div className="h-20"></div>

{description && (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-l-4 border-green-700 text-left">
    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
      {description}
    </p>
  </div>
)}
      </div>
    </section>
  );
}

export default AIGenerator;
