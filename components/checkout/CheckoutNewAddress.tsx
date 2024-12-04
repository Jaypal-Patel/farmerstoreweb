// // new
// import { Fragment } from "react";
// import { Listbox, Transition } from "@headlessui/react";

// import { useQuery } from "@tanstack/react-query";

// function CheckoutNewAddress() {

//   return (
//     <div className="flex flex-col md:gap-y-8 sm:gap-y-6 gap-y-4  ">
//       {/* <div className="flex flex-wrap w-full    justify-between mt-6 border border-[red] "> */}
//       <div className="w-full  flex sm:flex-row flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 md:gap-x-6 sm:gap-x-4 gap-x-2">
//         <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
//           <p className="  text-[#555555] font-medium text-xs sm:text-sm md:text-base">
//             Flat/ Floor/ House No.*
//           </p>
//           <input
//             className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
//             type="text"
//             name="flat/floor/house"
//             // onChange={(e) => {
//             //   props.handleChange(e.target.name, e.target.value);
//             // }}
//             id=""
//           />
//         </div>
//         <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%] ">
//           <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
//             Floor*
//           </p>
//           <input
//             className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
//             type="text"
//             name="floor"
//             // onChange={(e) => {
//             //   props.handleChange(e.target.name, e.target.value);
//             // }}
//             id=""
//           />
//         </div>
//       </div>
//       <div className="w-full  flex sm:flex-row flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 md:gap-x-6 sm:gap-x-4 gap-x-2">
//         <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
//           <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
//             Landmark*
//           </p>
//           <input
//             className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
//             type="text"
//             name="landmark"
//             // onChange={(e) => {
//             //   props.handleChange(e.target.name, e.target.value);
//             // }}
//             id=""
//           />
//         </div>
//         <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
//           <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
//             City *
//           </p>
//           <input
//             className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
//             type="text"
//             name="city"
//             // onChange={(e) => {
//             //   props.handleChange(e.target.name, e.target.value);
//             // }}
//             id=""
//           />
//         </div>
//       </div>

//       <div className=" w-full flex sm:flex-row flex-col gap-y-3 gap-x-6 ">
//         <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
//           <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
//             State *
//           </p>
//           <input
//             className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
//             type="text"
//             name="state"
//             // onChange={(e) => {
//             //   props.handleChange(e.target.name, e.target.value);
//             // }}
//             id=""
//           />
//         </div>

//         <div className="flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%] ">
//           <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
//             Pin Code *
//           </p>
//           <input
//             className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
//             type="text"
//             name="pincode"
//             // onChange={async (e) => {
//             //   props.handleChange(e.target.name, e.target.value);

//             //   if (e.target.value.length === 6) {
//             //     const res = await addressFromPinCode(e.target.value);

//             //     if (res) {
//             //       const pickedState = props.states.filter(
//             //         (e) =>
//             //           `${e?.state}`.toLowerCase() ===
//             //           `${res["PostOffice"][0]["State"]}`.toLowerCase()
//             //       );
//             //       props.setUserAddress((val) => {
//             //         return {
//             //           ...val,
//             //           state: pickedState[0]["state"],
//             //           stateCode: pickedState[0]["code"],
//             //           city: res["PostOffice"][0]["District"],
//             //           country: res["PostOffice"][0]["Country"],
//             //         };
//             //       });
//             //     }
//             //   }
//             // }}
//             id=""
//           />
//         </div>
//       </div>
//       {/* city  */}
//       {/* <div className="w-full  flex sm:flex-row flex-col gap-y-3 gap-x-5"> */}

