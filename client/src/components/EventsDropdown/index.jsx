import React, { useState } from "react";
import PropTypes from "prop-types";
import List from "./List";
import { ReactComponent as ArrowIcon } from "../../icons/Arrow.svg";
import axios from "axios";
import { getCookie } from "tiny-cookie";
/**
 * Dropdown component for showing user events
 * @param events (array of label-value objects)
 * example:
 * [{name: "name1", place: "place1", time:"1st September"}, {name: "name2", place: "place2", time:"1st September"}]
 */
const EventsDropdown = ({ events }) => {
  const [isOpened, setIsOpened] = useState(false);

  const getUserInfo = async id => {
    const result = await axios({
      url: `https://forge-development.herokuapp.com/api/users/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
    console.log(result.data);
    return result;
  };
  return (
    <div
      onMouseLeave={() => {
        setIsOpened(false);
      }}
      className="event-list_container"
    >
      <button
        className="event-header"
        onClick={() => {
          // getUserInfo(sessionStorage.getItem("id"));
          setIsOpened(!isOpened);
        }}
      >
        <span>My upcoming events ({events.length})</span>
        <span className={`event-arrow ${isOpened ? "event-rotated" : ""}`}>↓</span>
        {/*<ArrowIcon className={`event-arrow ${isOpened ? "event-rotated" : undefined}`} />*/}
      </button>
      {isOpened && <List events={events} />}
    </div>
  );
};

EventsDropdown.propTypes = {
  events: PropTypes.array,
};

export default EventsDropdown;
