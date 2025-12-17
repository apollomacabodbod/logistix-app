import portraitOfManager from "src/assets/testimontials/portrait-of-manager.jpg";
import doubleQuotes from "src/assets/testimontials/double-quotes.svg";
export default function HomeTestimontialsCards() {
  return (
    <>
      <div className="grid lg:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[6.181875em] mt-[4em]">
        <div
          className="flex flex-col relative aspect-[521.09/400]  bg-cover  bg-top lg:bg-center"
          style={{ backgroundImage: `url(${portraitOfManager})` }}
        >
          <div className="hidden lg:block absolute left-[86.35%] top-[34.25%]">
            <div className="flex flex-col bg-[#D42B22] w-[8em] h-[8em] rounded-[8em]">
              <div className="flex items-center justify-center my-auto">
                <img
                  src={doubleQuotes}
                  alt=""
                  className="object-cover object-center w-[3em]"
                />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col gap-[4em] ">
          <p className="text-[#202E30] font-openSans text-[1.5rem] font-normal">
            Vel sagittis quam sodales sed. Erat porta nunc, amet malesuada
            consequat blandit sit. Ac amet, orci, gravida vulputate hendrerit
            vitae feugiat ultrices. Ornare netus accumsan, felis vitae, mauris
            iaculis semper viverra. Vel sagittis quam sodales sed.
          </p>

          <div className="flex flex-col ">
            <p className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold">
              John Adam
            </p>

            <p className="text-[#798283] font-mulish text-[0.875rem] font-bold uppercase">
              Founder - Mega international
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
