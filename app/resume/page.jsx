"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesGiven = [
  {
    num: 1,
    title: "Web Development",
    description: "",
    href: "",
  },
  {
    num: 1,
    title: "Domain managment",
    description: "",
    href: "",
  },
  {
    num: 1,
    title: "Page Refactor and Bugfix",
    description: "",
    href: "",
  },
  {
    num: 2,
    title: "Infrastructure Managment",
    description: "",
    href: "",
  },
  {
    num: 3,
    title: "Cloud integration",
    description: "",
    href: "",
  },
  {
    num: 4,
    title: "Database Setup",
    description: "",
    href: "",
  },
];
function resume() {
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
          {
            servicesGiven.map((item, index) => {
              return(
                <div key={index} className="">
                  <div>
                  <div> {item.num}</div>
                  <Link href={item.href}>
                  <BsArrowDownRight/>
                  </Link>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div
                    className="border-b border-white/20 w-full">
                    </div>
                    </div>
              )
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default resume;
