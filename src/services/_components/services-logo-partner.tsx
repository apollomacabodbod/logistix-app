import imageOne from "src/assets/logo-partner/imageOne.svg";
import imageTwo from "src/assets/logo-partner/imageTwo.svg";
import imageThree from "src/assets/logo-partner/imageThree.svg";
import imageFour from "src/assets/logo-partner/imageFour.svg";
import imageFive from "src/assets/logo-partner/imageFive.svg";
import { motion } from "framer-motion";

export default function ServicesLogoPartner() {
  return (
    <>
      <div className="grid sm:grid-cols-5 max-w-[1200px] lg:mx-auto  px-[1.25em] my-[5em]">
        <div className="flex flex-col ">
          <motion.div
            className="max-sm:flex max-sm:items-center max-sm:justify-center"
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
              src={imageOne}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col">
          <motion.div
            className="max-sm:flex max-sm:items-center max-sm:justify-center"
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
            {" "}
            <img
              src={imageTwo}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col">
          <motion.div
            className="max-sm:flex max-sm:items-center max-sm:justify-center"
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
            {" "}
            <img
              src={imageThree}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col">
          <motion.div
            className="max-sm:flex max-sm:items-center max-sm:justify-center"
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
            {" "}
            <img
              src={imageFour}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col">
          <motion.div
            className="max-sm:flex max-sm:items-center max-sm:justify-center"
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
            {" "}
            <img
              src={imageFive}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
