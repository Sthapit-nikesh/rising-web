import React, { useState } from "react";
import { motion } from "framer-motion";

const fieldClass =
  "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

const SectionTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-gray-800 mb-3">{children}</h3>
);

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    experiences: [{ company: "", post: "", country: "", duration: "", remarks: "" }],
  });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // For now, show a JSON preview; replace with API call later
    alert("Submitted Data:\n" + JSON.stringify(formData, null, 2));
  };

  const addExperience = () => {
    setFormData((p) => ({
      ...p,
      experiences: [...(p.experiences || []), { company: "", post: "", country: "", duration: "", remarks: "" }],
    }));
  };

  const updateExperience = (idx, key, value) => {
    setFormData((p) => {
      const next = [...(p.experiences || [])];
      next[idx] = { ...next[idx], [key]: value };
      return { ...p, experiences: next };
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">
            Job Application Form
          </h1>
          <p className="text-gray-600 mt-2">
            Fill in the details below. Fields marked with * are required.
          </p>
        </header>

        <form onSubmit={submit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8">
          {/* Personal Details */}
          <section>
            <SectionTitle>Personal Details</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input name="fullName" required onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Father's Name</label>
                <input name="fatherName" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Permanent Address *</label>
                <input name="permanentAddress" required onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Temporary Address</label>
                <input name="temporaryAddress" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact No. *</label>
                <input name="contact" required onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nationality</label>
                <input name="nationality" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <input type="date" name="dob" onChange={update} className={fieldClass} />
              </div>
            </div>
          </section>

          {/* Passport Details */}
          <section>
            <SectionTitle>Passport Details</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Passport No.</label>
                <input name="passportNo" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Issue</label>
                <input type="date" name="doi" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Expiry</label>
                <input type="date" name="doe" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Place of Issue</label>
                <input name="poi" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Passport Profession</label>
                <input name="passportProfession" onChange={update} className={fieldClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Place of Birth</label>
                <input name="pob" onChange={update} className={fieldClass} />
              </div>
            </div>
          </section>

          {/* Languages Known */}
          <section>
            <SectionTitle>Languages Known</SectionTitle>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left">Language</th>
                    <th className="p-2">Speak</th>
                    <th className="p-2">Read</th>
                    <th className="p-2">Write</th>
                  </tr>
                </thead>
                <tbody>
                  {["English", "Nepali", "Hindi", "Arabic", "Others"].map((lang) => (
                    <tr key={lang} className="border-t">
                      <td className="p-2 font-medium">{lang}</td>
                      {["Speak", "Read", "Write"].map((skill) => (
                        <td key={skill} className="p-2 text-center">
                          <select
                            className="border border-gray-300 rounded px-2 py-1"
                            name={`${lang}-${skill}`}
                            onChange={update}
                          >
                            <option value=""></option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Slight</option>
                          </select>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionTitle>Educational Qualification</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                "S.L.C.",
                "Intermediate",
                "Bachelors",
                "Masters",
                "Other",
              ].map((lvl) => (
                <label key={lvl} className="flex items-center space-x-2">
                  <input type="checkbox" name={`edu-${lvl}`} onChange={update} />
                  <span>{lvl}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <SectionTitle>Work Experience</SectionTitle>
            <div className="grid grid-cols-1 gap-3">
              {(formData.experiences || []).map((exp, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  <input placeholder="Company" className={fieldClass} value={exp.company} onChange={(e)=>updateExperience(idx,'company',e.target.value)} />
                  <input placeholder="Post" className={fieldClass} value={exp.post} onChange={(e)=>updateExperience(idx,'post',e.target.value)} />
                  <input placeholder="Country" className={fieldClass} value={exp.country} onChange={(e)=>updateExperience(idx,'country',e.target.value)} />
                  <input placeholder="Duration" className={fieldClass} value={exp.duration} onChange={(e)=>updateExperience(idx,'duration',e.target.value)} />
                  <input placeholder="Remarks" className={fieldClass} value={exp.remarks} onChange={(e)=>updateExperience(idx,'remarks',e.target.value)} />
                </div>
              ))}
              <button type="button" onClick={addExperience} className="self-start mt-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">Add Experience</button>
            </div>
          </section>

          {/* Training & Technical */}
          <section>
            <SectionTitle>Training & Technical Knowledge (if any)</SectionTitle>
            <textarea rows={4} className={fieldClass} name="training" onChange={update} />
          </section>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-500">
              By submitting, you agree that the information provided is accurate.
            </div>
            <div className="flex gap-3 justify-end">
              <button type="reset" className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">Reset</button>
              <button type="submit" className="btn-primary px-8 py-3 text-lg">Submit Application</button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ApplicationForm;


