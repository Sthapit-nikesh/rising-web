import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

const CompanyProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">
            Company Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Rising Recruitment Pvt. Ltd.
          </p>
        </header>

        <Section title="About Us">
          <p>
            Rising Recruitment Pvt. Ltd. is an integrated human resources
            company, incorporated under the Ministry of Labor, Government of
            Nepal (License No. 878/067/68). We are the outreach vehicle of
            Nepalese people aspiring to work in National & International
            Organizations.
          </p>
          <p>
            Our company is centrally located in the heart of Kathmandu. We are
            headed by a team of highly qualified professionals with many years
            of experience in various aspects of human resources. Our strategy is
            to understand customers’ needs and provide the best solutions that
            serve candidates while meeting client requirements.
          </p>
          <p>
            Our wide network of recruiting centers across remote areas of Nepal
            provides access to a large pool of skilled and unskilled workforce.
            We coach approved candidates to enhance their work knowledge based
            on destination countries and also work with professionals seeking to
            work abroad.
          </p>
          <p>
            Our core values are integrity and transparency—providing clients and
            job seekers a reliable platform to conduct business. Choosing Rising
            Recruitment as your partner ensures a profitable, lasting business
            relationship.
          </p>
        </Section>

        <Section title="Comprehensive Recruitment Services">
          <List
            items={[
              "Executive Search",
              "Assigned Advertising and Selection",
              "Administrative and Support Services",
              "Post selection coordination with selected candidates",
              "Reference checks on selected candidates",
              "Recruitment Campaigns",
              "Manpower Outsourcing",
            ]}
          />
          <p className="pt-2">
            Over the past 12 years, we have built an excellent reputation by
            serving major local and international organizations and placing
            nationals and internationals into both private and government
            sectors.
          </p>
        </Section>

        <Section title="Specialized Sectors / Industries Served">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Administration / Public sector",
              "Construction & Infrastructure",
              "Energy",
              "Healthcare",
              "Hospitality",
              "Logistics",
              "Manufacturing",
              "Oil & Gas",
              "Shipping & Marine",
              "Trading",
            ].map((sector) => (
              <div
                key={sector}
                className="bg-blue-50 text-blue-800 font-medium px-4 py-3 rounded-lg"
              >
                {sector}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Recruitment Services Include">
          <List
            items={[
              "Identifying the requirements and need for the role",
              "Job design",
              "Designing job and person descriptions",
              "Candidate screening",
              "Candidate profiling",
              "Short‑listing applicants",
              "Interviewing",
              "Pre‑employment checks & gathering references",
            ]}
          />
        </Section>

        <Section title="How We Help Your Business">
          <List
            items={[
              "Allocate the right person to the right job",
              "Improve hiring quality and performance",
              "Minimize recruitment process costs",
              "Influence employee retention and maximize return on human capital",
            ]}
          />
        </Section>

        <Section title="HR Consulting">
          <p>
            Being busy is a hallmark of success, but quality should never be
            compromised. We assist businesses that are occupied with core
            operations and need support in non‑revenue functions such as payroll,
            procurement, or logistics. We fill key corporate roles that demand
            enhanced attention.
          </p>
        </Section>

        <Section title="Outsourcing">
          <p>
            “We give you the best, to make you the best.” Whether you need
            front‑line staff, specialists, or seasoned experts across
            industries—we deliver and exceed expectations. We also provide
            payroll management and contractual manpower services.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            What we provide to an employer
          </h3>
          <List
            items={[
              "Reduce costs through superior performance",
              "Access to 12+ years of outsourcing expertise",
              "Compliance with labor law, immigration and government requirements",
              "Improved risk management via working‑visa sponsorship",
              "Verified employee requests and change control in coordination with employers",
            ]}
          />
        </Section>
      </div>
    </motion.div>
  );
};

export default CompanyProfile;