//       {/* county input start  */}
//       {/* <div className=" flex sm:gap-2 gap-1 flex-col w-full md:w-[48%] my-5 ">
//         <p className="text-[#555555] text-[15px] font-semibold">Country *</p>
//         <Listbox
//           value={props.userAddress?.country}
//           onChange={(e: any) => {
//             props.setUserAddress((val: any) => {
//               return { ...val, country: e };
//             });
//           }}
//         >
//           <div className="relative mt-1">
//             <Listbox.Button className="relative w-full cursor-default  bg-white  pl-3 pr-10  text-left shadow-inner focus:outline-none sm:text-sm py-2 h-14  border border-[#838383] px-2">
//               <span className="block truncate">
//                 {props.userAddress?.country || "Select Country"}
//               </span>
//               <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                 up icon
//               </span>
//             </Listbox.Button>
//             <Transition
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 <Listbox.Option
//                   key={"INDIA"}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                       active ? "bg-amber-100 text-amber-900" : "text-gray-900"
//                     }`
//                   }
//                   value={"India"}
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           selected ? "font-medium" : "font-normal"
//                         }`}
//                       >
//                         {"India"}
//                       </span>
//                       {props.userAddress?.country === "India" ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
//                           <CheckIcon
//                          className="h-5 w-5"
//                          aria-hidden="true"
//                        />
//                           check
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               </Listbox.Options>
//             </Transition>
//           </div>
//         </Listbox>
//       </div> */}
//       {/* country input end  */}
//       {/* default address checkbox start  */}
//       {/* <div className="w-full flex sm:gap-2 gap-1 items-center justify-between mt-4">
//         <div className="flex gap-2">
//           <input
//             type="checkbox outline-0"
//             name=""
//             id=""
//             value={props.makeDefaultAddress}
//             onChange={(e) => {
//               props.setMakeDefaultAddress(e.target.checked);
//             }}
//           />
//           <span className="text-neutral-600 text-[15px] font-semibold">Make this default address</span>
//         </div>

//       </div> */}
//       {/* default address checkbox end  */}
//       {/* Select From My Addreses code start  */}
//       {/* <div className="w-full flex gap-2 items-center justify-between mt-6 ">
//       <div className="flex items-center gap-8 w-full">
//           {(userAddresses?.length !== 0 || userData?.defaultAddress) && (
//             <button
//               className="w-[50%] py-3 h-14    hover:bg-white hover:text-black  bg-primary text-white "
//               onClick={() => {
//                 props.setUserAddress(userData?.defaultAddress)
//                 props.setIsNewAddress(false);
//               }}
//             >
//               Select From My Addreses
//             </button>
//           )} */}
//       {/* <button
//             className="w-[50%] py-3 h-14 rounded-br-[10px]   hover:bg-white hover:text-black  bg-primary text-white "
//             onClick={props.handleAddressSubmit}
//           >
//             Continue
//           </button> */}
//       {/* </div>
//         </div> */}
//       {/* Select From My Addreses code end  */}
//     </div>
//   );
// }
// export default CheckoutNewAddress;

// new
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { useQuery } from "@tanstack/react-query";

