// src/templates/Template4.jsx
import React from "react";

const Template4 = ({ data, preview }) => {
  if (preview) {
    return (
      <div className="w-full max-w-3xl mx-auto p-8 border-l-4 border-red-500 font-sans text-gray-800">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-red-500">Michael Brown</h1>
          <p className="text-sm text-gray-600">
            Creative Director | Innovator | Leader
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-500 mb-2">About Me</h3>
          <div className="pl-4 border-l-2 border-red-500">
            Passionate about creating impactful designs and leading creative
            teams...
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Projects</h3>
          <div className="pl-4 border-l-2 border-red-500">
            <strong>Project Alpha</strong> – Led the design of...
            <br />
            <strong>Project Beta</strong> – Developed...
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Education</h3>
          <div className="pl-4 border-l-2 border-red-500">
            <strong>Creative Arts College</strong> – B.A. in Design (2012 -
            2016)
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Skills</h3>
          <div className="pl-4 border-l-2 border-red-500">
            Graphic Design, Leadership, Adobe Suite, Branding
          </div>
        </div>
      </div>
    );
  }

  const { name, tagline, about, projects, education, skills } = data;

  return (
    <div className="w-full max-w-3xl mx-auto p-8 border-l-4 border-red-500 font-sans text-gray-800">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-red-500">{name}</h1>
        <p className="text-sm text-gray-600">{tagline}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-red-500 mb-2">About Me</h3>
        <div className="pl-4 border-l-2 border-red-500">{about}</div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-red-500 mb-2">Projects</h3>
        <div className="pl-4 border-l-2 border-red-500">{projects}</div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-red-500 mb-2">Education</h3>
        <div className="pl-4 border-l-2 border-red-500">{education}</div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-red-500 mb-2">Skills</h3>
        <div className="pl-4 border-l-2 border-red-500">{skills}</div>
      </div>
    </div>
  );
};

export default Template4;
