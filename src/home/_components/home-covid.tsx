import foodDelivery from "src/assets/covid/food-delivery.jpg";
import border from "src/assets/covid/border.svg";
import learnMore from "src/assets/covid/learn-more.svg";
import deliveryMan from "src/assets/covid/delivery-man.jpg";

export default function HomeCovid() {
  return (
    <>
      <div className="flex flex-col  lg:mx-auto   px-[1.25em]  customFour:px-[0em] ">
        <div className="customFour:flex customFour:items-center gap-[2.5em]">
          <div className="customFour:flex customFour:items-center gap-[2em] ">
            <img
              src={foodDelivery}
              alt=""
              className="object-cover   object-top customFour:object-center w-full customFour:max-w-[20.970625em] h-[30.305625em]"
            />

            <div className="flex flex-col mt-[2em] customFour:mt-[0em]">
              <p className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold">
                COVID 19
              </p>

              <p className="text-[#202E30] font-rajdhani text-[3.1875rem] font-semibold ">
                Staying ahead of the <br></br>
                <span className="text-[#D42B22] font-rajdhani text-[3.1875rem] font-semibold">
                  {" "}
                  COVID-19
                </span>{" "}
                situation
              </p>

              <img
                src={border}
                alt=""
                className="object-cover object-center  w-[6.25em] mt-[2em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal mt-[4em]">
                Vel sagittis quam sodales sed. Erat porta nunc, amet malesuada
                consequat blandit sitac amet orci gravida vulputate hendrerit
                vitae feugiat ultrices ornare netus accumsan felis vitae iaculis
                semper quam sodales sed. Erat porta nunc, amet malesuada
                consequat hendrerit vitae feugiat ultrices.
              </p>

              <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] mt-[4em] gap-[1em]">
                <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
                  learn more
                </p>

                <img
                  src={learnMore}
                  alt=""
                  className="object-cover object-center w-[0.8125em] "
                />
              </button>
            </div>
          </div>

          <img
            src={deliveryMan}
            alt=""
            className="object-cover object-top  customFour:object-center  w-full customFour:max-w-[27em] h-[40.75em] mt-[2em] customFour:mt-[0em]"
          />
        </div>
      </div>
    </>
  );
}
