import React, { useState, useEffect, useRef } from "react";

export default function Nav({ sortedData, formatDate, setScrollToIndex }: any) {
  // Filter out duplicate dates
  const uniqueDates = Array.from(
    new Set(sortedData.map((item: any) => formatDate(item.created)))
  );
  const contentListRef = useRef(null); // 콘텐츠 리스트 요소의 ref

  const handleClicked = (date: string) => {
    const scrollToIndex = sortedData.findIndex(
      (item: any) => formatDate(item.created) === date
    );
    setScrollToIndex(scrollToIndex); // 선택된 날짜 업데이트
  };

  return (
    <div className="w-2/12 space-y-4 mt-[60px]">
      <h2 className="text-lg font-semibold px-4">Date Navigation</h2>
      <ul className="space-y-6 px-4">
        {uniqueDates.map((date: any) => {
          const itemsWithSameDate = sortedData.filter(
            (item: any) => formatDate(item.created) === date
          );
          const firstItem = itemsWithSameDate[0];
          console.log(firstItem.created);
          return (
            <li
              key={firstItem.created}
              className="bg-black text-white rounded-lg flex flex-row justify-between px-4 py-2 cursor-pointer"
              onClick={() => handleClicked(date)}
            >
              <div ref={contentListRef}>{formatDate(firstItem.created)}</div>
              <span className=""> → </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
