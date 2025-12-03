import trackAShipment from "src/assets/home/track-a-shipment.svg";
import trackShipment from "src/assets/home/track-shipment.svg";
import searchSchedules from "src/assets/home/search-schedules.svg";
import ArtboardTwo from "src/assets/home/ArtboardTwo.svg";
import ArtboardThree from "src/assets/home/ArtboardThree.svg";
import bookNow from "src/assets/home/book-now.svg";
import { motion } from "framer-motion";

export default function HomeHeroSectionCards() {
  return (
    <>
      {" "}
      <div className="grid lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em]  gap-[2.5em] relative top-[3.875em]">
        <motion.div
          className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]"
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
          <div className="flex items-center gap-[1em]">
            <motion.img
              src={trackAShipment}
              alt=""
              className="object-cover object-center w-[2em]"
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
              className="text-[#202E30] font-rajdhani text-[1.3rem] font-semibold"
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
              Track Your Shipment
            </motion.p>
          </div>

          <motion.p
            className="text-[#202E30] font-mulish text-[1rem] font-normal"
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
            Vel sagittis quam sodales sederat porta nunc amet malesuada.
          </motion.p>

          <motion.button
            className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em]"
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
              Track a shipment
            </p>
            <img
              src={trackShipment}
              alt=""
              className="object-cover object-center w-[0.625em]"
            />
          </motion.button>
        </motion.div>

        {/*  */}

        <motion.div
          className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]"
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
          <div className="flex items-center gap-[1em]">
            <motion.img
              src={ArtboardTwo}
              alt=""
              className="object-cover object-center w-[2em]"
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
              className="text-[#202E30] font-rajdhani text-[1.3rem] font-semibold"
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
              Search Schedules
            </motion.p>
          </div>

          <motion.p
            className="text-[#202E30] font-mulish text-[1rem] font-normal"
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
            Vel sagittis quam sodales sederat porta nunc amet malesuada.
          </motion.p>

          <motion.button
            className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em]"
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
              Search Schedules
            </p>
            <img
              src={searchSchedules}
              alt=""
              className="object-cover object-center w-[0.8125em]"
            />
          </motion.button>
        </motion.div>

        {/*  */}

        <motion.div
          className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]"
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
          <div className="flex items-center gap-[1em]">
            <motion.img
              src={ArtboardThree}
              alt=""
              className="object-cover object-center w-[2em]"
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
              className="text-[#202E30] font-rajdhani text-[1.3rem] font-semibold"
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
              Book Pickup Now
            </motion.p>
          </div>

          <motion.p
            className="text-[#202E30] font-mulish text-[1rem] font-normal"
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
            Vel sagittis quam sodales sederat porta nunc amet malesuada.
          </motion.p>

          <motion.button
            className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em]"
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
              Book now
            </p>
            <img
              src={bookNow}
              alt=""
              className="object-cover object-center w-[0.75em]"
            />
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
