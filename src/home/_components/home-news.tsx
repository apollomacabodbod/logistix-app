import redArrow from "src/assets/news/red-arrow.svg";
import border from "src/assets/news/border.svg";
import courierDriving from "src/assets/news/courier-driving.jpg";
import courierWithParcel from "src/assets/news/courier-with-parcel.jpg";
import warehouseOrStorage from "src/assets/news/warehouse-or-storage.jpg";
import { motion } from "framer-motion";

export default function HomeNews() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] my-[6.25em]">
        <motion.p
          className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold uppercase"
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
          NEWS
        </motion.p>

        <div className="sm:flex sm:items-center sm:justify-between">
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
            Logistix News
          </motion.p>

          <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] gap-[1em] mt-[0.5em] sm:mt-[0em]">
            <motion.p
              className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase"
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
              See all news
            </motion.p>
            <motion.img
              src={redArrow}
              alt=""
              className="object-cover object-center w-[0.75em]"
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
          </button>
        </div>

        <motion.img
          src={border}
          alt=""
          className="object-cover object-center w-[6.25em] mt-[1.5em]"
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

        <div className="md:flex md:items-start md:justify-between md:gap-[2.5em] mt-[4em]">
          <div className="flex flex-col gap-[2em]">
            <motion.img
              src={courierDriving}
              alt=""
              className="object-cover object-center aspect-[681/500]"
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

            <div className="flex flex-col mt-[2em] gap-[1em]">
              <motion.p
                className="text-[#202E30] font-rajdhani text-[2.25rem] font-semibold "
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
                Dis pellentesque fermen arcuat molestie amet nibh at quis.
              </motion.p>

              <motion.p
                className="text-[#202E30] font-openSans text-[0.875rem] italic font-normal "
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
                John Doe - January 15, 2021 - 0 Comments - Healthy
              </motion.p>
            </div>

            <motion.p
              className="text-[#202E30] font-mulish text-[1rem] font-normal "
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
              com modo ligula eget dolor aenean massa cum sociis nato que pena
              tibus et magnis dis parturient montes. Donec enim diam vulputate
              ut pharetra sit. Ultricies mi eget mauris pharetra et ultrices
              neque ornare.{" "}
            </motion.p>
          </div>

          <div className="flex flex-col  gap-[2em]">
            <div className="flex flex-col gap-[1em]">
              <motion.img
                src={courierWithParcel}
                alt=""
                className="object-cover object-center aspect-[475/250]"
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
                className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold"
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
                Convallis eu aenean placerat quam platea venenatis dui interdumv
              </motion.p>

              <motion.p
                className="text-[#202E30] font-openSans text-[0.875rem] font-normal "
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
                John Doe - January 15, 2021 - 0 Comments - Healthy
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.img
                src={warehouseOrStorage}
                alt=""
                className="object-cover object-center aspect-[475/250]"
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
                className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold"
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
                Risus molestie proin quis tempor cras tristique sapien sagittis
                eturpis
              </motion.p>

              <motion.p
                className="text-[#202E30] font-openSans text-[0.875rem] font-normal "
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
                John Doe - January 15, 2021 - 0 Comments - Healthy
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
