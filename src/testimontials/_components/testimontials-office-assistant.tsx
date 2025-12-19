import ImageOne from "src/assets/testimontials/ImageOne.png";
import ImageTwo from "src/assets/testimontials/ImageTwo.png";
import ImageThree from "src/assets/testimontials/ImageThree.png";
import ImageFour from "src/assets/testimontials/ImageFour.png";
import ImageFive from "src/assets/testimontials/ImageFive.png";
import ImageSix from "src/assets/testimontials/ImageSix.png";
import { motion } from "framer-motion";

export default function TestimontialsOfficeAssistant() {
  const data = [
    {
      id: 1,
      name: "Alicia Allen",
      position: "Office Assistant",
      image: ImageOne,
      description:
        "Odio in gravida arcu at nunc vamus condi mentum leo et dignissim rhoncus fentum non ignissim vel magnis ligula porta leo vulputate non laoreet consecteturus.",
    },

    {
      id: 2,
      name: "Jasmine Hunter",
      position: "Office Assistant",
      image: ImageTwo,
      description:
        "Odio in gravida arcu at nunc vamus condi mentum leo et dignissim rhoncus fentum non ignissim vel magnis ligula porta leo vulputate non laoreet consecteturus.",
    },

    {
      id: 3,
      name: "David Price",
      position: "Office Assistant",
      image: ImageThree,
      description:
        "Odio in gravida arcu at nunc vamus condi mentum leo et dignissim rhoncus fentum non ignissim vel magnis ligula porta leo vulputate non laoreet consecteturus.",
    },

    {
      id: 4,
      name: "Sam Hall",
      position: "Office Assistant",
      image: ImageFour,
      description:
        "Odio in gravida arcu at nunc vamus condi mentum leo et dignissim rhoncus fentum non ignissim vel magnis ligula porta leo vulputate non laoreet consecteturus.",
    },

    {
      id: 5,
      name: "Evie Davies",
      position: "Office Assistant",
      image: ImageFive,
      description:
        "Odio in gravida arcu at nunc vamus condi mentum leo et dignissim rhoncus fentum non ignissim vel magnis ligula porta leo vulputate non laoreet consecteturus.",
    },

    {
      id: 6,
      name: "Ben Carter",
      position: "Office Assistant",
      image: ImageSix,
      description:
        "Odio in gravida arcu at nunc vamus condi mentum leo et dignissim rhoncus fentum non ignissim vel magnis ligula porta leo vulputate non laoreet consecteturus.",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[2.5em]">
        {data.map((item) => (
          <div
            className="flex flex-col py-[2em]  lg:p-[2em]  gap-[2em]"
            key={item.id}
          >
            <div className="flex items-center gap-[2em]">
              <motion.img
                src={item.image}
                alt=""
                className="object-cover object-center w-[4em]  rounded-[4em]"
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

              <div className="flex flex-col ">
                <motion.p
                  className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold whitespace-nowrap"
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
                  {item.name}
                </motion.p>

                <motion.p
                  className="text-[#D42B22] font-mulish text-[0.875rem] font-bold uppercase"
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
                  {item.position}
                </motion.p>
              </div>
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
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
}
