import React from "react";

export default function SearchBar() {
  return (
    <div className="px-10 py-8">
      <form className="flex flex-row space-x-4">
        <input
          placeholder="Enter keyword"
          className="border border-slate-200 bg-slate-100 rounded-2xl w-1/2 h-8 px-4 placeholder:text-sm focus:outline-none focus:ring focus:ring-slate-300"
        ></input>
        <button className="bg-slate-200 rounded-2xl w-[100px] h-8 text-slate-500 hover:bg-slate-300 hover:text-white">
          search
        </button>
      </form>
    </div>
  );
}
