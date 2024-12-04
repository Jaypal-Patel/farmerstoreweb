// "use client";
// import React, { useEffect, useState, ReactNode } from "react";

// const Page = () => {
//   const [content, setContent] = useState<ReactNode>(undefined);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch data from the API
//         const response = await fetch(
//           `https://farmer.handpumpking.in/api/v1/pages`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await response.json();
//         console.log(data);

//         // Extract the tab from the URL
//         const url = window.location.href;
//         const tab = url.split("?")[1];

//         // Determine which content to display based on the tab parameter
//         let contentToDisplay;
//         switch (tab) {
//           case "privacy-policy":
//             contentToDisplay = (
//               <div
//                 className="min-h-[40vh] h-auto"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     data.privacy_policy?.value ||
//                     "No privacy policy content available.",
//                 }}
//               />
//             );
//             break;
//           case "refund_page":
//             contentToDisplay = (
//               <div
//                 className="h-auto"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     data.refund_page?.content ||
//                     "No refund page content available.",
//                 }}
//               />
//             );
//             break;
//           case "terms-conditions":
//             contentToDisplay = (
//               <div
//                 className="h-auto"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     data.terms_and_conditions?.value ||
//                     "No terms and conditions content available.",
//                 }}
//               />
//             );
//             break;
//           case "cancellation-policy":
//             contentToDisplay = (
//               <div
//                 className="h-auto"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     data.cancellation_policy?.content ||
//                     "No cancellation policy content available.",
//                 }}
//               />
//             );
//             break;
//           default:
//             contentToDisplay = <p>No content available for this tab.</p>;
//         }

//         setContent(contentToDisplay);
//       } catch (error) {
//         console.error(error);
//         setContent(<p>Error loading content.</p>);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow h-auto mt-52">
//         <div className="container mx-auto p-4">
//           {loading ? (
//             <p>Loading content...</p>
//           ) : (
//             content || <p>No content available for this tab.</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Page;

"use client";
import { fetchContent } from "@/redux/slices/pageSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PageContent {
  privacy_policy?: { value: string };
  refund_page?: { content: string };
  terms_and_conditions?: { value: string };
  cancellation_policy?: { content: string };
}

const Page = () => {
  const dispatch: AppDispatch = useDispatch();
  const contentData = useSelector((state: RootState) => state.page.content);
  const [content, setContent] = useState<ReactNode>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dispatch the action to fetch content
        await dispatch(fetchContent());

        const url = window.location.href;
        const tab = url.split("?")[1];

        // Safeguard against contentData being null or undefined
        if (!contentData) {
          setContent(<p>No content available.</p>);
          return;
        }

        let contentToDisplay;
        switch (tab) {
          case "privacy-policy":
            contentToDisplay = (
              <div
                className="min-h-[50vh] h-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    contentData.privacy_policy?.value ||
                    "No privacy policy content available.",
                }}
              />
            );
            break;
          case "refund_page":
            contentToDisplay = (
              <div
                className="min-h-[50vh] h-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    contentData.refund_page?.content ||
                    "No refund page content available.",
                }}
              />
            );
            break;
          case "terms-conditions":
            contentToDisplay = (
              <div
                className="min-h-[50vh] h-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    contentData.terms_and_conditions?.value ||
                    "No terms and conditions content available.",
                }}
              />
            );
            break;
          case "cancellation-policy":
            contentToDisplay = (
              <div
                className="min-h-[50vh] h-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    contentData.return_policy?.content ||
                    "No cancellation policy content available.",
                }}
              />
            );
            break;
          default:
            contentToDisplay = <p>No content available for this tab.</p>;
        }

        setContent(contentToDisplay);
      } catch (error) {
        console.error(error);
        setContent(<p>Error loading content.</p>);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, contentData]);

  if (loading) {
    return <p>Loading content...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mt-52 px-10">
        <div className="container mx-auto p-4">
          {content || <p>No content available for this tab.</p>}
        </div>
      </main>
    </div>
  );
};

export default Page;
