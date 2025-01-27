"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesGiven = [
  {
    num: 8,
    title: "Web Page Design and Development",
    description:
      "Creation of visually appealing and user-friendly web pages using HTML, CSS, and JavaScript. Customization of designs and layouts to match your brand identity.",
    href: "",
  },
  {
    num: 9,
    title: "Responsive Web Design",
    description:
      "Development of mobile-friendly and responsive web pages that adapt to different screen sizes and devices, ensuring a seamless user experience across all platforms.",
    href: "",
  },
  {
    num: 10,
    title: "E-commerce Web Development",
    description:
      "Design and development of e-commerce websites with integrated payment gateways, product management systems, and secure checkout processes.",
    href: "",
  },
  {
    num: 11,
    title: "Content Management Systems (CMS)",
    description:
      "Implementation of CMS platforms such as WordPress, Drupal, or Joomla to provide easy content management and updates for your website.",
    href: "",
  },
  {
    num: 12,
    title: "Search Engine Optimization (SEO)",
    description:
      "Optimization of your website for search engines to improve visibility and organic search rankings, driving more traffic to your website.",
    href: "",
  },
  {
    num: 13,
    title: "Web Analytics and Reporting",
    description:
      "Setup and analysis of web analytics tools to track website performance, user behavior, and conversion rates, providing valuable insights for business decisions.",
    href: "",
  },
  {
    num: 14,
    title: "Website Maintenance and Support",
    description:
      "Ongoing maintenance and support to ensure your website remains secure, up-to-date, and running smoothly, including bug fixes and performance improvements.",
    href: "",
  },
];
function offert() {
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {servicesGiven.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex-1 flex flex-col justify-center group gap-6"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {" "}
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                    hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="font-semibold text-[30px] leading-none group-hover:text-accent transition-all duration-500">{item.title}</h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default offert;
