import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      "Click on 'Sign Up' and register using your email or social accounts like Google or LinkedIn.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "Find a job listing you like and click 'Apply Now' to upload your resume and fill out the application form.",
  },
  {
    question: "Is there a fee to use the platform?",
    answer:
      "No, it's completely free for job seekers. Employers can choose between free or premium listings.",
  },
  {
    question: "How do I post a job opening?",
    answer:
      "Log in to your employer account, click 'Post a Job,' fill in the details, and publish your listing.",
  },
  {
    question: "How can I track my applications?",
    answer:
      "Go to your dashboard and click on 'My Applications' to view the status of each submission.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Click 'Forgot Password' on the login page and follow the instructions to reset your password.",
  },
];

function Faq() {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <motion.h3
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl mt-24 mb-10 font-medium"
      >
        Frequently asked questions ?
      </motion.h3>
      <Accordion type="single" collapsible className="w-full ">
        {faqData.map((faq, idx) => (
          <motion.div
            key={faq.question}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: idx * 0.1 },
            }}
          >
            <AccordionItem value={`item-${idx + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
