import React, { useState } from "react";
import { ReactNode } from "react";

export default function ContentsList({
  formatDate,
  sortedData,
  isClicked,
}: any) {
  // const [isClicked, setIsClicked] = useState(true);

  // const formatDate = (dateString: any) => {
  //   const date = new Date(dateString);
  //   return new Intl.DateTimeFormat("ko-KR").format(date);
  // };

  // const sortedData = [...data].sort((a, b) => {
  //   const dateA = new Date(b.created).getTime();
  //   const dateB = new Date(a.created).getTime();
  //   return dateA - dateB;
  // });

  return (
    <ul className="space-y-6">
      {isClicked &&
        sortedData.map((item: any) => (
          <li
            className="h-[300px] border rounded-md py-4 px-4 "
            key={item.created}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold capitalize ">
                    {item.title}
                  </h2>
                  <p>{formatDate(item.created)}</p>
                </div>
                <div className="border rounded-2xl w-[100px] px-4 py-1 bg-black text-white">
                  {item.category}
                </div>
              </div>
              <img
                className="w-[450px] h-[250px] rounded-md border "
                src={item.thumbnail}
                alt=""
              />
            </div>
          </li>
        ))}
    </ul>
  );
}
