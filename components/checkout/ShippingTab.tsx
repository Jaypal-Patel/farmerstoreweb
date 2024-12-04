"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "@/redux/slices/accountSlice";
import CheckoutNewAddress from "./CheckoutNewAddress";
import { RootState, AppDispatch } from "@/redux/store";

interface Address {
  contact_person_name?: string;
  address?: string;
  contact_person_number?: string;
}

function ShippingTab() {
  const dispatch: AppDispatch = useDispatch();
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null); // State to hold the selected address
  const { addresses } = useSelector((state: RootState) => state.accountInfo);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  // const handleAddressSelect = (address: Address) => {
  //   // If the address is already selected, do nothing
  //   if (selectedAddress === address) return;

  //   setSelectedAddress(address); // Update the selected address state
  //   SaveAddressonlocalstorage(address); // Save the selected address
  // };

  // const SaveAddressonlocalstorage = (data: Address) => {
  //   localStorage.setItem("selectedAddress", JSON.stringify(data)); // Save address as a JSON string
  // };

  const handleAddressSelect = (address: Address) => {
    // If the address is already selected, do nothing
    if (selectedAddress === address) return;

    setSelectedAddress(address); // Update the selected address state
    saveAddressToLocalStorage(address); // Save the selected address
  };

  const saveAddressToLocalStorage = (data: Address) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("selectedAddress", JSON.stringify(data)); // Save address as a JSON string
      } catch (error) {
        console.error("Error saving address to localStorage:", error);
      }
    }
  };

  return (
    <div className="flex flex-col mt-2 sm:mt-3 md:mt-4 w-full gap-4 sm:gap-6 md:gap-8">
      <h6 className="font-medium md:text-lg sm:text-base text-sm text-black">
        Enter your Shipping Details
      </h6>
      {!isNewAddress ? (
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {addresses.length > 0 ? (
            addresses.map((address, index) => (
              <div
                key={index}
                className="bg-white rounded-[15px] border border-neutral-200 mt-2 sm:mt-3 md:mt-4 gap-3 sm:gap-4 md:gap-5 flex flex-col md:flex-row justify-between items-start px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6"
              >
                <div className="w-full md:w-[69%] flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                  <p className="text-black md:text-lg sm:text-base text-sm font-bold">
                    Address Details
                  </p>
                  <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                    <p className="text-black md:text-sm sm:text-xs text-[10px] font-semibold">
                      {address.contact_person_name}
                    </p>
                    <p className="text-black md:text-sm sm:text-xs text-[10px] font-semibold">
                      {address.address}
                    </p>
                    <p className="text-black md:text-sm sm:text-xs text-[10px] font-semibold">
                      {address.contact_person_number}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAddress === address} // Check if this address is selected
                    onChange={() => handleAddressSelect(address)} // Handle checkbox click
                    className="mr-2"
                  />
                  {/* <label className="text-primary md:text-sm sm:text-xs text-[10px] font-semibold cursor-pointer">
                    Select
                  </label> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-black">
              No addresses found. Please add a new address.
            </p>
          )}

          {/* if you want to add address here  */}
          {/* <div
            className="bg-primary w-full md:w-[26%] border-2 border-primary text-white py-1 sm:py-2 md:py-3 px-5 sm:px-7 md:px-9 rounded-[10px] hover:bg-white hover:text-black cursor-pointer flex justify-center items-center"
            onClick={(e) => {
              e.stopPropagation(); // Prevents triggering address selection
              setIsNewAddress(true);
            }}
          >
            <p className="md:text-sm sm:text-xs text-[10px] font-semibold">
              Change/ Add Address
            </p>
          </div> */}
        </div>
      ) : (
        <CheckoutNewAddress />
      )}
    </div>
  );
}

export default ShippingTab;
