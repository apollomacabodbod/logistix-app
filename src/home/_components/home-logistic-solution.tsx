import border from "src/assets/logistic-solution/border.svg";
import readMoreButton from "src/assets/logistic-solution/read-more-button.svg";
import warehouseWorkers from "src/assets/logistic-solution/warehouse-workers.jpg";
import workmanOrCourier from "src/assets/logistic-solution/workman-or-courier.jpg";

export default function HomeLogisticSolution() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[10.125em] ">
        <div className="lg:flex lg:items-center  lg:justify-between gap-[2.5em]">
          <div className="flex flex-col gap-[2em]">
            <div className="flex flex-col">
              <p className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold uppercase">
                ABOUT LOGISTIX
              </p>

              <p className="text-[#202E30] font-rajdhani text-[3.1875rem] font-semibold ">
                Logistic Solutions
              </p>
            </div>

            <img
              src={border}
              alt=""
              className="object-cover object-center w-[6.25em]"
            />

            <p className="text-[#202E30] font-mulish text-[1rem] font-normal ">
              Vel sagittis quam sodales sed. Erat porta nunc, amet malesuada
              consequat blandit sit. Ac amet, orci, gravida vulputate hendrerit
              vitae feugiat ultrices. Ornare netus accumsan, felis vitae, mauris
              iaculis semper viverra. <br /> <br />
              Ac amet, orci, gravida vulputate hendrerit vitae feugiat ultrices.
              Ornare netus accumsan, felis vitae, mauris iaculis semper viverra.
            </p>

            <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] gap-[1em]">
              <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
                Read more
              </p>
              <img
                src={readMoreButton}
                alt=""
                className="object-cover object-center"
              />
            </button>
          </div>

          <div className="flex flex-col lg:max-w-[16.8125em] w-full mt-[2em] lg:mt-[0em]">
            <img
              src={warehouseWorkers}
              alt=""
              className="object-cover object-center  h-[31.25em]"
            />
          </div>

          <div className="flex flex-col mt-[2em] lg:mt-[0em] w-full">
            <img
              src={workmanOrCourier}
              alt=""
              className="object-cover object-center  h-[31.25em] "
            />
          </div>
        </div>
      </div>
    </>
  );
}
