import { dehydrate } from "@tanstack/react-query";
// import getQueryClient from "../../../../../../../utils/getQueryClient";
// import Hydrate from "../../../../../../../utils/hydrate.client";
// import { fetchCategoryProducts } from "@/utils/databaseService";
import Productsidecomponent from "@/components/productlistcomponent/Productlistcomponent";
import Headersection from "@/components/headersection/HeaderSection";

const SubCategoryProducts = async ({ params }: any) => {
  

  return (
    // <Hydrate state={dehydratedState}>
    <>
  <Headersection title="Grocery Store" subtitle="Vegetables"/>
      <Productsidecomponent
        params={params}
        queryKey={["shop", "category", params?.slug, params?.subCategorySlug]}
      />
      </>
    // </Hydrate>
  );
};

export default SubCategoryProducts;
