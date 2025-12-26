import border from "src/assets/our-logistic-services/border.svg";
import { motion } from "framer-motion";

export default function PricingPlan() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[6.25em] gap-[2em]">
        <div className="flex flex-col">
          <motion.p
            className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold uppercase text-center"
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
            Pricing
          </motion.p>

          <motion.p
            className="text-[#202E30] font-rajdhani text-[3.1875rem] font-semibold  text-center"
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
            Pricing Plan
          </motion.p>
        </div>

        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={border}
            alt=""
            className="object-cover object-center w-[6.25em]"
          />
        </motion.div>

        <motion.p
          className="text-[#202E30] font-mulish text-[1rem] font-normal text-center  self-center lg:w-[40.625em]"
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
          Vel sagittis quam sodales sederat porta nunc amet malesuada consequat
          blandit sitac amet orci gravida vulputate
        </motion.p>
      </div>
    </>
  );
}
