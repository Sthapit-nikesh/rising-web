import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <div className="text-gray-700 space-y-2">{children}</div>
  </div>
);

const Bullet = ({ items }) => (
  <ul className="list-disc pl-6 space-y-1">
    {items.map((i, k) => (
      <li key={k}>{i}</li>
    ))}
  </ul>
);

const RequiredDocuments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">
            Required Documents
          </h1>
          <p className="text-gray-600 mt-2">
            All applicants must bring original documents and one set of copies
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="For Skilled / Professional Candidates">
            <Bullet
              items={[
                "Updated CV/Resume",
                "Passport (valid for at least 6 months)",
                "Recent passport-size photographs",
                "Academic certificates and transcripts",
                "Experience letters / Employment certificates",
                "Professional licenses (if applicable)",
                "Training certificates",
                "Police clearance (if required by destination)",
              ]}
            />
          </Card>

          <Card title="For Semi‑skilled / Unskilled Candidates">
            <Bullet
              items={[
                "Passport (valid for at least 6 months)",
                "Recent passport-size photographs",
                "Citizenship/National ID copy",
                "Basic schooling/skill certificates (if any)",
                "Work experience details (if any)",
              ]}
            />
          </Card>

          <Card title="For Employers (Demand Documents)">
            <Bullet
              items={[
                "Demand Letter",
                "Power of Attorney",
                "Employment Contract",
                "Guarantee Letter / Agency Agreement",
                "Consulate/Welfare attestation (as per destination)",
              ]}
            />
          </Card>

          <Card title="Medical & Immigration">
            <Bullet
              items={[
                "Pre‑employment medical fitness report",
                "Vaccination/health requirements as per country",
                "Visa & immigration documents (as advised)",
              ]}
            />
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default RequiredDocuments;


