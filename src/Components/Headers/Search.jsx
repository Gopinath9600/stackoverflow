import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import { getSearches } from "../../Services/SearchService";

const Search = ({ onSearchItemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = () => {
      getSearches(searchTerm)
        .then((res) => {
          setSearchResults(res.items.splice(0, 5));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search" ref={searchRef}>
      <div className="search-bar">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color="black"
          style={{ opacity: 0.7, padding: "0 5px" }}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="searchResults">
          {searchResults.map((result) => (
            <div
              key={result.question_id}
              className="searchItem"
              onClick={() => {
                onSearchItemClick(result.question_id);
              }}
            >
              <span> {result.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
