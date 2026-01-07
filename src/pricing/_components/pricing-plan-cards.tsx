import orangeCheck from "src/assets/pricing-plan-cards/orange-check.svg";
import blackBorder from "src/assets/pricing-plan-cards/black-border.svg";
import redTelephone from "src/assets/pricing-plan-cards/red-telephone.svg";
import whiteTelephone from "src/assets/pricing-plan-cards/white-telephone.svg";
import grayBorder from "src/assets/pricing-plan-cards/gray-border.svg";
import { motion } from "framer-motion";

export default function PricingPlanCards() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em]">
        <div className="flex flex-col py-[2em] px-[4em] gap-[4em]">
          <div className="flex flex-col gap-[2em]">
            <motion.p
              className="text-[#D42B22] font-rajdhani text-[2.25rem] font-semibold text-center"
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
              Basic
            </motion.p>

            <div className="flex items-start justify-center">
              <motion.p
                className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold "
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
                $
              </motion.p>

              <div className="flex flex-col">
                <motion.div
                  className="flex items-center"
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
                  <p className="text-[#202E30] text-[3.1875rem] font-semibold ">
                    50
                  </p>
                  <p className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase">
                    /Packages
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col gap-[1em]">
            <motion.div
              className="flex items-center gap-[1em] "
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Sagittis quam sodales{" "}
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Adipiscing vitae metus ut
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Risus ac sit non at nam dolor
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Donec etiam euismod eu
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={blackBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Varius accumsan ornare
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={blackBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Faucibus viverra facilisi.
              </p>
            </motion.div>
          </div>

          {/*  */}

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
            <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] gap-[1em] ">
              <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
                Select plan
              </p>
              <img
                src={redTelephone}
                alt=""
                className="object-cover object-center min-w-[0.8125em]"
              />
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col py-[2em] px-[4em] gap-[4em] bg-[#023761] border border-[#0353A4]">
          <div className="flex flex-col gap-[2em]">
            <motion.p
              className=" font-rajdhani text-[2.25rem] font-semibold  text-[#FFF] text-center"
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
              Pro
            </motion.p>

            <motion.div
              className="flex items-start justify-center"
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
              <p className=" font-rajdhani text-[1.5625rem] font-semibold text-[#FFF]">
                $
              </p>

              <div className="flex flex-col">
                <div className="flex items-center ">
                  <p className="text-[#FFF] text-[3.1875rem] font-semibold ">
                    75
                  </p>
                  <p className="text-[#FFF] font-rajdhani text-[1.125rem] font-semibold uppercase">
                    /Packages
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/*  */}

          <div className="flex flex-col gap-[1em]">
            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal">
                Sagittis quam sodales{" "}
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal">
                Adipiscing vitae metus ut
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal">
                Risus ac sit non at nam dolor
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal">
                Donec etiam euismod eu
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={grayBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal">
                Varius accumsan ornare
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={grayBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal">
                Faucibus viverra facilisi.
              </p>
            </motion.div>
          </div>

          {/*  */}

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
            <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] gap-[1em] bg-[#D42B22]">
              <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold uppercase">
                Select plan
              </p>
              <img
                src={whiteTelephone}
                alt=""
                className="object-cover object-center min-w-[0.8125em]"
              />
            </button>
          </motion.div>
        </div>
        {/*  */}

        <div className="flex flex-col py-[2em] px-[4em] gap-[4em]">
          <div className="flex flex-col gap-[2em]">
            <motion.p
              className="text-[#D42B22] font-rajdhani text-[2.25rem] font-semibold text-center"
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
              Enterprise
            </motion.p>

            <div className="flex items-start justify-center">
              <motion.p
                className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold "
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
                $
              </motion.p>

              <motion.div
                className="flex flex-col"
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
                <div className="flex items-center">
                  <p className="text-[#202E30] text-[3.1875rem] font-semibold ">
                    175
                  </p>
                  <p className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase">
                    /Packages
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col gap-[1em]">
            <motion.div
              className="flex items-center gap-[1em] "
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Sagittis quam sodales{" "}
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Adipiscing vitae metus ut
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Risus ac sit non at nam dolor
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Donec etiam euismod eu
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={blackBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Varius accumsan ornare
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-[1em]"
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
                src={blackBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Faucibus viverra facilisi.
              </p>
            </motion.div>
          </div>

          {/*  */}

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
            <button className="flex items-center self-start  border border-[#D42B22] py-[1em] px-[2em] gap-[1em] ">
              <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
                Select plan
              </p>
              <img
                src={redTelephone}
                alt=""
                className="object-cover object-center min-w-[0.8125em]"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
