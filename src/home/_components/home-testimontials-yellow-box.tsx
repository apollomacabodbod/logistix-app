import box from "src/assets/testimontials/box.svg";

export default function HomeTestimontialsYellowBox() {
  return (
    <>
      {" "}
      <div className="flex flex-col ">
        <div className="flex items-center justify-end ">
          <div className="bg-[#FFDF42] w-[6.835625em] h-[7.125em] relative">
            <img
              src={box}
              alt=""
              className="object-cover object-center w-[4.160625em] h-[4.0625em] absolute right-[69.56%] z-9999 top-[21.92%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
