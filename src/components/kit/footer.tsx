import logo from "src/assets/footer/logo.svg";
import facebook from "src/assets/footer/facebook.svg";
import twitter from "src/assets/footer/twitter.svg";
import instagram from "src/assets/footer/instagram.svg";
import linkedIn from "src/assets/footer/linkedIn.svg";
import youtube from "src/assets/footer/youtube.svg";
import border from "src/assets/footer/border.svg";
import subscribeNow from "src/assets/footer/subscribe-now.svg";
import whiteBorder from "src/assets/footer/white-border.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#023761] pt-[6.25em]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] lg:mx-auto  px-[1.25em] py-[6.25em] gap-[2.5em]">
          <div className="flex flex-col">
            <img
              src={logo}
              alt=""
              className="object-cover object-center w-[12.5em]"
            />

            <p className="text-[#FFF] font-mulish font-normal mt-[2em]">
              4200 Hamill Avenue, San Diego, California 92109
            </p>

            <div className="flex flex-col mt-[2em]">
              <p className="text-[#FFF] font-rajdhani text-[0.625rem] font-bold uppercase">
                Email
              </p>
              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                info@example.com
              </p>
            </div>

            <div className="flex flex-col mt-[1em]">
              <p className="text-[#FFF] font-rajdhani text-[0.625rem] font-bold uppercase">
                Phone
              </p>
              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                021 3456 789
              </p>
            </div>

            <div className="flex items-center mt-[2em] gap-[2em]">
              <img
                src={facebook}
                alt=""
                className="object-cover object-center w-[0.56175em]"
              />

              <img
                src={twitter}
                alt=""
                className="object-cover object-center w-[0.8738125em]"
              />

              <img
                src={instagram}
                alt=""
                className="object-cover object-center w-[0.811375em]"
              />

              <img
                src={linkedIn}
                alt=""
                className="object-cover object-center w-[0.811375em]"
              />

              <img
                src={youtube}
                alt=""
                className="object-cover object-center w-[0.998625em]"
              />
            </div>
          </div>

          {/* card two */}

          <div className="flex flex-col ">
            <p className="text-[#FFF] font-rajdhani text-[1.5625rem] font-semibold">
              Company
            </p>

            <img
              src={border}
              alt=""
              className="object-cover object-center w-[3.75em] my-[2em]"
            />

            <div className="flex flex-col gap-[0.625em]">
              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                About Us
              </p>

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                We are hiring
              </p>

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Affiliate Program
              </p>

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Business Accounts
              </p>
            </div>
          </div>

          {/* Card Three */}

          <div className="flex flex-col ">
            <p className="text-[#FFF] font-rajdhani text-[1.5625rem] font-semibold">
              Help
            </p>

            <img
              src={border}
              alt=""
              className="object-cover object-center w-[3.75em] my-[2em]"
            />

            <div className="flex flex-col gap-[0.625em]">
              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Email Us
              </p>

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Help & FAQ
              </p>

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Make a Return
              </p>

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Shipping Policy
              </p>
            </div>
          </div>

          {/* Card Four */}

          <div className="flex flex-col ">
            <p className="text-[#FFF] font-rajdhani text-[1.5625rem] font-semibold">
              Join Our Newsletter
            </p>

            <img
              src={border}
              alt=""
              className="object-cover object-center w-[3.75em] my-[2em]"
            />

            <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
              Lorem ipsum dolor sit amet consec tetuer adi piscing elit aenean
              com modo ligula eget dolor aenean.
            </p>

            <input
              type="text"
              className="outline-none p-[1em] mt-[2em]"
              placeholder="Enter your email address"
            />

            <button className="flex items-center justify-center bg-[#D42B22] py-[1em] px-[2em] gap-[1em] mt-[1em]">
              <p className="text-[#FFF] font-rajdhani text-[1rem] font-bold uppercase">
                Subscribe Now
              </p>

              <img
                src={subscribeNow}
                alt=""
                className="object-cover object-center w-[0.8125em]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(2,55,97)] ">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] py-[2em] ">
          <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-between gap-[1.5em]">
            <div className="flex items-center gap-[1em] justify-center sm:justify-start mt-[1em] order-1 sm:order-2">
              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Terms of Use
              </p>
              <img
                src={whiteBorder}
                alt=""
                className="object-cover object-center w-[0.3125em]"
              />

              <p className="text-[#FFF] font-mulish text-[1rem] font-normal ">
                Privacy Policy
              </p>
            </div>

            <p className="text-[#FFF] font-mulish text-[1rem] font-normal text-center order-2 sm:order-1 ">
              © Copyright 2025 Logistix
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
