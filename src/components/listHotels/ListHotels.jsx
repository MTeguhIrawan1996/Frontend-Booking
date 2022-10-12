import React, { useEffect } from "react";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import ResultItem from "../resultItem/ResultItem";
import useFetch from "../../hooks/useFetch";

const ListHotels = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { data, loading, error, reFetch } = useFetch(
    `hotels?city=${destination}&min=${min}&max=${max}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="list-wrapper">
          <div className="ls-search">
            <h1 className="ls-title">Search</h1>
            <div className="ls-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="ls-item">
              <label>Check in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="ls-item">
              <label>Options</label>
              <div className="ls-options">
                <div className="ls-optionItem">
                  <span className="ls-options-text">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="ls-option-input price"
                    min={1}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="ls-optionItem">
                  <span className="ls-options-text">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="ls-option-input price"
                    min={1}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="ls-optionItem">
                  <span className="ls-options-text">Adult</span>
                  <input
                    type="number"
                    className="ls-option-input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="ls-optionItem">
                  <span className="ls-options-text">Children</span>
                  <input
                    type="number"
                    className="ls-option-input"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="ls-optionItem">
                  <span className="ls-options-text">Room</span>
                  <input
                    type="number"
                    className="ls-option-input"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-search" onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="ls-result">
            <ResultItem data={data} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListHotels;
