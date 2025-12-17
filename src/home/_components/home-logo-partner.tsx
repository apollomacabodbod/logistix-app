import imageOne from "src/assets/logo-partner/imageOne.svg";
import imageTwo from "src/assets/logo-partner/imageTwo.svg";
import imageThree from "src/assets/logo-partner/imageThree.svg";
import imageFour from "src/assets/logo-partner/imageFour.svg";
import imageFive from "src/assets/logo-partner/imageFive.svg";

export default function HomeLogoPartner() {
  return (
    <>
      <div className="grid sm:grid-cols-5 max-w-[1200px] lg:mx-auto  px-[1.25em] my-[5em]">
        <div className="flex flex-col ">
          <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
            <img
              src={imageOne}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
            {" "}
            <img
              src={imageTwo}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
            {" "}
            <img
              src={imageThree}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
            {" "}
            <img
              src={imageFour}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
            {" "}
            <img
              src={imageFive}
              alt=""
              className="object-cover object-center w-[11.0625em]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
