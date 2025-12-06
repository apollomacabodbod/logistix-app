import tenYears from "src/assets/home-why-choose-us/ten-years.svg";
import experienceTeam from "src/assets/home-why-choose-us/experience-team.svg";
import fastResponse from "src/assets/home-why-choose-us/fast-response.svg";
import { motion } from "framer-motion";

export default function HomeWhyChooseUsCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em] gap-[2.5em]">
        <div className="flex flex-col p-[2em] shadow-lg ">
          <div className="flex items-center justify-center">
            <motion.img
              src={tenYears}
              alt=""
              className="object-cover object-center w-[4em] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            />
          </div>

          <motion.p
            className="text-[#202E30] font-rajdhani text-[2.25rem] font-semibold text-center mt-[0.5em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
              },
            }}
          >
            10 years of experience
          </motion.p>

          <motion.p
            className="text-[#202E30] font-mulish text-[1rem] font-normal text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
              },
            }}
          >
            Lorem ipsum dolor sit amet consec tetuer adi piscing elit aenean com
            modo ligula eget aenean massa cum sociis nato que.
          </motion.p>
        </div>

        <div className="flex flex-col p-[2em] shadow-lg ">
          <div className="flex items-center justify-center ">
            <motion.img
              src={experienceTeam}
              alt=""
              className="object-cover object-center w-[4em] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            />
          </div>

          <motion.p
            className="text-[#202E30] font-rajdhani text-[2.25rem] font-semibold text-center mt-[0.5em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
              },
            }}
          >
            Experience Team
          </motion.p>

          <motion.p
            className="text-[#202E30] font-mulish text-[1rem] font-normal text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
              },
            }}
          >
            Lorem ipsum dolor sit amet consec tetuer adi piscing elit aenean com
            modo ligula eget aenean massa cum sociis nato que.
          </motion.p>
        </div>

        <div className="flex flex-col p-[2em] shadow-lg ">
          <div className="flex items-center justify-center ">
            <motion.img
              src={fastResponse}
              alt=""
              className="object-cover object-center w-[4em] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            />
          </div>

          <motion.p
            className="text-[#202E30] font-rajdhani text-[2.25rem] font-semibold text-center mt-[0.5em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
              },
            }}
          >
            Fast Response
          </motion.p>

          <motion.p
            className="text-[#202E30] font-mulish text-[1rem] font-normal text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
              },
            }}
          >
            Lorem ipsum dolor sit amet consec tetuer adi piscing elit aenean com
            modo ligula eget aenean massa cum sociis nato que.
          </motion.p>
        </div>
      </div>
    </>
  );
}
