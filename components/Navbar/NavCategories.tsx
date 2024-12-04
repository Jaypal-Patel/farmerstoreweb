import { useScrollDirection } from "@/utils/useScroll";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function NavCategories() {
  const isScrolled = useScrollDirection();

  return (
    <div
      className={`${
        isScrolled ? "bg-[#E9F6F0]" : "bg-[#E9F6F0]"
      } hidden md:flex items-center gap-10  px-body  w-full min-h-[70.97px]`}
    >
      {/* category button */}
      <Link href={"/shop"}>
        <button className=" bg-primary py-3 px-6 text-white rounded-[10px] text-small font-medium">
          Shop By Category
        </button>
      </Link>
      {/* category button end */}

      <div className="flex gap-10 items-center">
        <Link href="/" className="text-small font-medium">
          Home
        </Link>
        <Link href="/about" className="text-small font-medium">
          About
        </Link>
        <Link href="/blogs" className="text-small font-medium">
          Learn
        </Link>
        <Link href="/made-2-order" className="text-small font-medium">
          Made 2 Order
        </Link>
        {/* <Link href="/subscription" className="text-small font-medium">
          Subscription
        </Link> */}
        {/* <Link href={{ pathname: "/my-account", query: { tab: "my-profile" } }} className="text-small font-medium">
          Account
        </Link> */}
      </div>
    </div>
  );
}

export default NavCategories;
