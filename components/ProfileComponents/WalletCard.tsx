// "use client";
// import React, { useEffect } from "react";
// import { TfiWallet } from "react-icons/tfi";
// import { FiShoppingCart } from "react-icons/fi";
// import { BiLoaderCircle } from "react-icons/bi";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchWalletData, loadTransactions } from "@/redux/slices/walletSlice";
// import { AppDispatch } from "@/redux/store";

// const WalletCard: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const { wallet, transactions, loading, error, hasMore, lastpage } =
//     useSelector((state: any) => state.wallet);
//   console.log("transactionslastpage", lastpage);

//   const { userInfo } = useSelector((state: any) => state.loginModal);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       if (userInfo?.id) {
//         await dispatch(fetchWalletData(userInfo.id));
//       }
//     };

//     fetchInitialData();
//   }, [dispatch, userInfo]);

//   const loadMore = async () => {
//     if (hasMore && !loading && userInfo?.id) {
//       await dispatch(loadTransactions({ userId: userInfo.id, lastpage }));
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-10">
//         <BiLoaderCircle className="animate-spin text-3xl text-primary" />
//       </div>
//     );
//   }

//   if (!wallet) {
//     return <div className="text-center py-10">No wallet data available.</div>;
//   }

//   return (
//     <div className="border border-[#EEF0F5] rounded-xl sm:px-6 px-3 sm:py-8 py-4">
//       <div className="flex flex-col gap-2 mt-2">
//         <h3 className="lg:text-lg text-base font-semibold">All Transactions</h3>
//         {transactions.length > 0 ? (
//           transactions.map((transaction: any) => {
//             const isAddition = [
//               "credit",
//               "loyalty cashback",
//               "refund",
//             ].includes(transaction.type);
//             return (
//               <div
//                 key={transaction.id}
//                 className="flex items-center justify-between border-b border-b-[#EEF0F5] sm:py-6 py-3"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="sm:h-[60px] sm:w-[60px] h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#F5F6FA]">
//                     {isAddition ? (
//                       <TfiWallet className="sm:h-6 sm:w-6 h-5 w-5" />
//                     ) : (
//                       <FiShoppingCart className="sm:h-6 sm:w-6 h-5 w-5" />
//                     )}
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <h4 className="lg:text-base text-sm font-semibold">
//                       {isAddition
//                         ? "Money Added to Wallet"
//                         : `Order Id #${transaction.id}`}
//                     </h4>
//                     <p className="text-[#999999] font-medium lg:text-sm text-xs">
//                       {new Date(transaction.created_at).toLocaleString()}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <h3
//                     className={`${
//                       isAddition ? "text-primary" : "text-red-600"
//                     } lg:text-lg text-base font-bold text-end`}
//                   >
//                     {isAddition
//                       ? `+ Rs ${transaction.amount}`
//                       : `- Rs ${transaction.amount}`}
//                   </h3>
//                   <p className="text-[#999999] font-medium lg:text-sm text-xs text-end">
//                     Balance Rs {wallet.balance}
//                   </p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="text-center py-2">No past transactions.</div>
//         )}
//         {hasMore && (
//           <button
//             onClick={loadMore}
//             className="flex justify-center items-center gap-2 border border-[#DEDEDE] w-fit mx-auto sm:px-10 px-8 py-3 rounded-xl mt-4"
//             disabled={loading}
//           >
//             <BiLoaderCircle className={`animate-spin sm:text-xl text-lg`} />
//             <p className="sm:text-base text-sm font-semibold">Load More</p>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WalletCard;

import React, { useEffect } from "react";
import { TfiWallet } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllTransactions,
  fetchWalletData,
  loadTransactions,
} from "@/redux/slices/walletSlice";
import { AppDispatch } from "@/redux/store";

const WalletCard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { wallet, transactions, loading, lastpage, hasMore } = useSelector(
    (state: any) => state.wallet
  );
  const { userInfo } = useSelector((state: any) => state.loginModal);

  // Fetch wallet data and transactions on mount
  useEffect(() => {
    const fetchData = async () => {
      if (userInfo?.id) {
        await dispatch(fetchAllTransactions(userInfo.id)); // Fetch initial wallet data
      }
    };
    fetchData();
    console.log(transactions);
  }, [dispatch, userInfo]);

  // // Automatically load transactions when wallet data is available
  // useEffect(() => {
  //   if (wallet && userInfo?.id && lastpage && lastpage > 0) {
  //     // Fetch transactions based on last page
  //     dispatch(loadTransactions({ userId: userInfo.id, lastpage }));
  //   }
  // }, [dispatch, userInfo, wallet, lastpage]);

  // // Function to load more transactions when the button is clicked
  // const loadMore = async () => {
  //   if (!loading && hasMore && userInfo?.id && lastpage > 1) {
  //     const newPage = lastpage - 1; // Fetch previous page (lastpage - 1)
  //     await dispatch(
  //       loadTransactions({ userId: userInfo.id, lastpage: newPage })
  //     );
  //   }
  // };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <BiLoaderCircle className="animate-spin text-3xl text-primary" />
      </div>
    );
  }

  // If no wallet data available
  if (!wallet) {
    return <div className="text-center py-10">No wallet data available.</div>;
  }
  const reversedTransactions = [...transactions].reverse();

  return (
    <div className="border border-[#EEF0F5] rounded-xl sm:px-6 px-3 sm:py-8 py-4">
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="lg:text-lg text-base font-semibold">All Transactions</h3>
        {reversedTransactions.length > 0 ? (
          reversedTransactions.map((transaction: any) => {
            const isAddition = [
              "credit",
              "loyalty cashback",
              "refund",
            ].includes(transaction.type);
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between border-b border-b-[#EEF0F5] sm:py-6 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="sm:h-[60px] sm:w-[60px] h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#F5F6FA]">
                    {isAddition ? (
                      <TfiWallet className="sm:h-6 sm:w-6 h-5 w-5" />
                    ) : (
                      <FiShoppingCart className="sm:h-6 sm:w-6 h-5 w-5" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="lg:text-base text-sm font-semibold">
                      {isAddition
                        ? "Money Added to Wallet"
                        : `Order Id #${transaction.id}`}
                    </h4>
                    <p className="text-[#999999] font-medium lg:text-sm text-xs">
                      {new Date(transaction.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className={`${
                      isAddition ? "text-primary" : "text-red-600"
                    } lg:text-lg text-base font-bold text-end`}
                  >
                    {isAddition
                      ? `+ Rs ${transaction.amount}`
                      : `- Rs ${transaction.amount}`}
                  </h3>
                  <p className="text-[#999999] font-medium lg:text-sm text-xs text-end">
                    Balance Rs {wallet.balance}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-2">No past transactions.</div>
        )}
        {hasMore && (
          <button
            // onClick={loadMore}
            className="flex justify-center items-center gap-2 border border-[#DEDEDE] w-fit mx-auto sm:px-10 px-8 py-3 rounded-xl mt-4"
            disabled={loading}
          >
            <BiLoaderCircle className={`animate-spin sm:text-xl text-lg`} />
            <p className="sm:text-base text-sm font-semibold">Load More</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletCard;