function CheckoutNewAddress() {
  return (
    <div className="flex flex-col md:gap-y-8 sm:gap-y-6 gap-y-4  ">
      {/* <div className="flex flex-wrap w-full    justify-between mt-6 border border-[red] "> */}
      <div className="w-full  flex sm:flex-row flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 md:gap-x-6 sm:gap-x-4 gap-x-2">
        <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
          <p className="  text-[#555555] font-medium text-xs sm:text-sm md:text-base">
            Flat/ Floor/ House No.*
          </p>
          <input
            className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
            type="text"
            name="flat/floor/house"
            // onChange={(e) => {
            //   props.handleChange(e.target.name, e.target.value);
            // }}
            id=""
          />
        </div>
        <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%] ">
          <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
            Floor*
          </p>
          <input
            className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
            type="text"
            name="floor"
            // onChange={(e) => {
            //   props.handleChange(e.target.name, e.target.value);
            // }}
            id=""
          />
        </div>
      </div>
      <div className="w-full  flex sm:flex-row flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 md:gap-x-6 sm:gap-x-4 gap-x-2">
        <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
          <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
            Landmark*
          </p>
          <input
            className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
            type="text"
            name="landmark"
            // onChange={(e) => {
            //   props.handleChange(e.target.name, e.target.value);
            // }}
            id=""
          />
        </div>
        <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
          <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
            City *
          </p>
          <input
            className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
            type="text"
            name="city"
            // onChange={(e) => {
            //   props.handleChange(e.target.name, e.target.value);
            // }}
            id=""
          />
        </div>
      </div>

      <div className=" w-full flex sm:flex-row flex-col gap-y-3 gap-x-6 ">
        <div className=" flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%]  ">
          <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
            State *
          </p>
          <input
            className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
            type="text"
            name="state"
            // onChange={(e) => {
            //   props.handleChange(e.target.name, e.target.value);
            // }}
            id=""
          />
        </div>

        <div className="flex md:gap-2 sm:gap-1.5 gap-1 flex-col w-full md:w-[50%] ">
          <p className="text-[#555555] font-medium text-xs sm:text-sm md:text-base">
            Pin Code *
          </p>
          <input
            className="py-1 sm:py-2 md:py-3 h-7 sm:h-10 md:h-14  bg-white rounded-[9px] sm:rounded-[12px] md:rounded-[15px] border border-gray-200  md:px-3 sm:px-2.5 px-2  outline-0 text-xs sm:text-sm md:text-base"
            type="text"
            name="pincode"
            // onChange={async (e) => {
            //   props.handleChange(e.target.name, e.target.value);

            //   if (e.target.value.length === 6) {
            //     const res = await addressFromPinCode(e.target.value);

            //     if (res) {
            //       const pickedState = props.states.filter(
            //         (e) =>
            //           `${e?.state}`.toLowerCase() ===
            //           `${res["PostOffice"][0]["State"]}`.toLowerCase()
            //       );
            //       props.setUserAddress((val) => {
            //         return {
            //           ...val,
            //           state: pickedState[0]["state"],
            //           stateCode: pickedState[0]["code"],
            //           city: res["PostOffice"][0]["District"],
            //           country: res["PostOffice"][0]["Country"],
            //         };
            //       });
            //     }
            //   }
            // }}
            id=""
          />
        </div>
      </div>
      {/* city  */}
      {/* <div className="w-full  flex sm:flex-row flex-col gap-y-3 gap-x-5"> */}

      {/* county input start  */}
      {/* <div className=" flex sm:gap-2 gap-1 flex-col w-full md:w-[48%] my-5 ">
        <p className="text-[#555555] text-[15px] font-semibold">Country *</p>
        <Listbox
          value={props.userAddress?.country}
          onChange={(e: any) => {
            props.setUserAddress((val: any) => {
              return { ...val, country: e };
            });
          }}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default  bg-white  pl-3 pr-10  text-left shadow-inner focus:outline-none sm:text-sm py-2 h-14  border border-[#838383] px-2">
              <span className="block truncate">
                {props.userAddress?.country || "Select Country"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                up icon
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option
                  key={"INDIA"}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={"India"}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {"India"}
                      </span>
                      {props.userAddress?.country === "India" ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon
                         className="h-5 w-5"
                         aria-hidden="true"
                       />
                          check
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div> */}
      {/* country input end  */}
      {/* default address checkbox start  */}
      {/* <div className="w-full flex sm:gap-2 gap-1 items-center justify-between mt-4">
        <div className="flex gap-2">
          <input
            type="checkbox outline-0"
            name=""
            id=""
            value={props.makeDefaultAddress}
            onChange={(e) => {
              props.setMakeDefaultAddress(e.target.checked);
            }}
          />
          <span className="text-neutral-600 text-[15px] font-semibold">Make this default address</span>
        </div>
        
      </div> */}
      {/* default address checkbox end  */}
      {/* Select From My Addreses code start  */}
      {/* <div className="w-full flex gap-2 items-center justify-between mt-6 ">
      <div className="flex items-center gap-8 w-full">
          {(userAddresses?.length !== 0 || userData?.defaultAddress) && (
            <button
              className="w-[50%] py-3 h-14    hover:bg-white hover:text-black  bg-primary text-white "
              onClick={() => {
                props.setUserAddress(userData?.defaultAddress)
                props.setIsNewAddress(false);
              }}
            >
              Select From My Addreses
            </button>
          )} */}
      {/* <button
            className="w-[50%] py-3 h-14 rounded-br-[10px]   hover:bg-white hover:text-black  bg-primary text-white "
            onClick={props.handleAddressSubmit}
          >
            Continue
          </button> */}
      {/* </div>
        </div> */}
      {/* Select From My Addreses code end  */}
    </div>
  );
}
export default CheckoutNewAddress;
