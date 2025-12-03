import cheerfulDelivery from "src/assets/home/cheerful-delivery.jpg";
import border from "src/assets/home/border.svg";
import learnMore from "src/assets/home/learn-more.svg";
import HomeHeroSectionCards from "./home-hero-section-cards";
import { motion } from "framer-motion";

export default function HomeHeroSection() {
  return (
    <>
      <div
        className="flex flex-col relative bg-cover bg-buttom lg:bg-center"
        style={{ backgroundImage: `url(${cheerfulDelivery})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-10">
          <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em]  gap-[2em] mb-[10em] mt-[10em]">
            <motion.p
              className="text-[4.5rem] text-[#FFF] font-rajdhani font-semibold "
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
              The First World Class <br /> Logistic Company
            </motion.p>

            <motion.img
              src={border}
              alt=""
              className="object-cover object-center w-[6em] "
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
              className="text-[#FFF] font-mulish text-[1rem] font-normal lg:w-[38.75em]"
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
              iaculis semper viverra.
            </motion.p>

            <motion.button
              className="flex items-center self-start bg-[#D42B22] py-[1em] px-[2em] gap-[1em]"
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
              <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold  uppercase">
                Learn more
              </p>

              <img
                src={learnMore}
                alt=""
                className="object-cover object-center min-w-[0.75em]"
              />
            </motion.button>
          </div>
        </div>

        {/*  */}

        <div className="">
          <HomeHeroSectionCards />
        </div>
      </div>
    </>
  );
}
