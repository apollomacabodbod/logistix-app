import portraitOfManager from "src/assets/testimontials/portrait-of-manager.jpg";
import doubleQuotes from "src/assets/testimontials/double-quotes.svg";
import { motion } from "framer-motion";

export default function TestimontialsCards() {
  return (
    <>
      {" "}
      <div className="grid lg:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[6.181875em] mt-[4em] mb-[6.25em]">
        <motion.div
          className="flex flex-col relative aspect-[521.09/400]  bg-cover  bg-top lg:bg-center"
          style={{ backgroundImage: `url(${portraitOfManager})` }}
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
          <div className="hidden lg:block absolute left-[86.35%] top-[34.25%]">
            <motion.div
              className="flex flex-col bg-[#D42B22] w-[8em] h-[8em] rounded-[8em]"
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
              <div className="flex items-center justify-center my-auto">
                <img
                  src={doubleQuotes}
                  alt=""
                  className="object-cover object-center w-[3em]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/*  */}

        <div className="flex flex-col gap-[4em] ">
          <motion.p
            className="text-[#202E30] font-openSans text-[1.5rem] font-normal"
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
            consequat blandit sit. Ac amet, orci, gravida vulputate hendrerit
            vitae feugiat ultrices. Ornare netus accumsan, felis vitae, mauris
            iaculis semper viverra. Vel sagittis quam sodales sed.
          </motion.p>

          <div className="flex flex-col ">
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
              John Adam
            </motion.p>

            <motion.p
              className="text-[#798283] font-mulish text-[0.875rem] font-bold uppercase"
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
              Founder - Mega international
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
