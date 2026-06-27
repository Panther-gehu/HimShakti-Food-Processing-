import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../Components/ui";

function ComponentShowcase() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            UI Component Library
          </h1>

          <p className="text-gray-600 text-lg">
            Showcase of reusable UI components developed for the HimShakti project.
          </p>
        </div>

        {/* Button Component */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Button Component
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              onClick={() => alert("Primary Button Clicked")}
            >
              Primary Button
            </Button>

            <Button
              variant="secondary"
              onClick={() => alert("Secondary Button Clicked")}
            >
              Secondary Button
            </Button>

            <Button
              variant="outline"
              onClick={() => alert("Outline Button Clicked")}
            >
              Outline Button
            </Button>
          </div>
        </div>

        {/* Input Component */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Input Component
          </h2>

          <div className="max-w-md">
            <Input
              label="Product Name"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* Loader Component */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Loader Component
          </h2>

          <Button
            variant="primary"
            onClick={handleLoader}
          >
            Show Loader
          </Button>

          {loading && (
            <div className="flex justify-center mt-6">
              <Loader />
            </div>
          )}
        </div>

        {/* Modal Component */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Modal Component
          </h2>

          <Button
            variant="primary"
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </Button>
        </div>

        {/* Toast Component */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Toast Component
          </h2>

          <Button
            variant="secondary"
            onClick={() => setShowToast(true)}
          >
            Show Toast
          </Button>
        </div>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Sample Modal"
        >
          <p className="text-gray-700">
            This is a demonstration of the reusable Modal Component.
          </p>
        </Modal>

        <Toast
          message="Toast Notification Triggered!"
          show={showToast}
          onClose={() => setShowToast(false)}
        />

      </div>
    </div>
  );
}

export default ComponentShowcase;