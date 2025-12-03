import logo from "src/assets/footer/logo.svg";
import facebook from "src/assets/footer/facebook.svg";
import twitter from "src/assets/footer/twitter.svg";
import instagram from "src/assets/footer/instagram.svg";
import linkedIn from "src/assets/footer/linkedIn.svg";
import youtube from "src/assets/footer/youtube.svg";
import border from "src/assets/footer/border.svg";
import subscribeNow from "src/assets/footer/subscribe-now.svg";
import whiteBorder from "src/assets/footer/white-border.svg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="bg-[#023761] pt-[6.25em]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] lg:mx-auto  px-[1.25em] py-[6.25em] gap-[2.5em]">
          <div className="flex flex-col">
            <motion.img
              src={logo}
              alt=""
              className="object-cover object-center w-[12.5em]"
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
              className="text-[#FFF] font-mulish font-normal mt-[2em]"
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
              4200 Hamill Avenue, San Diego, California 92109
            </motion.p>

            <div className="flex flex-col mt-[2em]">
              <motion.p
                className="text-[#FFF] font-rajdhani text-[0.625rem] font-bold uppercase"
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
                Email
              </motion.p>
              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                info@example.com
              </motion.p>
            </div>

            <div className="flex flex-col mt-[1em]">
              <motion.p
                className="text-[#FFF] font-rajdhani text-[0.625rem] font-bold uppercase"
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
                Phone
              </motion.p>
              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                021 3456 789
              </motion.p>
            </div>

            <div className="flex items-center mt-[2em] gap-[2em]">
              <motion.img
                src={facebook}
                alt=""
                className="object-cover object-center w-[0.56175em]"
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

              <motion.img
                src={twitter}
                alt=""
                className="object-cover object-center w-[0.8738125em]"
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

              <motion.img
                src={instagram}
                alt=""
                className="object-cover object-center w-[0.811375em]"
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

              <motion.img
                src={linkedIn}
                alt=""
                className="object-cover object-center w-[0.811375em]"
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

              <motion.img
                src={youtube}
                alt=""
                className="object-cover object-center w-[0.998625em]"
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

          {/* card two */}

          <div className="flex flex-col ">
            <motion.p
              className="text-[#FFF] font-rajdhani text-[1.5625rem] font-semibold"
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
              Company
            </motion.p>

            <motion.img
              src={border}
              alt=""
              className="object-cover object-center w-[3.75em] my-[2em]"
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

            <div className="flex flex-col gap-[0.625em]">
              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                About Us
              </motion.p>

              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                We are hiring
              </motion.p>

              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Affiliate Program
              </motion.p>

              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Business Accounts
              </motion.p>
            </div>
          </div>

          {/* Card Three */}

          <div className="flex flex-col ">
            <motion.p
              className="text-[#FFF] font-rajdhani text-[1.5625rem] font-semibold"
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
              Help
            </motion.p>

            <motion.img
              src={border}
              alt=""
              className="object-cover object-center w-[3.75em] my-[2em]"
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

            <div className="flex flex-col gap-[0.625em]">
              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Email Us
              </motion.p>

              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Help & FAQ
              </motion.p>

              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Make a Return
              </motion.p>

              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Shipping Policy
              </motion.p>
            </div>
          </div>

          {/* Card Four */}

          <div className="flex flex-col ">
            <motion.p
              className="text-[#FFF] font-rajdhani text-[1.5625rem] font-semibold"
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
              Join Our Newsletter
            </motion.p>

            <motion.img
              src={border}
              alt=""
              className="object-cover object-center w-[3.75em] my-[2em]"
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
              className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
              Lorem ipsum dolor sit amet consec tetuer adi piscing elit aenean
              com modo ligula eget dolor aenean.
            </motion.p>

            <motion.input
              type="text"
              className="outline-none p-[1em] mt-[2em]"
              placeholder="Enter your email address"
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

            <motion.button
              className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em] mt-[1em]"
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
              <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold uppercase">
                Subscribe Now
              </p>

              <img
                src={subscribeNow}
                alt=""
                className="object-cover object-center w-[0.8125em]"
              />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(2,55,97)] ">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] py-[2em] ">
          <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-between gap-[1.5em]">
            <div className="flex items-center gap-[1em] justify-center sm:justify-start mt-[1em] order-1 sm:order-2">
              <motion.p
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Terms of Use
              </motion.p>
              <motion.img
                src={whiteBorder}
                alt=""
                className="object-cover object-center w-[0.3125em]"
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
                className="text-[#FFF] font-mulish text-[1rem] font-normal "
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
                Privacy Policy
              </motion.p>
            </div>

            <motion.p
              className="text-[#FFF] font-mulish text-[1rem] font-normal text-center order-2 sm:order-1 "
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
              © Copyright 2025 Logistix
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
