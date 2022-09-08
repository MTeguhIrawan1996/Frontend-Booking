import React from "react";

import { DateRange } from "react-date-range";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

const ListHotels = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <React.Fragment>
      <div className="container">
        <div className="list-wrapper">
          <div className="ls-search">
            <h1 className="ls-title">Serach</h1>
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
            <button className="btn btn-search">Search</button>
          </div>
          <div className="ls-result">asd</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListHotels;
