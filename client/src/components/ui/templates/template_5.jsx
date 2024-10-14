// src/templates/Template5.jsx
import React from "react";

const Template5 = ({ data, preview }) => {
  if (preview) {
    return (
      <div className="w-full max-w-3xl mx-auto p-6 border-2 border-gray-800 font-calibri text-gray-800">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Robert Wilson</h1>
          <p className="text-sm">
            Email: robert.wilson@example.com | Phone: (321) 654-0987
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
            Objective
          </h3>
          <p className="mt-2">
            Seeking a challenging position in software development to utilize my
            skills in...
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
            Experience
          </h3>
          <p className="mt-2">
            <strong>Tech Solutions</strong> – Senior Developer (2016 - Present)
            <br />
            - Architected...
            <br />- Mentored...
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
            Education
          </h3>
          <p className="mt-2">
            <strong>Institute of Technology</strong> – B.Tech in Computer
            Science (2010 - 2014)
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
            Skills
          </h3>
          <p className="mt-2">Java, Python, React, AWS, Docker</p>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          Resume created with Your App Name
        </div>
      </div>
    );
  }

  const { name, email, phone, objective, experience, education, skills } = data;

  return (
    <div className="w-full max-w-3xl mx-auto p-6 border-2 border-gray-800 font-calibri text-gray-800">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm">
          Email: {email} | Phone: {phone}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
          Objective
        </h3>
        <p className="mt-2">{objective}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
          Experience
        </h3>
        <p className="mt-2">{experience}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
          Education
        </h3>
        <p className="mt-2">{education}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold border-b border-gray-800 pb-1">
          Skills
        </h3>
        <p className="mt-2">{skills}</p>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        Resume created with Your App Name
      </div>
    </div>
  );
};

export default Template5;
