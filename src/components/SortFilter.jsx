import React, { useState, useEffect } from "react";
import "./SortFilter.css";
import filterIcon from '../assets/Display.svg';

const SortFilter = ({ grouping, setGrouping, sortOptions, setSortOptions }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || "status");
  // const [sortOptions, setSortOptions] = useState(localStorage.getItem('sortOptions') || "");

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('sortOptions', sortOptions);
  }, [sortOptions]);

  return (
    <div className="header">
      <button className="btn" onClick={toggleVisibility}>
        <img src={filterIcon} alt="filter icon" />
        {isVisible ? "Hide Filters" : "Display Filters"}
      </button>
      {isVisible && (
        <div className="sort-filter">
          <div className="grouping-section filter-section">
            <label>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="sorting-section filter-section">
            <label>Ordering</label>
            <select
              value={sortOptions}
              onChange={(e) => setSortOptions(e.target.value)}
            >
              <option value="">None</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;
