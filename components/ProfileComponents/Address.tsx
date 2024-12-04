"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import AddAddressModal from "./AddAddressModal";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/redux/store";

import {
  fetchAddresses,
  deleteAddress,
  addAddress,
  updateAddress,
  // setDefaultAddress,
} from "@/redux/slices/accountSlice";
import { userExists } from "@/redux/slices/loginModalSlice";

interface Address {
  id: string;
  contact_person_name: string;
  address_type: string;
  contact_person_number: string;
  address: string;
  email?: string;
  isDefault?: boolean;
  default_status?: any;
  // Add any other fields as necessary
}

const Address: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { addresses, status } = useSelector((state: any) => state.accountInfo);
  const loginState = useSelector((state: any) => state.loginModal);

  useEffect(() => {
    dispatch(userExists());
    dispatch(fetchAddresses() as any);
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, dispatch]);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this address?")) {
      dispatch(deleteAddress(id) as any);
    }
  };

  const handleEdit = (address: Address) => {
    setSelectedAddress(address);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAddress(null);
  };
  // const handleSetDefault = (address: Address) => {
  //   dispatch(setDefaultAddress(address.id));
  // };

  return (
    <div
      className={`h-fit ${
        pathName.includes("address-page")
          ? "block w-full lg:mb-24 sm:mb-10 mb-8"
          : "sm:block hidden lg:w-[58%] md:w-[68%] w-full"
      }`}
    >
      {pathName.includes("address-page") && (
        <div
          onClick={() => router.replace("/my-account?tab=my-profile")}
          className="flex items-center gap-2 lg:py-10 py-5 cursor-pointer"
        >
          <FaArrowLeftLong className="md:text-2xl text-xl" />
          <h2 className="text-primary font-bold lg:text-2xl text-xl">
            Address
          </h2>
        </div>
      )}

      <div
        className={`grid w-full md:gap-x-6 gap-x-3 gap-y-6 ${
          pathName.includes("address-page")
            ? "xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            : "sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
        }`}
      >
        {status === "loading" ? (
          <div>Loading addresses...</div>
        ) : addresses?.length > 0 ? (
          addresses.map((address: Address) => (
            <div key={address.id}>
              {/* <div className="flex items-center justify-between py-4 px-5 border-l border-l-[#E0E0E0] border-r border-r-[#E0E0E0] border-t border-t-[#E0E0E0] rounded-tr-2xl rounded-tl-2xl">
                <h2 className="text-base font-bold">
                  {address.default_status === 1 ? "Default Address" : "Address"}
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleEdit(address)}
                    className="h-[36px] w-[36px] border border-[#4B2C10] rounded-full flex justify-center items-center"
                  >
                    <RiEdit2Fill />
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="h-[36px] w-[36px] border border-[#4B2C10] rounded-full flex justify-center items-center"
                  >
                    <RxCross1 className="text-[#D01345] font-bold" />
                  </button>
                  <button
                    onClick={() => handleSetDefault(address)}
                    className={`h-[36px] w-[36px] border rounded-full flex justify-center items-center ${
                      address.default_status === 1
                        ? "bg-primary text-white"
                        : "border-[#4B2C10]"
                    }`}
                  >
                    {address.default_status === 1 ? "✔️" : "Set Default"}
                  </button>
                </div>
              </div> */}
              <div key={address.id}>
                <div className="flex items-center justify-between py-4 px-5 border-l border-l-[#E0E0E0] border-r border-r-[#E0E0E0] border-t border-t-[#E0E0E0] rounded-tr-2xl rounded-tl-2xl">
                  <h2 className="text-base font-bold">
                    {address.isDefault ? "Shipping Address" : "Billing Address"}
                  </h2>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleEdit(address)}
                      className="h-[36px] w-[36px] border border-[#4B2C10] rounded-full flex justify-center items-center"
                    >
                      <RiEdit2Fill />
                    </button>
                    <button
                      onClick={() => handleDelete(address.id)}
                      className="h-[36px] w-[36px] border border-[#4B2C10] rounded-full flex justify-center items-center"
                    >
                      <RxCross1 className="text-[#D01345] font-bold" />
                    </button>
                  </div>
                </div>
                <div className="px-5 py-5 pt-8 border border-[#E0E0E0] flex flex-col gap-5 rounded-bl-2xl rounded-br-2xl relative">
                  {address.default_status == 1 && (
                    <div className="absolute top-0 left-5 text-primary bg-[#dcf2e3] text-xs px-2 py-1">
                      <p>Default Address</p>
                    </div>
                  )}
                  <div>
                    <h2 className="text-base font-semibold">
                      {address.contact_person_name}
                    </h2>
                    <p className="text-[#555555] text-sm font-medium w-[70%] mt-1">
                      {address.address}
                    </p>
                  </div>
                  <div>
                    <div className="flex text-sm items-center gap-1">
                      <h2 className="text-sm font-semibold">Email:</h2>
                      <p className="text-[#555555] font-medium">
                        {loginState?.userInfo?.email}
                      </p>
                    </div>
                    <div className="flex text-sm items-center gap-1">
                      <h2 className="text-sm font-semibold">Call:</h2>
                      <p className="text-[#555555] font-medium">
                        {address.contact_person_number}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No addresses found.</div>
        )}
      </div>

      <button
        className="w-full bg-primary text-sm font-semibold rounded-2xl text-white md:py-4 py-2.5 sm:mt-10 mt-5"
        onClick={() => setModalOpen(true)}
      >
        + Add New Address
      </button>

      {isModalOpen && (
        <AddAddressModal
          onClose={handleCloseModal}
          address={selectedAddress} // Make sure this is an Address type
          onSave={(data) => {
            if (selectedAddress) {
              // Ensure selectedAddress.id is available
              dispatch(
                updateAddress({
                  id: selectedAddress.id,
                  addressData: { ...data, id: selectedAddress.id },
                }) // Pass the id here
              );
            } else {
              dispatch(addAddress(data));
            }
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
};

export default Address;
