import AccountClient from '@/components/ProfileComponents/AccountClient'
import React from 'react'
import HomeClient from "@/components/HomeComponents/HomeClient";
import getQueryClient from "../../reactQuery/getQueryClient"
import { cookies } from "next/dist/client/components/headers";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../reactQuery/hydrate.client"
import { fetchUserData } from "@/services/userService";

const MyAccountPage = async() => {
  const cookie = cookies().get("uid");
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  await queryClient.prefetchQuery({ queryKey: ['userData'], queryFn:()=>fetchUserData(cookie) })
  console.log("cookies from main account apge",cookie);
  return (
    <Hydrate state={dehydratedState}>
      <AccountClient/>
    </Hydrate>
  )
}

export default MyAccountPage