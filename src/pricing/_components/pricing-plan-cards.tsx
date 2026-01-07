import orangeCheck from "src/assets/pricing-plan-cards/orange-check.svg";
import blackBorder from "src/assets/pricing-plan-cards/black-border.svg";
import redTelephone from "src/assets/pricing-plan-cards/red-telephone.svg";

export default function PricingPlanCards() {
  return (
    <>
      <div className="grid grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em]">
        <div className="flex flex-col py-[2em] px-[4em] gap-[4em]">
          <div className="flex flex-col gap-[2em]">
            <p className="text-[#D42B22] font-rajdhani text-[2.25rem] font-semibold ">
              Basic
            </p>

            <div className="flex items-start">
              <p className="text-[#202E30] font-rajdhani text-[1.5625rem] font-semibold ">
                $
              </p>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <p className="text-[#202E30] text-[3.1875rem] font-semibold ">
                    50
                  </p>
                  <p className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase">
                    /Packages
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col gap-[1em]">
            <div className="flex items-center gap-[1em]">
              <img
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Sagittis quam sodales{" "}
              </p>
            </div>

            <div className="flex items-center gap-[1em]">
              <img
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Adipiscing vitae metus ut
              </p>
            </div>

            <div className="flex items-center gap-[1em]">
              <img
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Risus ac sit non at nam dolor
              </p>
            </div>

            <div className="flex items-center gap-[1em]">
              <img
                src={orangeCheck}
                alt=""
                className="object-cover object-center min-w-[1.5em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Donec etiam euismod eu
              </p>
            </div>

            <div className="flex items-center gap-[1em]">
              <img
                src={blackBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Varius accumsan ornare
              </p>
            </div>

            <div className="flex items-center gap-[1em]">
              <img
                src={blackBorder}
                alt=""
                className="object-cover object-center min-w-[1.3125em]"
              />

              <p className="text-[#202E30] font-mulish text-[1rem] font-normal">
                Faucibus viverra facilisi.
              </p>
            </div>
          </div>

          {/*  */}

          <button className="flex items-center self-start border border-[#D42B22] py-[1em] px-[2em] gap-[1em] ">
            <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase">
              Select plan
            </p>
            <img
              src={redTelephone}
              alt=""
              className="object-cover object-center min-w-[0.8125em]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
