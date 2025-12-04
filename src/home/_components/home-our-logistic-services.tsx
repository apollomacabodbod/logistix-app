import border from "src/assets/our-logistic-services/border.svg";

export default function HomeOurLogisticServices() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[6.25em] gap-[2em]">
        <div className="flex flex-col">
          <p className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold uppercase text-center">
            Services
          </p>

          <p className="text-[#202E30] font-rajdhani text-[3.1875rem] font-semibold  text-center">
            Our Logistic Services
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={border}
            alt=""
            className="object-cover object-center w-[6.25em]"
          />
        </div>

        <p className="text-[#202E30] font-mulish text-[1rem] font-normal text-center  self-center lg:w-[40.625em]">
          Vel sagittis quam sodales sederat porta nunc amet malesuada consequat
          blandit sitac amet orci gravida vulputate
        </p>
      </div>
    </>
  );
}
