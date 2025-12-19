import box from "src/assets/testimontials/box.svg";
import { motion } from "framer-motion";

export default function TestimontialsYellowBox() {
  return (
    <>
      {" "}
      <div className="flex flex-col ">
        <div className="flex items-center justify-end ">
          <motion.div
            className="bg-[#FFDF42] w-[6.835625em] h-[7.125em] relative"
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
            <motion.img
              src={box}
              alt=""
              className="object-cover object-center w-[4.160625em] h-[4.0625em] absolute right-[69.56%] z-9999 top-[21.92%]"
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
