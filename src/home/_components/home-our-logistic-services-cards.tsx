import card from "src/assets/our-logistic-services/card.png";
import courierWithParcel from "src/assets/our-logistic-services/courier-with-parcel.jpg";
import croppedShot from "src/assets/our-logistic-services/cropped-shot.jpg";
import deliveryManCourier from "src/assets/our-logistic-services/delivery-man-courier.jpg";
import loadingCargo from "src/assets/our-logistic-services/loading-cargo.jpg";
import semiTruck from "src/assets/our-logistic-services/semi-truck.jpg";
import warehouseOrStorage from "src/assets/our-logistic-services/warehouse-or-storage.jpg";

import learnMoreButton from "src/assets/our-logistic-services/learn-more-button.svg";
import { motion } from "framer-motion";

export default function HomeOurLogisticServicesCards() {
  const data = [
    {
      id: 1,
      image: courierWithParcel,
      title: "Intermodal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },

    {
      id: 2,
      image: croppedShot,
      title: "Dedicated",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },

    {
      id: 3,
      image: deliveryManCourier,
      title: "Truckload",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },

    {
      id: 4,
      image: loadingCargo,
      title: "Final Mile",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },

    {
      id: 5,
      image: semiTruck,
      title: "Fullfillment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },

    {
      id: 6,
      image: warehouseOrStorage,
      title: "LTL",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em]  gap-[2em]">
        {data.map((item) => (
          <div className="flex flex-col " key={item.id}>
            <motion.img
              src={item.image}
              alt=""
              className="object-cover object-center lg:w-[23.25em] h-[14.375em]"
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

            <div className="flex flex-col p-[2em] gap-[1em]">
              <motion.p
                className="text-[#202E30] font-rajdhani text-[2.25rem] font-semibold"
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
                {item.title}
              </motion.p>

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
                {item.description}
              </motion.p>

              <motion.button
                className="flex items-center self-start gap-[0.75em]"
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
                <p className="text-[#FF7900] font-mulish text-[0.875rem] font-bold uppercase">
                  Learn more
                </p>
                <img
                  src={learnMoreButton}
                  alt=""
                  className="object-cover object-center w-[0.875em]"
                />
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
