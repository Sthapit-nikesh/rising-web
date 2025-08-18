import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About"; 
import Contact from "./components/contact"; 
import CompanyProfile from "./components/CompanyProfile";
import RequiredDocuments from "./components/RequiredDocuments";
import ApplicationForm from "./components/ApplicationForm";
import LegalDocuments from "./components/LegalDocuments";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/required-documents" element={<RequiredDocuments />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/legal-documents" element={<LegalDocuments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;