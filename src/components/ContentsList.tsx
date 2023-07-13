import React, { useState, useEffect, useRef } from "react";
import { ReactNode } from "react";

export default function ContentsList({
  formatDate,
  sortedData,
  scrollToIndex,
}: any) {
  const tagsArray = ["All", "typescript", "javascript", "memory"];
  const [selectedTag, setSelectedTag] = useState(null);
  const handleClicked = (tag: any) => {
    if (tag === "All") {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const contentListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (scrollToIndex !== null) {
      const contentListElement = contentListRef.current;

      if (contentListElement !== null) {
        const contentItemElement = contentListElement.childNodes[scrollToIndex];
        if (contentItemElement instanceof HTMLElement) {
          contentItemElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [scrollToIndex]);

  return (
    <div className="space-y-4  w-10/12">
      <CategoryTags
        selectedTag={selectedTag}
        handleClicked={handleClicked}
        tagsArray={tagsArray}
      />
      <ul ref={contentListRef} className="space-y-6">
        {sortedData.map((item: any) => (
          <li
            className={`h-[300px] border rounded-md py-4 px-4 
              ${
                selectedTag === null || item.category === selectedTag
                  ? "block"
                  : "hidden"
              }`}
            key={item.created}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between">
                <div className="space-y-4 w-[500px]">
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
    </div>
  );
}

const CategoryTags = ({ selectedTag, handleClicked, tagsArray }: any) => {
  return (
    <div className="flex flex-row space-x-4">
      {tagsArray.map((tag: any) => {
        return (
          <div
            onClick={() => handleClicked(tag)}
            className={`rounded-3xl px-5 py-1.5 cursor-pointer ${
              (tag === "All" && selectedTag !== tag) ||
              (selectedTag === tag && selectedTag !== "All")
                ? "bg-black text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};
