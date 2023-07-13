import React, { useState } from "react";
import ContentsList from "./components/ContentsList";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import data from "./data.json";

function App() {
  const [isClicked, setIsClicked] = useState(true);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR").format(date);
  };

  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(b.created).getTime();
    const dateB = new Date(a.created).getTime();
    return dateA - dateB;
  });
  return (
    <div className="">
      <Header />
      <Banner />
      <SearchBar />
      <div className="flex flex-row space-x-2 w-full px-10">
        <ContentsList
          className="w-3/4"
          formatDate={formatDate}
          sortedData={sortedData}
          isClicked={isClicked}
        />
        <Nav
          className="w-1/4"
          sortedData={sortedData}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
}

export default App;
