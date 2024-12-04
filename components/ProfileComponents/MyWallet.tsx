"use client";
import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import WalletCard from "./WalletCard";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import AddMoneyModal from "./AddMoneymodal";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalletData } from "@/redux/slices/walletSlice";
import { AppDispatch } from "@/redux/store";

const sortByOptions = [
  { id: 1, name: "This Week", unavailable: false },
  { id: 2, name: "This Month", unavailable: false },
];

const MyWallet = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const pathName = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState(sortByOptions[0]);
  const { wallet, transactions, loading, error } = useSelector(
    (state: any) => state.wallet
  );
  const { userInfo } = useSelector((state: any) => state.loginModal);

  useEffect(() => {
    if (userInfo?.id) {
      dispatch(fetchWalletData(userInfo.id));
    }
  }, [userInfo, dispatch]);

  const handleModalClose = async () => {
    setModalOpen(false);
    if (userInfo?.id) {
      dispatch(fetchWalletData(userInfo.id));
    }
  };

  return (
    <div
      className={`h-fit ${
        pathName.includes("my-wallet-page")
          ? "block w-full lg:mb-24 sm:mb-10 mb-8"
          : "sm:block hidden lg:w-[68%] md:w-[68%] w-full"
      }`}
    >
      {pathName.includes("my-wallet-page") && (
        <div
          onClick={() => router.replace("/my-account?tab=my-profile")}
          className="flex items-center gap-2 lg:py-10 py-5 cursor-pointer"
        >
          <FaArrowLeftLong className="md:text-2xl text-xl" />
          <h2 className="text-primary font-bold lg:text-2xl text-xl">
            My Wallet
          </h2>
        </div>
      )}

      <div className="flex flex-col sm:gap-8 gap-4">
        <div className="flex items-center justify-between bg-[#f1fff3] sm:px-8 px-4 sm:py-8 py-4 rounded-md">
          <div className="flex flex-col gap-1">
            <p className="font-semibold lg:text-lg text-base">Wallet Balance</p>
            {loading ? (
              <h1 className="font-bold lg:text-2xl text-xl">Loading...</h1>
            ) : (
              <h1 className="font-bold lg:text-2xl text-xl">
                Rs {wallet?.balance}
              </h1>
            )}
          </div>
          <button
            className="bg-primary text-white font-semibold sm:text-base text-sm sm:px-12 px-6 py-3 rounded-xl"
            onClick={() => setModalOpen(true)}
          >
            Add Money
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <h1 className="font-bold lg:text-xl text-lg">Transaction History</h1>

        <div className="flex justify-between items-center shadow-md rounded-xl w-full md:px-5 px-3 py-3 border border-[#DFDFDF]">
          <div>
            <h2 className="lg:text-lg text-sm font-bold">Wallet History</h2>
          </div>
          <div className="flex md:gap-5 gap-3 items-center">
            <p className="sm:text-sm text-xs font-semibold">Sort By :</p>
            <div className="relative flex items-center rounded-md">
              <div className="relative w-full py-2.5 px-3 rounded-md bg-[#ecf8ed]">
                <Listbox value={sortBy} onChange={setSortBy}>
                  <div>
                    <Listbox.Button
                      className={`w-full font-semibold flex justify-between sm:gap-10 gap-5 items-center text-start lg:text-sm md:text-xs text-sm`}
                    >
                      <span>{sortBy?.name || "Select"}</span>
                      <IoIosArrowDown className={`h-[16px] w-[16px]`} />
                    </Listbox.Button>
                    <Listbox.Options
                      className={`absolute top-[50px] px-3 py-3 rounded-md shadow-xl bg-[#F8FAFC] text-sm flex flex-col gap-2 left-0 z-30 w-full`}
                    >
                      {sortByOptions.map((category) => (
                        <Listbox.Option
                          key={category.id}
                          value={category}
                          as={React.Fragment}
                        >
                          {({ active, selected }) => (
                            <li
                              className={`${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "bg-white text-black"
                              } flex justify-between px-2 py-1 shadow rounded-md`}
                            >
                              <span>{category.name}</span>
                              {selected && <span>✔</span>}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </div>

        <WalletCard />
      </div>

      {isModalOpen && (
        <AddMoneyModal onClose={handleModalClose} userId={userInfo?.id || ""} />
      )}
    </div>
  );
};

export default MyWallet;
