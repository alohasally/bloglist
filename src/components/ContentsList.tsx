import React, { useState, useEffect, useRef } from "react";
import { ReactNode } from "react";

export default function ContentsList({
  formatDate,
  sortedData,
  scrollToIndex,
}: any) {
  const tagsArray = [...new Set(sortedData.map((item: any) => item.category))];
  tagsArray.unshift("All");
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);
  const contentListRef = useRef<HTMLUListElement>(null);

  const handleClicked = (tag: string) => {
    if (tag.toLowerCase() === "all") {
      if (selectedTags.includes("All")) {
        setSelectedTags([]);
      } else {
        setSelectedTags(["All"]);
      }
    } else {
      if (selectedTags.includes("All") && selectedTags.length === 1) {
        setSelectedTags([tag]);
      } else {
        if (selectedTags.includes(tag)) {
          setSelectedTags(
            selectedTags.filter((selectedTag) => selectedTag !== tag)
          );
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      }
    }
  };

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

  const groupedData: { [key: string]: any[] } = {};

  sortedData.forEach((item: any) => {
    const createdDate = new Date(item.created)
      .toLocaleDateString()
      .replace(/\./g, "-")
      .replace(/-$/, "");

    if (!groupedData[createdDate]) {
      groupedData[createdDate] = [];
    }

    groupedData[createdDate].push(item);
  });
  console.log(groupedData);

  const tagColors: { [key: string]: string } = {
    javascript: "bg-yellow-300",
    memory: "bg-green-300",
    typescript: "bg-red-300",
  };

  return (
    <div className="space-y-4  w-10/12">
      <CategoryTags
        selectedTags={selectedTags}
        handleClicked={handleClicked}
        tagsArray={tagsArray}
        tagColors={tagColors}
      />
      <ul ref={contentListRef} className="space-y-6">
        {Object.entries(groupedData).map(([date, items]) => (
          <li
            key={date}
            className={`bg-slate-100 px-4 py-4 rounded-lg space-y-4 ${
              selectedTags.length === 0 ? "hidden " : ""
            }`}
          >
            <h2 className="text-xl font-bold px-2  text-slate-500">{date}</h2>
            {items.map((item) => (
              <div
                className={`h-[300px] border bg-white rounded-md py-4 px-4
              ${
                // selectedTags.length === 0 ||
                selectedTags.includes("All") ||
                selectedTags.some((tag) => item.category === tag)
                  ? "block"
                  : "hidden"
              }`}
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4 w-[500px]">
                      <h2 className="text-2xl font-bold capitalize ">
                        {item.title}
                      </h2>
                      <p>{formatDate(item.created)}</p>
                    </div>
                    <div
                      className={`border rounded-2xl w-fit px-4 py-1 text-white ${
                        tagColors[item.category] || ""
                      }`}
                    >
                      {item.category}
                    </div>
                  </div>
                  <img
                    className="w-[450px] h-[250px] rounded-md border "
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

const CategoryTags = ({
  selectedTags,
  handleClicked,
  tagsArray,
  tagColors,
}: any) => {
  return (
    <div className="flex flex-row space-x-4">
      {tagsArray.map((tag: any) => {
        const isSelected = selectedTags.includes(tag);
        const isAll = selectedTags.includes("all");
        const tagColorClass = isSelected ? tagColors[tag] || "" : "";

        return (
          <div
            onClick={() => handleClicked(tag)}
            className={`rounded-3xl w-fit px-5 py-1.5 cursor-pointer hover:bg-opacity-70 ${
              isAll
                ? "bg-black text-white"
                : isSelected
                ? "bg-black text-white"
                : "bg-slate-200 text-slate-500"
            } ${tagColorClass}`}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};
