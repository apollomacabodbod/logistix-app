import foodDelivery from "src/assets/covid/food-delivery.jpg";
import border from "src/assets/covid/border.svg";
import learnMore from "src/assets/covid/learn-more.svg";
import deliveryMan from "src/assets/covid/delivery-man.jpg";

import { motion } from "framer-motion";

export default function HomeCovid() {
  return (
    <>
      <div className="flex flex-col  lg:mx-auto   px-[1.25em]  customFour:px-[0em] mt-[6.25em]">
        <div className="customFour:flex customFour:items-center gap-[2.5em]">
          <div className="customFour:flex customFour:items-center gap-[2em] ">
            <motion.img
              src={foodDelivery}
              alt=""
              className="object-cover   object-top customFour:object-center w-full customFour:max-w-[20.970625em] h-[30.305625em]"
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

            <div className="flex flex-col mt-[2em] customFour:mt-[0em]">
              <motion.p
                className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold"
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
                COVID 19
              </motion.p>

              <motion.p
                className="text-[#202E30] font-rajdhani text-[3.1875rem] font-semibold "
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
                Staying ahead of the <br></br>
                <span className="text-[#D42B22] font-rajdhani text-[3.1875rem] font-semibold">
                  {" "}
                  COVID-19
                </span>{" "}
                situation
              </motion.p>

              <motion.img
                src={border}
                alt=""
                className="object-cover object-center  w-[6.25em] mt-[2em]"
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

              <motion.p
                className="text-[#202E30] font-mulish text-[1rem] font-normal mt-[4em]"
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
                Vel sagittis quam sodales sed. Erat porta nunc, amet malesuada
                consequat blandit sitac amet orci gravida vulputate hendrerit
                vitae feugiat ultrices ornare netus accumsan felis vitae iaculis
                semper quam sodales sed. Erat porta nunc, amet malesuada
                consequat hendrerit vitae feugiat ultrices.
              </motion.p>

              <motion.button
                className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] mt-[4em] gap-[1em]"
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
                <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
                  learn more
                </p>

                <img
                  src={learnMore}
                  alt=""
                  className="object-cover object-center w-[0.8125em] "
                />
              </motion.button>
            </div>
          </div>

          <motion.img
            src={deliveryMan}
            alt=""
            className="object-cover object-top  customFour:object-center  w-full customFour:max-w-[27em] h-[40.75em] mt-[2em] customFour:mt-[0em]"
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
      </div>
    </>
  );
}
