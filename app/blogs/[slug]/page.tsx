import BlogPageArea from "@/components/blogpageArea/BlogPageArea";
import YouMayAlsoLike from "@/components/youmayAlsoLike/YouMayAlsoLike";
import blogImage from "../../../images/image 71.svg";

const Page = async ({ params }: any) => {
  return (
    <>
      <BlogPageArea
        category="Grocery Delivery App"
        createdAt={new Date()}
        numberOfLikes={42}
        title="A list of Essentials for Cooking Dishes"
        coverPic={blogImage}
      />

      <YouMayAlsoLike slug="" />
    </>
  );
};
export default Page;
