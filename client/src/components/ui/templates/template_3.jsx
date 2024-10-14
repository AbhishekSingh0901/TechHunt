// src/templates/Template3.jsx
import React from "react";

const Template3 = ({ data, preview }) => {
  if (preview) {
    return (
      <div className="flex w-full max-w-6xl mx-auto border border-gray-300 font-serif text-gray-800">
        <div className="w-1/4 bg-gray-200 p-8">
          <h1 className="text-2xl font-bold mb-4">Emily Johnson</h1>
          <p className="text-sm mb-2">Email: emily.johnson@example.com</p>
          <p className="text-sm mb-2">Phone: (555) 123-4567</p>
          <p className="text-sm">LinkedIn: linkedin.com/in/emilyjohnson</p>
        </div>
        <div className="w-3/4 p-8">
          <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
            Professional Summary
          </h2>
          <p className="mb-4">
            Dedicated marketing specialist with a passion for digital
            strategies...
          </p>
          <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
            Experience
          </h2>
          <p className="mb-4">
            <strong>Marketing Corp</strong> – Marketing Manager (2017 - Present)
            <br />
            - Developed...
            <br />- Implemented...
          </p>
          <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
            Education
          </h2>
          <p className="mb-4">
            <strong>Business University</strong> – MBA in Marketing (2015 -
            2017)
          </p>
          <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
            Skills
          </h2>
          <p className="mb-4">SEO, SEM, Content Marketing, Data Analysis</p>
        </div>
      </div>
    );
  }

  const {
    name,
    email,
    phone,
    summary,
    experience,
    education,
    skills,
    linkedin,
  } = data;

  return (
    <div className="flex w-full max-w-6xl mx-auto border border-gray-300 font-serif text-gray-800">
      <div className="w-1/4 bg-gray-200 p-8">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <p className="text-sm mb-2">Email: {email}</p>
        <p className="text-sm mb-2">Phone: {phone}</p>
        <p className="text-sm">LinkedIn: {linkedin || "N/A"}</p>
      </div>
      <div className="w-3/4 p-8">
        <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
          Professional Summary
        </h2>
        <p className="mb-4">{summary}</p>
        <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
          Experience
        </h2>
        <p className="mb-4">{experience}</p>
        <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
          Education
        </h2>
        <p className="mb-4">{education}</p>
        <h2 className="text-xl font-semibold border-b border-gray-500 pb-1 mb-4">
          Skills
        </h2>
        <p className="mb-4">{skills}</p>
      </div>
    </div>
  );
};

export default Template3;
