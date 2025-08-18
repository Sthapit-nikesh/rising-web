import React from "react";
import { motion } from "framer-motion";

// This page displays office legal documents (certificates). Drop your images/PDFs
// in the public folder or import from src/images and add to the list below.

const docs = [
  // Example entries; replace paths with real files you add to /public or /src/images
  {
    title: "Certificate of Incorporation",
    src: "/a.jpg",
    type: "image",
  },
  // Add more like: { title: "License", src: "/path-to-file.pdf", type: "pdf" }
];

const DocCard = ({ doc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
      </div>
      <div className="p-4">
        {doc.type === "image" ? (
          <img src={doc.src} alt={doc.title} className="w-full h-auto rounded" />
        ) : (
          <iframe
            title={doc.title}
            src={doc.src}
            className="w-full h-[600px]"
          />
        )}
      </div>
      <div className="px-4 pb-4">
        <a
          href={doc.src}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          View / Download
        </a>
      </div>
    </div>
  );
};

const LegalDocuments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">
            Legal Documents
          </h1>
          <p className="text-gray-600 mt-2">
            Licenses and certificates of the office. Add or replace files as needed.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {docs.map((doc, idx) => (
            <DocCard key={idx} doc={doc} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LegalDocuments;


