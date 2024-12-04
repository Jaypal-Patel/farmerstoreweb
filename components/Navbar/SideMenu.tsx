import { openLoginModal } from "@/redux/slices/loginModalSlice";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import OutsideClickHandler from "../../utils/OutsideClickHandler";

const SideMenu = ({ isSidebarOpen, setIsSidebarOpen }: any) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`h-full  w-[100vw] bg-[rgba(0,0,0,0.5)]  fixed top-0 left-0 z-50 `}
    >
      <Transition
        show={isSidebarOpen}
        enter="transition-transform ease-in-out duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        className={`z-40 relative h-[102vh] rounded-br-md overflow-y-auto`}
        leave="transition-transform ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <OutsideClickHandler
          onClick={() => {
            document.body.classList.remove("no-scroll");
            // dispatch(closeSideMenu());
            setIsSidebarOpen(false);
          }}
        >
          <div
            className={`  bg-white overflow-y-auto h-full rounded-br-md  sm:w-[50%] w-[86%] absolute top-0 left-0  z-50  `}
          >
            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 px-body py-body">
              <Link href={"/"} className="text-lg sm:text-xl md:text-2xl font-semibold">
                Home
              </Link>
              <Link href={"/cart"} className="text-lg sm:text-xl md:text-2xl font-semibold">
                My Cart
              </Link>
              <Link
                href={"/login"}
                className="text-lg sm:text-xl md:text-2xl font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSidebarOpen(false);
                  dispatch(openLoginModal());
                }}
              >
                Login/Sign up
              </Link>
              <Link href={"/about"} className="text-lg sm:text-xl md:text-2xl font-semibold"
                onClick={() => {
                  document.body.classList.remove("no-scroll");
                  // dispatch(closeSideMenu());
                  setIsSidebarOpen(false);
                }}
              >
                About
              </Link>
              <Link href={"/#"} className="text-lg sm:text-xl md:text-2xl font-semibold">
                Learn
              </Link>
              <Link href={"/made-2-order"} className="text-lg sm:text-xl md:text-2xl font-semibold"
                 onClick={() => {
                document.body.classList.remove("no-scroll");
                // dispatch(closeSideMenu());
                setIsSidebarOpen(false);
              }}>
                Made 2 Order
              </Link>
              <Link href={"/subscription"} className="text-lg sm:text-xl md:text-2xl font-semibold"
               onClick={() => {
                document.body.classList.remove("no-scroll");
                // dispatch(closeSideMenu());
                setIsSidebarOpen(false);
              }}>
                Subscription
              </Link>
            </div>
          </div>
        </OutsideClickHandler>
      </Transition>
    </div>
  );
};

export default SideMenu;
