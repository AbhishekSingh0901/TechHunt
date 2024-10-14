// src/templates/Template2.jsx
import React from "react";

const Template2 = ({ data, preview }) => {
  if (preview) {
    return (
      <div className="w-full max-w-4xl mx-auto p-10 bg-gray-100 font-sans text-gray-800">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold">Jane Smith</h1>
          <div className="text-right text-sm">
            Email: jane.smith@example.com
            <br />
            Phone: (987) 654-3210
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
            Summary
          </h2>
          <div className="mt-2">
            {/* Summary Content */}Creative and detail-oriented designer with 5+
            years of experience...
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
            Experience
          </h2>
          <div className="mt-2">
            <strong>Design Studio</strong> – Lead Designer (2019 - Present)
            <br />
            - Managed...
            <br />- Collaborated...
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
            Education
          </h2>
          <div className="mt-2">
            <strong>Art Institute</strong> – B.A. in Graphic Design (2015 -
            2019)
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
            Skills
          </h2>
          <div className="mt-2">
            Adobe Photoshop, Illustrator, InDesign, UX/UI Design
          </div>
        </div>
      </div>
    );
  }

  const { name, email, phone, summary, experience, education, skills } = data;

  return (
    <div className="w-full max-w-4xl mx-auto p-10 bg-gray-100 font-sans text-gray-800">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="text-right text-sm">
          Email: {email}
          <br />
          Phone: {phone}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
          Summary
        </h2>
        <div className="mt-2">{summary}</div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
          Experience
        </h2>
        <div className="mt-2">{experience}</div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
          Education
        </h2>
        <div className="mt-2">{education}</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-blue-500 border-b border-blue-500 pb-1 inline-block">
          Skills
        </h2>
        <div className="mt-2">{skills}</div>
      </div>
    </div>
  );
};

export default Template2;
