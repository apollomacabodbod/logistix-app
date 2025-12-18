import redArrow from "src/assets/news/red-arrow.svg";
import border from "src/assets/news/border.svg";
import courierDriving from "src/assets/news/courier-driving.jpg";
import courierWithParcel from "src/assets/news/courier-with-parcel.jpg";
import warehouseOrStorage from "src/assets/news/warehouse-or-storage.jpg";

export default function HomeNews() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] my-[6.25em]">
        <p className="text-[#FF7900] font-rajdhani text-[1.125rem] font-semibold uppercase">
          NEWS
        </p>

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-[#202E30] font-rajdhani text-[3.1875rem] font-semibold ">
            Logistix News
          </p>

          <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] gap-[1em] mt-[0.5em] sm:mt-[0em]">
            <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
              See all news
            </p>
            <img
              src={redArrow}
              alt=""
              className="object-cover object-center w-[0.75em]"
            />
          </button>
        </div>

        <img
          src={border}
          alt=""
          className="object-cover object-center w-[6.25em] mt-[1.5em]"
        />

        <div className="md:flex md:items-start md:justify-between md:gap-[2.5em] mt-[4em]">
          <div className="flex flex-col gap-[2em]">
            <img
              src={courierDriving}
              alt=""
              className="object-cover object-center aspect-[681/500]"
            />

            <div className="flex flex-col mt-[2em] gap-[1em]">
              <p className="text-[#202E30] font-rajdhani text-[2.25rem] font-semibold ">
                Dis pellentesque fermen arcuat molestie amet nibh at quis.
              </p>

              <p className="text-[#202E30] font-openSans text-[0.875rem] italic font-normal ">
                John Doe - January 15, 2021 - 0 Comments - Healthy
              </p>
            </div>

            <p className="text-[#202E30] font-mulish text-[1rem] font-normal ">
              Lorem ipsum dolor sit amet consec tetuer adi piscing elit aenean
              com modo ligula eget dolor aenean massa cum sociis nato que pena
              tibus et magnis dis parturient montes. Donec enim diam vulputate
              ut pharetra sit. Ultricies mi eget mauris pharetra et ultrices
              neque ornare.{" "}
            </p>
          </div>

          <div className="flex flex-col  gap-[2em]">
            <div className="flex flex-col gap-[1em]">
              <img
                src={courierWithParcel}
                alt=""
                className="object-cover object-center aspect-[475/250]"
              />

              <p className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold">
                Convallis eu aenean placerat quam platea venenatis dui interdumv
              </p>

              <p className="text-[#202E30] font-openSans text-[0.875rem] font-normal ">
                John Doe - January 15, 2021 - 0 Comments - Healthy
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <img
                src={warehouseOrStorage}
                alt=""
                className="object-cover object-center aspect-[475/250]"
              />

              <p className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold">
                Risus molestie proin quis tempor cras tristique sapien sagittis
                eturpis
              </p>

              <p className="text-[#202E30] font-openSans text-[0.875rem] font-normal ">
                John Doe - January 15, 2021 - 0 Comments - Healthy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
