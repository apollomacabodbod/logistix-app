import warehouseOrStorage from "src/assets/services/warehouse-or-storage.jpg";
import border from "src/assets/services/border.svg";
import whiteGreaterThan from "src/assets/services/white-greater-than.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesHeroSection() {
  return (
    <>
      <div
        className="flex flex-col relative bg-cover bg-top "
        style={{ backgroundImage: `url(${warehouseOrStorage})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>
        <div className="z-10">
          <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[11.9375em] mb-[7.3125em] gap-[2em]">
            <motion.p
              className="text-[#FFF] font-rajdhani text-[4.5rem] font-semibold "
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
              Our Services
            </motion.p>

            <motion.img
              src={border}
              alt=""
              className="object-cover object-center w-[6.25em] "
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
              <Link
                to={"/"}
                className="text-[#FFF] font-openSans text-[1rem] font-semibold"
              >
                Home
              </Link>

              <img
                src={whiteGreaterThan}
                alt=""
                className="object-cover object-center w-[0.625em]"
              />

              <Link
                to={"/services"}
                className="text-[#FFF] font-openSans text-[1rem] font-semibold"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
