"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesGiven = [
  {
    num: 1,
    title: "Custom Website Development",
    description:
      "Creating modern and fully functional websites tailored to your business needs. Includes backend and frontend development, domain setup, and deployment.",
    href: "",
  },
  {
    num: 2,
    title: "Web Application Development",
    description:
      "Building dynamic and scalable web applications with complex functionalities, database integration, and business logic processing to support interactive user experiences.",
    href: "",
  },
  {
    num: 3,
    title: "Website Moderations",
    description:
      "Enhancing existing websites by adding new features, modifing existing ones and improving code structure to ensure fast loading times and security.",
    href: "",
  },
  {
    num: 4,
    title: "Domain Management and Hosting",
    description:
      "Handling domain registration, configuration, and hosting to ensure a secure and stable online presence for your business.",
    href: "",
  },
  {
    num: 5,
    title: "Application and Website Migration",
    description:
      "Seamlessly transferring websites and applications to new domains or servers with minimal downtime and no impact on SEO rankings.",
    href: "",
  },
  {
    num: 6,
    title: "Infrastructure Development and Optimizations",
    description:
      "Designing, scaling, and optimizing IT infrastructure, including server architecture, cloud solutions, and performance tuning to support growing business demands.",
    href: "",
  },
  {
    num: 7,
    title: "Mobile App Development",
    description:
      "Developing native and cross-platform mobile applications for Android and iOS, ensuring smooth performance and seamless user experience.",
    href: "",
  },
  {
    num: 8,
    title: "AI Integration for Applications",
    description:
      "Implementing artificial intelligence to automate processes, analyze data, and enhance user experiences in web and mobile applications.",
    href: "",
  },
  {
    num: 9,
    title: "Database Development and SQL Optimization",
    description:
      "Designing and optimizing database structures, writing efficient SQL queries, and improving database performance for fast and reliable applications.",
    href: "",
  }
]

function offert() {
  return (
    <section className="">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className=" max-w-2xl mx-auto sm:text-center">
                <div className>
                    <h1 className="text-3xl text-white/90 font-semibold sm:text-4xl">
                        Services I Provide
                    </h1>
                    <p className="mt-3 text-xl text-white/70">
                      If you dont see what you need, feel free to contact me and ask for a custom service.
                    </p>
                </div>
                <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px] gradient-bg"></div>
            </div>
            <div className="relative mt-12">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        servicesGiven.map((item, idx) => (
                            <li key={idx} className="bg-[#27272c] space-y-3 p-4 rounded-lg">
                                <div className="text-indigo-900 px-3">
                                    {/* {item.icon} */}
                              
                                <h3 className="text-lg text-white/90 font-semibold pb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/60">
                                    {item.description}
                                </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
)
}

export default offert;
