"use client";

import React from "react";
import { numberFormat } from "@/utils/helper";
import Image from "next/image";

const Cart = ({ foods }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {foods.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col bg-white p-3 rounded-xl shadow transition-all duration-200 hover:-translate-y-3"
        >
          <div className="bg-[#f2f2f2] w-full h-[286px] rounded-xl flex items-center justify-center mb-4 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.imgSrc}`}
              width={220}
              height={220}
              alt={item.title}
              className="rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <span className="block text-center font-bold">{item.title}</span>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <span>{numberFormat(item.price)}</span>
              <span className="text-sm">تومان</span>
            </div>
          </div>
          <p className="text-sm text-justify text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
