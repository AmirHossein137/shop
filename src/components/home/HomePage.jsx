import Image from "next/image";
import React from "react";
import Cart from "../modules/Cart";

const HomePage = () => {
  const fooods = [
    {
      id: 1,
      title: "ماهی کبابی",
      minPrice: "500000",
      maxprice: "800000",
      image: "/images/food-1.png",
      rate: 5,
    },
    {
      id: 2,
      title: "سالاد کاپریس",
      minPrice: "300000",
      maxprice: "600000",
      image: "/images/food-2.png",
      rate: 5,
    },
    {
      id: 3,
      title: "دنده کبابی",
      minPrice: "600000",
      maxprice: "900000",
      image: "/images/food-3.png",
      rate: 4,
    },
    {
      id: 4,
      title: "تیرامیسو",
      minPrice: "200000",
      maxprice: "500000",
      image: "/images/food-4.png",
      rate: 4,
    },
    {
      id: 5,
      title: "اسموتی انبه",
      minPrice: "200000",
      maxprice: "500000",
      image: "/images/food-5.png",
      rate: 5,
    },
    {
      id: 6,
      title: "سالاد یونانی",
      minPrice: "250000",
      maxprice: "500000",
      image: "/images/food-6.png",
      rate: 4,
    },
    {
      id: 7,
      title: "سالاد یونانی",
      minPrice: "250000",
      maxprice: "500000",
      image: "/images/food-7.png",
      rate: 4,
    },
    {
      id: 8,
      title: "بشقاب سوشی",
      minPrice: "600000",
      maxprice: "1000000",
      image: "/images/food-8.png",
      rate: 4,
    },
    {
      id: 9,
      title: "میگو میگوی کوچک",
      minPrice: "400000",
      maxprice: "800000",
      image: "/images/food-9.png",
      rate: 5,
    },
    {
      id: 10,
      title: "رول سبزیجات",
      minPrice: "400000",
      maxprice: "500000",
      image: "/images/food-10.png",
      rate: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="w-full relative h-[262px] mb-10">
        <Image
          src={"/images/page-ban-bg.png"}
          fill
          alt="Image"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-bold">
          صفحه منو
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[#c33] font-medium">منوی ویژه</span>
        <span className="text-2xl font-bold">منوی ویژه ما</span>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button className="text-[#666]">همه دسته‌ها</button>
          <button className="text-[#666]">ماهی سوف</button>
          <button className="text-[#666]">خرچنگ</button>
          <button className="text-[#666]">میگوها</button>
          <button className="text-[#666]">خرچنگ قرمز</button>
        </div>
        <div className="w-[1200px] max-w-full mx-auto px-4">
            <Cart fooods={fooods}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
