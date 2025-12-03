import trackAShipment from "src/assets/home/track-a-shipment.svg";
import trackShipment from "src/assets/home/track-shipment.svg";
import searchSchedules from "src/assets/home/search-schedules.svg";
import ArtboardTwo from "src/assets/home/ArtboardTwo.svg";
import ArtboardThree from "src/assets/home/ArtboardThree.svg";
import bookNow from "src/assets/home/book-now.svg";

export default function HomeHeroSectionCards() {
  return (
    <>
      {" "}
      <div className="grid lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em]  gap-[2.5em] relative top-[3.875em]">
        <div className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]">
          <div className="flex items-center gap-[1em]">
            <img
              src={trackAShipment}
              alt=""
              className="object-cover object-center w-[2em]"
            />

            <p className="text-[#202E30] font-rajdhani text-[1.3rem] font-semibold">
              Track Your Shipment
            </p>
          </div>

          <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
            Vel sagittis quam sodales sederat porta nunc amet malesuada.
          </p>

          <button className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em]">
            <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold uppercase">
              Track a shipment
            </p>
            <img
              src={trackShipment}
              alt=""
              className="object-cover object-center w-[0.625em]"
            />
          </button>
        </div>

        {/*  */}

        <div className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]">
          <div className="flex items-center gap-[1em]">
            <img
              src={ArtboardTwo}
              alt=""
              className="object-cover object-center w-[2em]"
            />

            <p className="text-[#202E30] font-rajdhani text-[1.3rem] font-semibold">
              Search Schedules
            </p>
          </div>

          <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
            Vel sagittis quam sodales sederat porta nunc amet malesuada.
          </p>

          <button className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em]">
            <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold uppercase">
              Search Schedules
            </p>
            <img
              src={searchSchedules}
              alt=""
              className="object-cover object-center w-[0.8125em]"
            />
          </button>
        </div>

        {/*  */}

        <div className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]">
          <div className="flex items-center gap-[1em]">
            <img
              src={ArtboardThree}
              alt=""
              className="object-cover object-center w-[2em]"
            />

            <p className="text-[#202E30] font-rajdhani text-[1.3rem] font-semibold">
              Book Pickup Now
            </p>
          </div>

          <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
            Vel sagittis quam sodales sederat porta nunc amet malesuada.
          </p>

          <button className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em]">
            <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold uppercase">
              Book now
            </p>
            <img
              src={bookNow}
              alt=""
              className="object-cover object-center w-[0.75em]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
