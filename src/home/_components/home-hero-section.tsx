import cheerfulDelivery from "src/assets/home/cheerful-delivery.jpg";
import border from "src/assets/home/border.svg";
import learnMore from "src/assets/home/learn-more.svg";
export default function HomeHeroSection() {
  return (
    <>
      <div
        className="flex flex-col relative bg-cover bg-buttom lg:bg-center"
        style={{ backgroundImage: `url(${cheerfulDelivery})` }}
      >
        <div className="absolute inset-0 bg-[#000,0.3]"></div>

        <div className="z-10">
          <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[9.5em] gap-[2em] mb-[20.5625em]">
            <p className="text-[4.5rem] text-[#FFF] font-rajdhani font-semibold ">
              The First World Class <br /> Logistic Company
            </p>

            <img
              src={border}
              alt=""
              className="object-cover object-center w-[6em] "
            />

            <p className="text-[#FFF] font-mulish text-[1rem] font-normal lg:w-[38.75em]">
              Vel sagittis quam sodales sed. Erat porta nunc, amet malesuada
              consequat blandit sit. Ac amet, orci, gravida vulputate hendrerit
              vitae feugiat ultrices. Ornare netus accumsan, felis vitae, mauris
              iaculis semper viverra.
            </p>

            <button className="flex items-center self-start bg-[#D42B22] py-[1em] px-[2em] gap-[1em]">
              <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold  uppercase">
                Learn more
              </p>

              <img
                src={learnMore}
                alt=""
                className="object-cover object-center min-w-[0.75em]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
