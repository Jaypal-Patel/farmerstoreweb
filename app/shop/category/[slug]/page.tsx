"use client"
import React,{useEffect, useState} from "react";
// import Hydrate from "../../../../utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import Productlistcomponent from "@/components/productlistcomponent/Productlistcomponent";
import Headersection from "@/components/headersection/HeaderSection";
import { useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSubCategories } from "@/redux/slices/homeSlice";

const CategoryProducts = async ({ params }: any) => {

  const dispatch = useDispatch();

  
  return (<>
    {/* <Hydrate state={dehydratedState}> */}
    <Headersection title="Grocery Store" subtitle={params.slug}/>
      <Productlistcomponent
        params={params}
        queryKey={["shop", "category", params?.slug]}
      />
    {/* </Hydrate> */}
    </>
  );
};
export default CategoryProducts;
