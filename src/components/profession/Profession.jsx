import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I create intuitive and meaningful user experiences by analyzing user needs, conducting research, and developing wireframes and prototypes that improve usability and satisfaction.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I design clean, visually consistent interfaces with a strong focus on layout, color systems, and typography to deliver smooth and engaging user interactions.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I develop responsive, scalable, and high-performance web applications using modern technologies, with an emphasis on accessibility, reliability, and maintainable code.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing and developing robust web applications,
            intelligent automation workflows, and engaging user interfaces that
            enhance efficiency and user satisfaction.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach blends creative thinking with strong technical expertise
            to deliver solutions that are both visually engaging and highly
            functional.
          </p>
        </div>
        <a
          href="mailto:ashrafnadeem118@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
