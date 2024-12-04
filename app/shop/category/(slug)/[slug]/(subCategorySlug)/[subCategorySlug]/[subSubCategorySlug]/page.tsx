import { dehydrate } from "@tanstack/react-query";
import Productlistcomponent from "@/components/productlistcomponent/Productlistcomponent";
import Headersection from "@/components/headersection/HeaderSection";

const SubSubCategoryProducts = async ({ params }: any) => {

  return (
    // <Hydrate state={dehydratedState}>
    <>
    <Headersection title="Grocery Store" subtitle="Vegetables"/>
      <Productlistcomponent
        params={params}
        queryKey={[
          "shop",
          "category",
          params?.slug,
          params?.subCategorySlug,
          params?.subSubCategorySlug,
        ]}
      />
        </>
    // </Hydrate>
  
  );
};

export default SubSubCategoryProducts;
