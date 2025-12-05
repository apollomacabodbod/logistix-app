import border from "src/assets/home-why-choose-us/border.svg";

export default function HomeWhyChooseUs() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[6.25em] gap-[2em]">
        <div className="flex flex-col">
          <p className="text-center text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold uppercase">
            WHY CHOOSE US
          </p>

          <p className="text-[#202E30] font-rajdhani text-[3.1875rem] text-center font-semibold">
            Why Our Customers Choose Us!
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={border}
            alt=""
            className="object-cover object-center w-[6.25em]"
          />
        </div>

        <p className="text-[#202E30] font-mulish text-[1rem] font-normal  text-center lg:w-[40.625em] self-center">
          Vel sagittis quam sodales sederat porta nunc amet malesuada consequat
          blandit sitac amet orci gravida vulputate
        </p>
      </div>
    </>
  );
}
