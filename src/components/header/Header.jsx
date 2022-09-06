import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faTaxi,
  faCar,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, option) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: option === "+" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <div
            className={
              type === "list" ? "headerWrapper listMode" : "headerWrapper"
            }
          >
            <div className="headerList">
              <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
              </div>
              <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
              </div>
              <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
              </div>
              <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Atractions</span>
              </div>
              <div className="headerListItem active">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxi</span>
              </div>
            </div>
            {type !== "list" && (
              <>
                <h1 className="headerTitle">
                  A lifetime of discound? It's Genius
                </h1>
                <p className="headerDesc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat esse voluptatum, repellat perspiciatis reprehenderit
                  optio fugiat, quia deserunt voluptatibus et voluptate enim
                  alias quos, iure eaque ut illum voluptatem. Perspiciatis?
                </p>
                <button className="btn headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input
                      type="text"
                      placeholder="Where are you going"
                      className="headerSearchInput"
                    />
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="headerIcon"
                    />
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                      date[0].endDate,
                      "dd/MM/yyyy"
                    )}`}</span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                      />
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span
                      className="headerSearchText"
                      onClick={() => setOpenOptions(!openOptions)}
                    >
                      {`${options.adult} adult ${options.children} children ${options.room} room`}
                    </span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="openText">Adult</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "-")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "+")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="openText">Children</span>
                          <div className="optionCounter">
                            <button
                              className="optionCounterButton"
                              onClick={() =>
                                options.children <= 0
                                  ? ""
                                  : handleOption("children", "-")
                              }
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "+")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="openText">Room</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.room <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "-")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.room}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "+")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <button className="btn headerBtnSearch">Search</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
