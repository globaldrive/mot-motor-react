"use client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import AsideMenuFilters from "../../_components/AsideMenuFilters";
import FilterSvg from "@/_assets/images/general/filters.svg";
import CrossSvg from "@/_assets/images/general/whiteCross.svg";
import { Button } from "@/_components/ui/button";
import useScrollControl from "@/_hooks/useScrollControl";
import FilterTypes from "@/_types/enums/filterTypes";

interface AsideMenuProps {
  filters: {
    id: number;
    type: FilterTypes;
    title: string;
    values: string[];
  }[];
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const AsideMenu = ({ filters, isVisible, setIsVisible }: AsideMenuProps) => {
  const mockIdTestFilterDefaultVisible = 1;
  const handleResetBtn = () => {
    setIsVisible(!isVisible);
  };
  const handleShowResultsBtn = () => {
    setIsVisible(!isVisible);
  };

  useScrollControl({ isDisabled: isVisible });

  return (
    <aside
      className={`fixed w-full md:w-fit h-screen left-0 top-0 md:relative bg-white md:bg-transparent z-10 ${isVisible ? "block" : "hidden"}`}
    >
      <div className="flex flex-col w-full h-full md:h-fit lg:w-64 shadow rounded-lg lg:p-5">
        <div className="flex md:hidden mb-5 items-center justify-between bg-mm-main px-5 py-7">
          <div className="flex gap-2.5">
            <Image
              src={FilterSvg}
              alt="иконка фильтров"
              width={20}
              height={20}
            />
            <span className="text-xl font-bold text-white">Фильтры</span>
          </div>
          <Image
            src={CrossSvg}
            alt="крест"
            width={18}
            height={18}
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <ul className="flex px-5 mb-auto md:mb-0 md:px-0 flex-col gap-3.5 ">
          {filters.map(filter => {
            return (
              <AsideMenuFilters
                key={filter.id}
                title={filter.title}
                filterType={filter.type}
                values={filter.values}
                valueHiddenDefault={
                  filter.id !== mockIdTestFilterDefaultVisible
                }
              />
            );
          })}
        </ul>
        <div className="flex md:hidden gap-1.5 px-5 mb-6">
          <Button className="flex-grow" onClick={handleResetBtn}>
            Сбросить
          </Button>
          <Button className="flex-grow" onClick={handleShowResultsBtn}>
            Показать
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
