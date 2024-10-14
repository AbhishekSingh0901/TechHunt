// src/templates/Template1.jsx
import React from "react";

const Template1 = ({ data, preview }) => {
  if (preview) {
    // Simplified preview without actual data
    return (
      <div className="w-full max-w-4xl mx-auto p-10 border border-black font-serif text-black">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-lg">
            Email: john.doe@example.com | Phone: (123) 456-7890
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
            Professional Summary
          </h2>
          <p className="mt-2">
            Experienced professional with a strong background in...
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
            Work Experience
          </h2>
          <p className="mt-2">
            <strong>Company ABC</strong> – Software Engineer (2018 - Present)
            <br />
            - Developed...
            <br />- Led...
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
            Education
          </h2>
          <p className="mt-2">
            <strong>University XYZ</strong> – B.Sc. in Computer Science (2014 -
            2018)
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
            Skills
          </h2>
          <p className="mt-2">JavaScript, React, Node.js, CSS, HTML</p>
        </div>
      </div>
    );
  }

  const { name, email, phone, summary, experience, education, skills } = data;

  return (
    <div className="w-full max-w-4xl mx-auto p-10 border border-black font-serif text-black">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg">
          Email: {email} | Phone: {phone}
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
          Professional Summary
        </h2>
        <p className="mt-2">{summary}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
          Work Experience
        </h2>
        <p className="mt-2">{experience}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
          Education
        </h2>
        <p className="mt-2">{education}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
          Skills
        </h2>
        <p className="mt-2">{skills}</p>
      </div>
    </div>
  );
};

export default Template1;
