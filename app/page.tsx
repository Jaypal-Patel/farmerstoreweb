import HomeClient from "@/components/HomeComponents/HomeClient";
import getQueryClient from "../reactQuery/getQueryClient";
import { cookies } from "next/dist/client/components/headers";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../reactQuery/hydrate.client";
import { fetchUserData } from "@/services/userService";

export default async function Home() {
  const cookie = cookies().get("uid");
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  await queryClient.prefetchQuery({
    queryKey: ["userData"],
    queryFn: () => fetchUserData(cookie),
  });

  return (
    <Hydrate state={dehydratedState}>
      <HomeClient />
    </Hydrate>
  );
}
