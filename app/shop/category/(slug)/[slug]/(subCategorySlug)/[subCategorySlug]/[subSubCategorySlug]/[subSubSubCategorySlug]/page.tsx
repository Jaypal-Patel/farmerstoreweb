import Productsidecomponent from "@/components/productlistcomponent/Productlistcomponent";
import Headersection from "@/components/headersection/HeaderSection";


const SubSubCategoryProducts = async ({ params }: { params: any }) => {

  return (
    <>
      <Headersection title="Grocery Store" subtitle="Vegetables" />
      <Productsidecomponent
        params={params}
        queryKey={[
          "shop",
          "category",
          params?.slug,
          params?.subCategorySlug,
          params?.subSubCategorySlug,
          params?.subSubSubCategorySlug,
        ]}
      />
    </>
  );
};

export default SubSubCategoryProducts;
