import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateModal } from "../../features/modalSlice";
import { updateDate } from "../../features/searchSlice";
import useFetch from "../../hooks/useFetch";

const ModalReserve = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRoom, setSelectedRoom] = useState([]);
  const state = useSelector((state) => state.modal);
  const { data, loading, error } = useFetch(`/hotels/room/${state.idModal}`);
  const { date } = useSelector((state) => state.search);

  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    let dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDateInRange(date[0].startDate, date[0].endDate);

  // const isAvailable = (roomNumber) => {
  //   // const isFound = roomNumber.unavailableDate.some((date) =>
  //   //   allDates.includes(new Date(date).getTime())
  //   // );
  //   // return !isFound;
  // };

  const handleClose = () => {
    dispatch(updateModal());
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRoom.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      dispatch(
        updateDate({
          date: [
            {
              startDate: new Date(),
              endDate: new Date(),
              key: "selection",
            },
          ],
        })
      );
      dispatch(updateModal());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-custom" hidden={!state.openModal}>
      <div className="container-custom">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="icon-close"
          onClick={handleClose}
        />
        <span>Select your rooms:</span>
        {data.map((datas, i) => (
          <div className="rItem" key={i}>
            <div className="rItemInfo">
              <div className="rTitle">{datas.title}</div>
              <div className="rDesc">{datas.desc}</div>
              <div className="rMax">
                Max People: <b>{datas.maxPeople}</b>
              </div>
              <div className="rPrice">{datas.price}</div>
            </div>
            <div className="rSelectRoom">
              {datas.roomNumbers.map((roomNumber) => (
                <div className="rRoom" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={
                      roomNumber.unavailableDate.length >= 1 ? true : false
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="btn">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default ModalReserve;
