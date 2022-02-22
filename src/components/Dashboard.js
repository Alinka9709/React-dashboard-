import React, { useEffect, useState } from "react";
import SearchPanel from "./SearchPanel/SearchPanel";
import Table from "./Table/Table";

const Dashboard = () => {
  const [sites, setSites] = useState([]);
  const [tests, setTests] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [search, setSearch] = useState("");

  const hadleInputChange = (searchValue) => {

    setSearch(searchValue);
  };
  const searchItem = (tests, search) => {
    if (search.length === 0) {
      return tests;
    }
    return tests.filter((item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const sortData = (sort) => {

    const copyData = tests.concat();
    let sortData;
    if (directionSort) {
      sortData = copyData.sort((a, b) => {
        return a[sort] > b[sort] ? 1 : -1;
      });
    } else {
      sortData = copyData.reverse((a, b) => {
        return a[sort] > b[sort] ? 1 : -1;
      });
    }

    setTests(sortData);
    setDirectionSort(!directionSort);
  };

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((data) => {
        setSites(data.sites);
        setTests(data.tests);
      });
  }, []);



  return (
    <div>
      <h1 className="dashboard">Dashboard</h1>
      <SearchPanel hadleInputChange={hadleInputChange} />
      {searchItem(tests, search).length ? (
        <Table
          tests={tests}
          sites={sites}
          sortData={sortData}
          searchItem={searchItem}
          search={search}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Your search did not match any results.
        </h1>
      )}
    </div>
  );
};

export default Dashboard;