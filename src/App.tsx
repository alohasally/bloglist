import React, { useEffect, useState } from "react";
import ContentsList from "./components/ContentsList";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import data from "./data.json";

function App() {
  const [scrollToIndex, setScrollToIndex] = useState(null);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR")
      .format(date)
      .replace(/\./g, "-")
      .replace(/-$/, "");
  };

  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(b.created).getTime();
    const dateB = new Date(a.created).getTime();
    return dateA - dateB;
  });

  // const [data1, setData] = useState([]);

  // useEffect(() => {
  //   try {
  //     const { data } = await axios.get('')

  //     const sortedData = sortedData(data)''
  //   } catch (error) {

  //   }
  // }, []);

  return (
    <div className="">
      <Header />
      <Banner />
      <SearchBar />
      <div className="flex flex-row space-x-2 w-full px-10">
        <ContentsList
          formatDate={formatDate}
          sortedData={sortedData}
          scrollToIndex={scrollToIndex}
          setScrollToIndex={setScrollToIndex}
        />
        <Nav
          sortedData={sortedData}
          formatDate={formatDate}
          setScrollToIndex={setScrollToIndex}
        />
      </div>
    </div>
  );
}

export default App;
