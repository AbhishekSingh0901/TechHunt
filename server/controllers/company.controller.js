import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName, description, website, employees, location } = req.body;
    if (!companyName || !description || !website || !employees || !location) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "Company with the same name already exists",
        success: false,
      });
    }
    if (req.id.role !== "recruiter") {
      return res.status(401).json({
        message: "Only recruiters can register companies",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      description,
      website,
      employees,
      location,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company created successfully",
      company,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies.length) {
      return res
        .status(404)
        .json({ message: "No companies found", success: false });
    }
    return res.status(200).json({ companies, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }
    return res.status(200).json({ company, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const { companyName, description, website, employees, location } = req.body;
    const file = req.file;
    //* coludinary setup

    if (req.id.role !== "recruiter") {
      return res.status(401).json({
        message: "Only recruiters can update company data",
        success: false,
      });
    }
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      {
        name: companyName,
        description,
        website,
        employees,
        location,
      },
      { new: true }
    );
    if (!updatedCompany) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }
    return res
      .status(200)
      .json({
        message: "company updated",
        company: updatedCompany,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};
