"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 1000,
    text: "Code commits",
  },
];
export const Statistics = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 max-w-[80vm] xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1 gap-4 flex items-center justify-center">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length <15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
