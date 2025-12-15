"use client";

import { useApiMethods } from "@/utils/apiMethods";
import { useEffect } from "react";

export default function Home() {
  const { getSalesUnits } = useApiMethods();

  const getData = async () => {
    const resp = await getSalesUnits(1);
    console.log(resp);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>asda</div>;
}
