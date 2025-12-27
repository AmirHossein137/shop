"use client";

import PreLoading from "@/components/loading/PreLoading";
import Cart from "@/components/modules/Cart";
import { useApiMethods } from "@/services/apiMethods";
import Image from "next/image";
import { use, useEffect, useState } from "react";

const MenuPage = ({ params }) => {
  const { branchId, unitId } = use(params);
  const [loading, setLoading] = useState(false);
  const { getMenuCategories, getMenus } = useApiMethods();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menus, setMenus] = useState([]);

  const getMenuCategory = async () => {
    setLoading(true);
    const resp = await getMenuCategories(branchId, unitId);
    setCategories(resp.data);
    if (resp.data && resp.data.length > 0) {
      setActiveCategory(resp.data[0].id);
    }
    setLoading(false);
  };

  const handleMenu = async (id) => {
    setLoading(true);
    const resp = await getMenus(branchId, unitId, id);
    setMenus(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getMenuCategory();
  }, [branchId, unitId]);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="flex flex-col">
          <div className="w-full relative h-[130px] md:h-[262px] mb-10">
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
            <div className="w-full px-3 flex pb-3 items-center justify-start lg:justify-center gap-4 overflow-x-auto scrollbar-hide ">
              {categories?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => {
                    handleMenu(item.id);
                    setActiveCategory(item?.id);
                  }}
                  className={`flex-shrink-0 text-[#666] pb-1 border-b-2 transition-colors ${
                    activeCategory === item?.id
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
                >
                  {item?.title}
                </button>
              ))}
            </div>

            <div className="w-[1200px] max-w-full mx-auto px-4">
              <Cart foods={menus} />
            </div>
          </div>
        </div>
        {loading && <PreLoading />}
      </div>
    </div>
  );
};

export default MenuPage;
