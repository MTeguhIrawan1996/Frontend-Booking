import React, { useEffect } from "react";
import { DateRange } from "react-date-range";
import { useState } from "react";
import ResultItem from "../resultItem/ResultItem";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { updateDate } from "../../features/searchSlice";

const ListHotels = () => {
  const dispatch = useDispatch();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([]);
  const [options, setOptions] = useState({});
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const state = useSelector((state) => state.search);

  const { data, loading, error, reFetch } = useFetch(
    destination === ""
      ? `hotels`
      : `hotels?city=${destination}&min=${min}&max=${max}`
  );

  const handleClick = () => {
    reFetch();
  };

  useEffect(() => {
    setDestination(state.destination);
    setDate(state.date);
    setOptions(state.options);
  }, [state]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="list-wrapper">
          <div className="ls-search">
            <h1 className="ls-title">Search</h1>
            <div className="ls-item">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="ls-item">
              <label>Check in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${new Intl.DateTimeFormat("id", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(
                  new Date(state.date[0].startDate)
                )} - ${new Intl.DateTimeFormat("id", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(state.date[0].endDate))}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) =>
                    dispatch(updateDate({ date: [item.selection] }))
                  }
                  ranges={date}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
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
