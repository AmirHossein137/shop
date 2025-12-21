"use client";

import HomePage from "@/components/home/HomePage";
import { useApiMethods } from "@/services/apiMethods";
import { useEffect } from "react";

export default function Home() {
  // const { getSalesUnits } = useApiMethods();

  // const getData = async () => {
  //   const resp = await getSalesUnits(1);
  //   console.log(resp);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <HomePage />
    </>
  );
}
