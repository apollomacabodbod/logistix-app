import { useState } from "react";
import { Link } from "react-router-dom";
import humberger from "src/assets/header/humberger_202E30.svg";
import Sidebar from "./side-bar";
import logoLogistix from "src/assets/header/logo-logistix.png";
import redTelephone from "src/assets/header/red-telephone.svg";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full  transition-all duration-1000 ease-in-out z-40 ${" bg-[#FFF] shadow-lg"}`}
      >
        <div className="flex flex-col  max-w-[1200px] lg:mx-auto  px-[1.25em] py-[1em]">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer ">
              <Link to={"/"} className="flex flex-col  py-[1.0625em] ">
                <img
                  src={logoLogistix}
                  alt=""
                  className="min-w-[12.5em] object-cover object-center"
                />
              </Link>
            </div>

            <div className="lg:flex lg:flex-col hidden">
              <div className="flex items-center gap-[2em]">
                <div className="lg:flex lg:flex-col hidden">
                  <div className="flex items-center  lg:gap-[1.7em] xl:gap-[2em]">
                    <Link
                      to={"/"}
                      className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase"
                    >
                      {" "}
                      HOME
                    </Link>
                    <Link
                      to={"/services"}
                      className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase "
                    >
                      {" "}
                      Services
                    </Link>
                    <Link
                      to={"/vacancies"}
                      className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase "
                    >
                      {""}
                      Shipping
                    </Link>
                    <Link
                      to={"/pricing"}
                      className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase "
                    >
                      {" "}
                      Tracking
                    </Link>
                    <Link
                      to={"/blog"}
                      className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase "
                    >
                      {" "}
                      News
                    </Link>
                    <Link
                      to={"/contact"}
                      className="text-[#202E30] font-rajdhani text-[1.125rem] font-semibold uppercase "
                    >
                      {" "}
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-[1em] ">
                  <div className="flex items-center gap-[1em] cursor-pointer  border border-[#D42B22] py-[0.5em] px-[1em] hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">
                    <img
                      src={redTelephone}
                      alt=""
                      className="object-cover object-center w-[0.8125em]"
                    />

                    <p className="text-[#D42B22] font-rajdhani text-[1rem] font-bold uppercase ">
                      (021) 345-6789
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col lg:hidden cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img
                src={humberger}
                alt=""
                width={23}
                height={0}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
}
