"use client";

import React from "react";
import dynamic from "next/dynamic";
import { numberFormat } from "@/utils/helper";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { MdFavorite } from "react-icons/md";

const ReactStars = dynamic(() => import("react-stars"), {
  ssr: false,
});

const Cart = ({ fooods }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {fooods.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white p-3 rounded-xl shadow"
        >
          <div className="bg-[#f2f2f2] w-full h-[286px] rounded-xl flex items-center justify-center mb-4">
            <Image
              src={item.image}
              width={220}
              height={220}
              alt={item.title}
              className="rounded-md object-cover"
            />
          </div>

          <span className="block text-center font-bold">{item.title}</span>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <span>{numberFormat(item.minPrice)}</span>
              <span className="text-sm">تومان</span>
            </div>
            <span>-</span>
            <div className="flex items-center gap-1">
              <span>{numberFormat(item.maxprice)}</span>
              <span className="text-sm">تومان</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ReactStars
              value={item.rate}
              size={20}
              color2="#facc15"
              edit={false}
            />
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <button className="w-9 h-9 flex items-center justify-center border border-[#ddd] rounded">
              <FaRegEye />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-[#ddd] rounded">
              <SlBasket />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-[#ddd] rounded">
              <MdFavorite />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
